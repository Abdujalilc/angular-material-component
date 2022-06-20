import { NgModule } from "@angular/core";
import { MatPaginatorIntl, MatPaginatorModule } from "@angular/material/paginator";
import { MyCustomPaginatorIntl } from "./my-custom-paginator";
import { PaginatorIntlExample } from "./paginator-intl-example";

@NgModule({
  imports: [MatPaginatorModule],
  declarations: [PaginatorIntlExample],
  providers: [{ provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl }],
})
export class PaginatorIntlExampleModule { }