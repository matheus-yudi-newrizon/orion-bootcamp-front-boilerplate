import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(private userService: UserService){}

  // Atributos públicos
  public hide = true;
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(3)]),
  });

  // Método público para obter o controle de email
  public get emailInput() {
    return this.signin.get('email');
  }

  // Método público para obter o controle de senha
  public get passwordInput() {
    return this.signin.get('password');
  }

  /**
   * Método público para realizar alguma ação quando o formulário é submetido.
   * Por exemplo, você pode adicionar aqui a lógica para o login.
   */
  public submit() {
    // Lógica de submissão do formulário
  }

  public async login(): Promise<void> {
    if(this.signin.valid) {
      try {
        await this.userService.login(this.signin.value)
      } catch (error) {
        console.error('',error)
      }

    }
  }
}
