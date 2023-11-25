import { Injectable } from '@angular/core';
import { LoginResponse } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly tokenUser = 'auth_token';
  private readonly gameData = 'game_data';

  /**
   * Função responsável por armazenar o token de autenticação do usuário no localStorage (armazenamento local)
   * @param token o token a ser armazenado
   */
  public save(token: string): void {
    localStorage.setItem(this.tokenUser, token);
  }

  /**
   * Função responsável por recuperar o token de autenticação do localStorage
   * @returns o token de autenticação armazenado ou null, se não estiver presente
   */
  public get(): string | null {
    return localStorage.getItem(this.tokenUser);
  }

  /**
   * Função responsável por remover o token de autenticação do localStorage
   */
  public delete(): void {
    localStorage.removeItem(this.tokenUser);
  }

  public saveGameData(gameData: LoginResponse['data']['game']): void {
    localStorage.setItem(this.gameData, JSON.stringify(gameData));
  }

  public getGameData(): LoginResponse['data']['game'] | null {
    const gameData = localStorage.getItem(this.gameData);

    return gameData ? JSON.parse(gameData) : null;
  }

  public deleteGameData(): void {
    localStorage.removeItem(this.gameData);
  }
}
