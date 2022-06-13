import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { GroupData } from './export-group-data';
import { StateGroup } from './state-group-model';

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

/**
 * @title Option groups autocomplete
 */
@Component({
  selector: 'autocomplete-optgroup-example',
  templateUrl: 'autocomplete-optgroup-example.html',
})
export class AutocompleteOptgroupExample implements OnInit {
  stateForm = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = GroupData;

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
      startWith(''),
      map(value => this._filterGroup(value || '')),
    );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }
}
