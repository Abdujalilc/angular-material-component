import {Component,} from '@angular/core';
import {FormControl,FormGroup,} from '@angular/forms';
import { MyTel } from './my-tel-model';

/** @title Form field with custom telephone number input control. */
@Component({
    selector: 'form-field-custom-control-example',
    templateUrl: './form-field-custom-control-example.html',
})
export class FormFieldCustomControlExample {
    form: FormGroup = new FormGroup({
        tel: new FormControl(new MyTel('', '', '')),
    });
}


