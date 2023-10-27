import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  emailPattern = /^[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /**
     * FormGroup contendo os campos do formulário de cadastro
     */
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required]],
    });
  }

  /**
   * Submete o formulário
   * @returns
   */
  public submit(): void {
    if (!this.registerForm.valid) {
      return;
    }
    console.log(this.registerForm.value);
  }

  /**
   * Acessar o campo de e-mail do formulário
   */
  public get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  /**
   * Obtém o valor da senha e atribui ao formulário
   * @param password
   */
  public getPassword(password: string) {
    console.log("Password value received:", this.registerForm);
    this.registerForm.patchValue({ password: password });
  }
}
