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

@NgModule({
  declarations: [
    AppComponent,AutocompleteAutoActiveFirstOptionExample,AutocompleteDisplayExample,
    AutocompleteFilterExample, AutocompleteOptgroupExample,AutocompleteOverviewExample,
    BadgeOverviewExample,BottomSheetOverviewExample,BottomSheetOverviewExampleSheet,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,MyMaterialModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
