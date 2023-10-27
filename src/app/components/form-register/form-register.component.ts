import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.emailFormControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailFormControl.hasError('emailFormControl') ? 'Not a valid emailFormControl' : '';
  }
}
