import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { HttpClient } from '@angular/common/http';
import { ErrorResponse, SuccessResponse } from 'src/app/models/http/interface';
import { lastValueFrom } from 'rxjs';

interface SignUpRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignUpResponse
  extends SuccessResponse<{
    id: number;
    email: string;
  }> {}

interface PasswordResetRequest {
  email: string;
}

interface PasswordResetResponse extends SuccessResponse {
  message: string;
}

interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface LoginResponse
  extends SuccessResponse<{
    id: number;
    email: string;
    token: string;
  }> {}

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
   * @returns uma Promise contendo os dados do novo usuário
   */
  public async signUp(
    data: SignUpRequest
  ): Promise<SignUpResponse> {
    try {
      return await lastValueFrom(
        this.httpClient.post<SignUpResponse>(this.BASE_URL + '/signup/', data)
      );
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'The user with email' + data.email + 'already exists.',
      };
      throw errorResponse;
    }
  }

  /**
   * Função responsável por enviar uma solicitação de redefinição de senha para o e-mail fornecido
   * @param email endereço de e-mail para o qual enviar a solicitação de redefinição de senha
   * @returns Promise contendo os dados de retorno da solicitação de redefinição de senha
   */
  public async forgotPassword(
    email: PasswordResetRequest
  ): Promise<PasswordResetResponse> {
    try {
      return await lastValueFrom(
        this.httpClient.post<PasswordResetResponse>(
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
      throw errorResponse;
    }
  }

  /**
   * Função responsável por realizar o login de usuário
   * @param data os dados do usuário qualquer
   * @returns uma Promise contendo os dados do novo usuário
   */
  public async login (
    data: LoginRequest
  ): Promise<LoginResponse> {
    try {
      return await lastValueFrom(
        this.httpClient.post<LoginResponse>(this.BASE_URL + '/login/', data)
      );
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'Email or password is invalid.',
      };
      throw errorResponse;
    }
  }
}
