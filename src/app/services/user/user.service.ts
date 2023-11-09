import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { HttpClient } from '@angular/common/http';
import { Create, ErrorResponse, Read, ReturnCreate, ReturnRead } from 'src/app/models/http/interface';
import { lastValueFrom } from 'rxjs';

/* Interface para a solicitação de redefinição de senha */
interface PasswordResetRequest extends Read {
  email: string;
}

interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    id: number;
    email: string;
    token: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class UserService extends RequestService {
  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  /**
   * Função responsável por realizar o cadastro de um novo usuário
   * @param data os dados do novo usuário a serem registrados
   * @returns uma Promise contendo os dados do novo usuário ou um objeto ErrorResponse no caso de erro
   */
  public async signUp(data: Create): Promise<ReturnCreate | ErrorResponse> {
    try {
      return await lastValueFrom(
        this.httpClient.post<ReturnCreate>(this.BASE_URL + '/signup/', data)
      );
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'The user with email' + data.email + 'already exists.',
      };
      return errorResponse;
    }
  }

  /**
   * Função responsável por enviar uma solicitação de redefinição de senha para o e-mail fornecido
   * @param email endereço de e-mail para o qual enviar a solicitação de redefinição de senha
   * @returns Promise contendo os dados de retorno da solicitação de redefinição de senha ou um objeto ErrorResponse no caso de erro
   */
  public async forgotPassword(
    email: PasswordResetRequest
  ): Promise<ReturnRead | ErrorResponse> {
    try {
      return await lastValueFrom(
        this.httpClient.post<ReturnRead>(
          this.BASE_URL + '/forgot-password/',
          email
        )
      );
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message:
          'An error occurred while sending a password reset request. Please try again later.',
      };
      return errorResponse;
    }
  }

  public async login(
    data: LoginRequest
  ): Promise<LoginResponse | ErrorResponse> {
    try {
      return await lastValueFrom(
        this.httpClient.get<LoginResponse>(this.BASE_URL + '/login')
      );
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: '',
      };
      return errorResponse;
    }
  }
}
