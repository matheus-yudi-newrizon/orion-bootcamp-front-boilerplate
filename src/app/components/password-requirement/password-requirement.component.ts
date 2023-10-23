import { Component } from '@angular/core';
import { PasswordValidationService } from 'src/app/services/password-validation/password-validation.service';

@Component({
  selector: 'app-password-requirement',
  templateUrl: './password-requirement.component.html',
  styleUrls: ['./password-requirement.component.scss']
})
export class PasswordRequirementComponent {
  password = '';
  upperCase = false;
  specialChar = false;
  passwordSize = false;
  samePassword = true;

  constructor(private passwordValidationService: PasswordValidationService) { }

  /**
   * Valida a senha inserida baseada no tamanho, letras maiúsculas e caracteres especiais
   * @param passwordValue a senha a ser validada pelo service
   */
  validatePassword(passwordValue: string): void {

    if (passwordValue) {
      this.password = passwordValue;
      this.passwordSize = this.passwordValidationService.passwordSize(this.password);
      this.upperCase = this.passwordValidationService.upperCase(this.password);
      this.specialChar = this.passwordValidationService.specialChar(this.password);
    }
  }

  /**
   * Compara duas strings de senha para verificar se são iguais
   * @param password senha inserida pelo usuário
   * @param confirmPassword senha de confirmação inserida pelo usuário
   * @returns valor booleano indicando se as senhas são iguais
   */
  comparePassword(password: string, confirmPassword: string): boolean {

    if (password === confirmPassword) {
      this.samePassword = true;
    } else {
      this.samePassword = false;
    }
    return this.samePassword;
  }
}
