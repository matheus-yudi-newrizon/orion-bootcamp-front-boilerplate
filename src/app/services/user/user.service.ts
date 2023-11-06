import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { HttpClient } from '@angular/common/http';
import { Create, ErrorResponse, Read, ReturnCreate, ReturnRead } from 'src/app/models/http/interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends RequestService {

  constructor(protected httpCliente: HttpClient) {
    super(httpCliente);

    this.BASE_URL += '/signup/';
  }

  /**
   * Função responsável por realizar o cadastro de um novo usuário
   * @param data os dados do novo usuário a serem registrados
   * @returns uma Promise contendo os dados do novo usuário ou um objeto ErrorResponse no caso de erro
   */
  public async signUp(data: Create): Promise<ReturnCreate | ErrorResponse> {
    try {
      return await lastValueFrom(this.httpClient.post<ReturnCreate>(this.BASE_URL, data))
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: "The user with email" + data.email + "already exists."
      }
      return errorResponse;
    }
  }

  /**
   * Função responsável por enviar uma solicitação de redefinição de senha para o e-mail fornecido
   * @param email endereço de e-mail para o qual enviar a solicitação de redefinição de senha
   * @returns Promise contendo os dados de retorno da solicitação de redefinição de senha ou um objeto ErrorResponse no caso de erro
   */
  public async forgotPassword(email: Read): Promise<ReturnRead | ErrorResponse> {
    try {
      return await lastValueFrom(this.httpClient.post<ReturnRead>('/forgot-password/', email))
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: ""
      }
      return errorResponse;
    }
  }
}
