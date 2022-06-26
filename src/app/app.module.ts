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
import { FormFieldAppearanceExample } from './components/13_form-field/01_form-field-appearance-example/form-field-appearance-example';
import { MyTelInput } from './components/13_form-field/02_form-field-custom-control-example/example-tel-input-component';
import { FormFieldCustomControlExample } from './components/13_form-field/02_form-field-custom-control-example/form-field-custom-control-example';
import { FormFieldErrorExample } from './components/13_form-field/03_form-field-error-example/form-field-error-example';
import { FormFieldHintExample } from './components/13_form-field/04_form-field-hint-example/form-field-hint-example';
import { FormFieldLabelExample } from './components/13_form-field/05_form-field-label-example/form-field-label-example';
import { FormFieldOverviewExample } from './components/13_form-field/06_form-field-overview-example/form-field-overview-example';
import { FormFieldPrefixSuffixExample } from './components/13_form-field/07_form-field-prefix-suffix-example/form-field-prefix-suffix-example';
import { FormFieldThemingExample } from './components/13_form-field/08_form-field-theming-example/form-field-theming-example';
import { GridListDynamicExample } from './components/14_grid-list/01_grid-list-dynamic-example/grid-list-dynamic-example';
import { GridListOverviewExample } from './components/14_grid-list/02_grid-list-overview-example/grid-list-overview-example';
import { IconOverviewExample } from './components/15_icons/01_icon-overview-example/icon-overview-example';
import { IconSvgExample } from './components/15_icons/02_icon-svg-example/icon-svg-example';
import { InputClearableExample } from './components/16_input/01_input-clearable-example/input-clearable-example';
import { InputErrorStateMatcherExample } from './components/16_input/02_input-error-state-matcher-example/input-error-state-matcher-example';
import { InputErrorsExample } from './components/16_input/03_input-errors-example/input-errors-example';
import { InputFormExample } from './components/16_input/04_input-form-example/input-form-example';
import { InputHintExample } from './components/16_input/05_input-hint-example/input-hint-example';
import { InputOverviewExample } from './components/16_input/06_input-overview-example/input-overview-example';
import { InputPrefixSuffixExample } from './components/16_input/07_input-prefix-suffix-example/input-prefix-suffix-example';
import { ListOverviewExample } from './components/17_list/01_list-overview-example/list-overview-example';
import { ListSectionsExample } from './components/17_list/02_list-sections-example/list-sections-example';
import { ListSelectionExample } from './components/17_list/03_list-selection-example/list-selection-example';
import { ListSingleSelectionExample } from './components/17_list/04_list-single-selection-example/list-single-selection-example';
import { MenuIconsExample } from './components/18_menu/01_menu-icons-example/menu-icons-example';
import { MenuNestedExample } from './components/18_menu/02_menu-nested-example/menu-nested-example';
import { MenuOverviewExample } from './components/18_menu/03_menu-overview-example/menu-overview-example';
import { MenuPositionExample } from './components/18_menu/04_menu-position-example/menu-position-example';
import { PaginatorConfigurableExample } from './components/19_paginator/01_paginator-configurable-example/paginator-configurable-example';
import { PaginatorOverviewExample } from './components/19_paginator/03_paginator-overview-example/paginator-overview-example';
import { ProgressBarBufferExample } from './components/20_progress-bar/01_progress-bar-buffer-example/progress-bar-buffer-example';
import { ProgressBarConfigurableExample } from './components/20_progress-bar/02_progress-bar-configurable-example/progress-bar-configurable-example';
import { ProgressBarDeterminateExample } from './components/20_progress-bar/03_progress-bar-determinate-example/progress-bar-determinate-example';
import { PaginatorIntlExampleModule } from './components/19_paginator/02_paginator-intl-example/paginator-intl-example.module';
import { ProgressSpinnerConfigurableExample } from './components/21_progress-spinner/01_progress-spinner-configurable-example/progress-spinner-configurable-example';
import { ProgressSpinnerOverviewExample } from './components/21_progress-spinner/02_progress-spinner-overview-example/progress-spinner-overview-example';
import { RadioNgModelExample } from './components/22_radio-button/01_radio-ng-model-example/radio-ng-model-example';
import { RadioOverviewExample } from './components/22_radio-button/02_radio-overview-example/radio-overview-example';
import { RippleOverviewExample } from './components/23_ripples/ripple-overview-example/ripple-overview-example';
import { SelectCustomTriggerExample } from './components/24_select/01_select-custom-trigger-example/select-custom-trigger-example';
import { SelectDisabledExample } from './components/24_select/02_select-disabled-example/select-disabled-example';
import { SelectErrorStateMatcherExample } from './components/24_select/03_select-error-state-matcher-example/select-error-state-matcher-example';
import { SelectFormExample } from './components/24_select/04_select-form-example/select-form-example';
import { SelectHintErrorExample } from './components/24_select/05_select-hint-error-example/select-hint-error-example';
import { SelectInitialValueExample } from './components/24_select/06_select-initial-value-example/select-initial-value-example';
import { SelectOptgroupExample } from './components/24_select/07_select-optgroup-example/select-optgroup-example';
import { SelectOverviewExample } from './components/24_select/08_select-overview-example/select-overview-example';
import { SelectReactiveFormExample } from './components/24_select/09_select-reactive-form-example/select-reactive-form-example';
import { SelectValueBindingExample } from './components/24_select/11_select-value-binding-example/select-value-binding-example';
import { SidenavAutosizeExample } from './components/25_sidenav/01_sidenav-autosize-example/sidenav-autosize-example';
import { SidenavBackdropExample } from './components/25_sidenav/02_sidenav-backdrop-example/sidenav-backdrop-example';
import { SidenavDrawerOverviewExample } from './components/25_sidenav/03_sidenav-drawer-overview-example/sidenav-drawer-overview-example.ts/sidenav-drawer-overview-example';
import { SelectResetExample } from './components/24_select/10_select-reset-example/select-reset-example';
import { SlideToggleConfigurableExample } from './components/26_slide-toggle/01_slide-toggle-configurable-example/slide-toggle-configurable-example';
import { SlideToggleFormsExample } from './components/26_slide-toggle/02_slide-toggle-forms-example/slide-toggle-forms-example';
import { SlideToggleOverviewExample } from './components/26_slide-toggle/03_slide-toggle-overview-example/slide-toggle-overview-example';


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
    DividerOverviewExample, ExpansionExpandCollapseAllExample, ExpansionOverviewExample, ExpansionStepsExample,
    FormFieldAppearanceExample, MyTelInput, FormFieldCustomControlExample, FormFieldErrorExample, FormFieldHintExample,
    FormFieldLabelExample, FormFieldOverviewExample, FormFieldPrefixSuffixExample, FormFieldThemingExample,
    GridListDynamicExample, GridListOverviewExample, IconOverviewExample, IconSvgExample,
    InputClearableExample, InputErrorStateMatcherExample, InputErrorsExample, InputFormExample,
    InputHintExample, InputOverviewExample, InputPrefixSuffixExample, ListOverviewExample,
    ListSectionsExample, ListSelectionExample, ListSingleSelectionExample, MenuIconsExample,
    MenuNestedExample, MenuOverviewExample, MenuPositionExample, PaginatorConfigurableExample,
    PaginatorOverviewExample, ProgressBarBufferExample, ProgressBarConfigurableExample,
    ProgressBarDeterminateExample, ProgressSpinnerConfigurableExample, ProgressSpinnerOverviewExample,
    RadioNgModelExample, RadioOverviewExample, RippleOverviewExample, SelectCustomTriggerExample,
    SelectDisabledExample, SelectErrorStateMatcherExample, SelectFormExample, SelectHintErrorExample,
    SelectInitialValueExample, SelectOptgroupExample, SelectOverviewExample,SelectReactiveFormExample,
    SelectResetExample,SelectValueBindingExample,SidenavAutosizeExample,SidenavBackdropExample,
    SidenavDrawerOverviewExample,SlideToggleConfigurableExample,SlideToggleFormsExample,
    SlideToggleOverviewExample,
    
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, MyMaterialModule, BrowserAnimationsModule,
    PaginatorIntlExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
