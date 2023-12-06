import { Injectable } from '@angular/core';
import { LoginResponse } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly tokenUser = 'auth_token';
  private readonly gameData = 'game_data';
  private readonly rememberMe = 'remember_me';
  private type: 'sessionStorage' | 'localStorage' = 'localStorage';

  /**
   * Função responsável setar o tipo de armazenamento
   * @param type o tipo de armazenamento
   */
  public setStorage(type: typeof this.type): void {
    this.type = type;
  }

  /**
   * Função responsável por armazenar valor do remember me no localStorage (armazenamento local)
   * @param rememberMe o valor do boolean
   */
  public saveRememberMe(rememberMe: boolean): void {
    localStorage.setItem(this.rememberMe, JSON.stringify(rememberMe));
  }

  /**
   * Função responsável por recuperar o valor do remember me do localStorage
   * @returns o valor do remember me armazenado ou null, se não estiver presente
   */
  public getRememberMe(): boolean {
    const rememberMe = localStorage.getItem(this.rememberMe);

    return rememberMe ? JSON.parse(rememberMe) : false;
  }

  /**
   * Função responsável por armazenar o token de autenticação do usuário
   * @param token o token a ser armazenado
   */
  public save(token: string): void {
    window[this.type].setItem(this.tokenUser, token);
  }

  /**
   * Função responsável por recuperar o token de autenticação
   * @returns o token de autenticação armazenado ou null, se não estiver presente
   */
  public get(): string | null {
    return window[this.type].getItem(this.tokenUser);
  }

  /**
   * Função responsável por remover o token de autenticação
   */
  public delete(): void {
    window[this.type].removeItem(this.tokenUser);
  }

  /**
   * Função responsável por armazenar os dados do jogo do usuário
   * @param gameData os dados do jogo a serem armazenados
   */
  public saveGameData(gameData: LoginResponse['data']['game']): void {
    window[this.type].setItem(this.gameData, JSON.stringify(gameData));
  }

  /**
   * Função responsável por recuperar os dados do jogo do usuário
   * @returns os dados do jogo do usuário armazenado ou null, se não estiver presente
   */
  public getGameData(): LoginResponse['data']['game'] | null {
    const gameData = window[this.type].getItem(this.gameData);

    return gameData ? JSON.parse(gameData) : null;
  }

  /**
   * Função responsável por remover os dados do jogo
   */
  public deleteGameData(): void {
    window[this.type].removeItem(this.gameData);
  }
}
