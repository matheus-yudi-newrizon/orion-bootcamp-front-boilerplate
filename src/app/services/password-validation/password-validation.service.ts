import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordValidationService {

  /**
   * Verifica se a senha atende ao tamanho mínimo esperado
   * @param password senha inserida a ser validada
   * @returns valor booleano indicando se o críterio foi atendido
   */
  public passwordSize(password: string): boolean {
    const size = password.length >= 8;
    return size;
  }

  /**
   * Verifica se a senha contém uma letra maiúscula
   * @param password a senha inserida a ser validada
   * @returns valor booleano indicando se o críterio foi atendido
   */
  public upperCase(password: string): boolean {
    const alphabet = /[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
    return alphabet.test(password);
  }

  /**
   * Verifica se a senha contém um caractere especial
   * @param password a senha inserida a ser validada
   * @returns valor booleano indicando se o críterio foi atendido
   */
  public specialChar(password: string): boolean {
    const character = /[#?!@$%^&*-]/;
    return character.test(password);
  }

  /**
   * Valida os requisitos da senha com base no tamanho, presença de letras maiúsculas e caracteres especiais
   * @param password a senha inserida a ser validada
   * @returns valor booleano indicando se a senha atende a todos os requisitos
   */
  public validatePassword(password: string): boolean {
    const passwordSize = this.passwordSize(password);
    const upperCase = this.upperCase(password);
    const specialChar = this.specialChar(password);
    return passwordSize && upperCase && specialChar;
  }
}
