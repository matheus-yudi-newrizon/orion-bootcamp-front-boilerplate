import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

export const emailPattern = /^[A-Za-z0-9.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isLoading = false;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    /**
     * FormGroup contendo os campos do formulário de cadastro
     */
    this.registerForm = this.formBuilder.group({
      email: [sessionStorage.getItem('email') || '', [Validators.required, Validators.pattern(emailPattern)]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
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
  public getPassword(password: string, confirmPassword: string) {
    this.registerForm.patchValue({ password: password });
    this.registerForm.patchValue({ confirmPassword: confirmPassword });
  }

  /**
   * Realiza o cadastro de um novo usuário e redireciona para as rotas de sucesso ou falha
   * em caso de erro durante a criação da conta
   * @throws {Error} Se houver algum problema durante o processo de criação da conta
   */
  public async createAccount(): Promise<void> {

    if (this.registerForm.valid) {
      try {
        this.isLoading = true;

        const value = await this.userService.signUp(this.registerForm.value);
        const { success } = value;

        const router = success ? '/registration-success' : '/registration-failure';
        this.router.navigate([router]);
      } catch (error) {

        console.error("error: ", error);
        this.router.navigate(['/registration-failure']);
      } finally {
        this.isLoading = false;
      }
    }
  }

  /**
   * Mantém o valor de email inserido pelo usuário na seção atual
   */
  public storeFormValue(): void {
    sessionStorage.setItem('email', this.registerForm.value.email);
  }
}
