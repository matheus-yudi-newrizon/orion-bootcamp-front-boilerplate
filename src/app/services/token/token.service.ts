import { Injectable } from '@angular/core';
import { LoginResponse } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly tokenUser = 'auth_token';

  /**
   * Função responsável por armazenar o token de autenticação do usuário no localStorage (armazenamento local)
   * @param loginResponse a resposta do login com o token a ser armazenado
   */
  public saveToken(loginResponse: LoginResponse): void {
    localStorage.setItem(this.tokenUser, loginResponse.token);
  }

  /**
   * Função responsável por recuperar o token de autenticação do localStorage
   * @returns o token de autenticação armazenado ou null, se não estiver presente
   */
  public getToken(): string | null {
    return localStorage.getItem(this.tokenUser);
  }

  /**
   * Função responsável por remover o token de autenticação do localStorage
   */
  public deleteToken(): void {
    localStorage.removeItem(this.tokenUser);
  }
}
