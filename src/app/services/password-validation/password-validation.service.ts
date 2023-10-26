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
}
