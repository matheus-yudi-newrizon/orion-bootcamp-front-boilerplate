import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { HttpClient } from '@angular/common/http';
import { Create, ErrorResponse, ReturnCreate } from 'src/app/models/http/interface';
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
   * Realiza o cadastro de um novo usuário
   * @param data os dados do novo usuário a serem registrados
   * @returns uma Promise contendo os dados do novo usuário ou um objeto ErrorResponse no caso de erro
   */
  public async signUp(data: Create): Promise<ReturnCreate | ErrorResponse> {
    try {
      return await lastValueFrom(this.httpClient.post<ReturnCreate>(this.BASE_URL, data))
    } catch (error) {
      const errorResponse: ErrorResponse = {
        sucess: false,
        message: "The user with email" + data.email + "already exists."
      }
      return errorResponse;
    }
  }
}
