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
import { ExpansionExpandCollapseAllExample } from './components/12_expansion-panel/01_expansion-expand-collapse-all-example/expansion-expand-collapse-all-example';
import { ExpansionOverviewExample } from './components/12_expansion-panel/02_expansion-overview-example/expansion-overview-example';
import { ExpansionStepsExample } from './components/12_expansion-panel/03_expansion-steps-example/expansion-steps-example';
import { FormFieldAppearanceExample } from './components/13_FormField/01_form-field-appearance-example/form-field-appearance-example';
import { MyTelInput } from './components/13_FormField/02_form-field-custom-control-example/example-tel-input-component';
import { FormFieldCustomControlExample } from './components/13_FormField/02_form-field-custom-control-example/form-field-custom-control-example';
import { FormFieldErrorExample } from './components/13_FormField/03_form-field-error-example/form-field-error-example';
import { FormFieldHintExample } from './components/13_FormField/04_form-field-hint-example/form-field-hint-example';
import { FormFieldLabelExample } from './components/13_FormField/05_form-field-label-example/form-field-label-example';
import { FormFieldOverviewExample } from './components/13_FormField/06_form-field-overview-example/form-field-overview-example';
import { FormFieldPrefixSuffixExample } from './components/13_FormField/07_form-field-prefix-suffix-example/form-field-prefix-suffix-example';
import { FormFieldThemingExample } from './components/13_FormField/08_form-field-theming-example/form-field-theming-example';
import { GridListDynamicExample } from './components/14_GridList/01_grid-list-dynamic-example/grid-list-dynamic-example';
import { GridListOverviewExample } from './components/14_GridList/02_grid-list-overview-example/grid-list-overview-example';
import { IconOverviewExample } from './components/15_Icons/01_icon-overview-example/icon-overview-example';
import { IconSvgExample } from './components/15_Icons/02_icon-svg-example/icon-svg-example';

@NgModule({
  declarations: [
    AppComponent, AutocompleteAutoActiveFirstOptionExample, AutocompleteDisplayExample,
    AutocompleteFilterExample, AutocompleteOptgroupExample, AutocompleteOverviewExample,
    BadgeOverviewExample, BottomSheetOverviewExample, BottomSheetOverviewExampleSheet, ButtonOverviewExample,
    ButtonToggleModeExample, CardMediaSizeExample, CheckboxOverviewExample, ChipsAutocompleteExample,
    ChipsAvatarExample, ChipsDragDropExample, ChipsFormControlExample, ChipsInputExample, ChipsOverviewExample,
    ChipsStackedExample, DateRangePickerFormsExample, DateRangePickerOverviewExample,
    DatepickerOverviewExample, DialogAnimationsExample, DialogContentExample, DialogContentExampleDialog,
    DialogDataExample, DialogDataExampleDialog, DialogElementsExample, DialogElementsExampleDialog,
    DialogFromMenuExample, DialogFromMenuExampleDialog, DialogOverviewExample, DialogOverviewExampleDialog,
    DividerOverviewExample, ExpansionExpandCollapseAllExample,ExpansionOverviewExample,ExpansionStepsExample,
    FormFieldAppearanceExample, MyTelInput,   FormFieldCustomControlExample,FormFieldErrorExample,FormFieldHintExample,
    FormFieldLabelExample,FormFieldOverviewExample,FormFieldPrefixSuffixExample,FormFieldThemingExample,
    GridListDynamicExample,GridListOverviewExample,IconOverviewExample,IconSvgExample,
    
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, MyMaterialModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
