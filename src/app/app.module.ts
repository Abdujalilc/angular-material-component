import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyMaterialModule } from './material.module';
import { AutocompleteAutoActiveFirstOptionExample } from './components/01_autocomplete/01_highlight-first/autocomplete-auto-active-first-option-example';
import { AutocompleteDisplayExample } from './components/01_autocomplete/02_display-value/autocomplete-display-example';
import { AutocompleteFilterExample } from './components/01_autocomplete/03_filter-auto-complete/autocomplete-filter-example';
import { AutocompleteOptgroupExample } from './components/01_autocomplete/04_autocomplete-optgroup-example/autocomplete-optgroup-example';
import { AutocompleteOverviewExample } from './components/01_autocomplete/05_autocomplete-overview-example/autocomplete-overview-example';
import { BadgeOverviewExample } from './components/02_badge/badge-overview-example';
import { BottomSheetOverviewExample, BottomSheetOverviewExampleSheet } from './components/03_bottom-sheet/bottom-sheet-overview-example';
import { ButtonOverviewExample } from './components/04_button/button-overview-example';
import { ButtonToggleModeExample } from './components/05_button-toggle/button-toggle-mode-example';
import { CardMediaSizeExample } from './components/06_card/card-media-size-example';
import { CheckboxOverviewExample } from './components/07_checkbox/checkbox-overview-example';
import { ChipsAutocompleteExample } from './components/08_chips/01_chips-autocomplete-example/chips-autocomplete-example';
import { ChipsAvatarExample } from './components/08_chips/02_chips-avatar-example/chips-avatar-example';
import { ChipsDragDropExample } from './components/08_chips/03_chips-drag-drop-example/chips-drag-drop-example';
import { ChipsFormControlExample } from './components/08_chips/04_chips-form-control-example/chips-form-control-example';
import { ChipsInputExample } from './components/08_chips/05_chips-input-example/chips-input-example';
import { ChipsOverviewExample } from './components/08_chips/06_chips-overview-example/chips-overview-example';
import { ChipsStackedExample } from './components/08_chips/07_chips-stacked-example/chips-stacked-example';
import { DateRangePickerFormsExample } from './components/09_date-picker/01_date-range-picker-forms-example/date-range-picker-forms-example';
import { DateRangePickerOverviewExample } from './components/09_date-picker/02_date-range-picker-overview-example/date-range-picker-overview-example';
import { DatepickerOverviewExample } from './components/09_date-picker/03_datepicker-overview-example/datepicker-overview-example';
import { DialogAnimationsExample } from './components/10_dialog/01_dialog-animations-example/dialog-animations-example';
import { DialogContentExample, DialogContentExampleDialog } from './components/10_dialog/02_dialog-content-example/dialog-content-example';
import { DialogDataExample, DialogDataExampleDialog } from './components/10_dialog/03_dialog-data-example/dialog-data-example';
import { DialogElementsExample, DialogElementsExampleDialog } from './components/10_dialog/04_dialog-elements-example/dialog-elements-example';
import { DialogFromMenuExample, DialogFromMenuExampleDialog } from './components/10_dialog/05_dialog-from-menu-example/dialog-from-menu-example';
import { DialogOverviewExample, DialogOverviewExampleDialog } from './components/10_dialog/06_dialog-overview-example/dialog-overview-example';
import { DividerOverviewExample } from './components/11_devider/divider-overview-example';

@NgModule({
  declarations: [
    AppComponent,AutocompleteAutoActiveFirstOptionExample,AutocompleteDisplayExample,
    AutocompleteFilterExample, AutocompleteOptgroupExample,AutocompleteOverviewExample,
    BadgeOverviewExample,BottomSheetOverviewExample,BottomSheetOverviewExampleSheet,ButtonOverviewExample,
    ButtonToggleModeExample,CardMediaSizeExample,CheckboxOverviewExample,ChipsAutocompleteExample, 
    ChipsAvatarExample,ChipsDragDropExample,ChipsFormControlExample,ChipsInputExample,ChipsOverviewExample,
    ChipsStackedExample,DateRangePickerFormsExample,DateRangePickerOverviewExample,
    DatepickerOverviewExample,DialogAnimationsExample,DialogContentExample,DialogContentExampleDialog,
    DialogDataExample,DialogDataExampleDialog,DialogElementsExample,DialogElementsExampleDialog,
    DialogFromMenuExample,DialogFromMenuExampleDialog,DialogOverviewExample,DialogOverviewExampleDialog,
    DividerOverviewExample,    
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,MyMaterialModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
