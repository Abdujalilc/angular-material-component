import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MyMaterialModule } from './material.module';
import { AutocompleteAutoActiveFirstOptionExample } from './components/autocomplete/highlight-first/autocomplete-auto-active-first-option-example';


@NgModule({
  declarations: [
    AppComponent,AutocompleteAutoActiveFirstOptionExample,
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,MyMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
