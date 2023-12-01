import { Injectable } from '@angular/core';
import { RequestService } from '../request/request.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorResponse, SuccessResponse } from 'src/app/models/http/interface';
import { lastValueFrom } from 'rxjs';

interface SignUpRequest {
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignUpResponse extends Omit<SuccessResponse, 'data'> {}

interface ForgotPasswordRequest {
  email: string;
}

interface ForgotPasswordResponse
  extends SuccessResponse<{
    message: string;
  }> {}

interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResponse extends SuccessResponse {
  data: {
    accessToken: string;
    game: {
      lives: number;
      record: number;
      combo: number;
      isActive: boolean;
    };
  };
}

interface ResetPasswordRequest {
  token: string;
  id: number;
  password: string;
  confirmPassword: string;
}

interface StartGameRequest {
  token: string;
}

interface StartGameResponse
  extends SuccessResponse<{
    lives: number;
    record: number;
    combo: number;
    isActive: boolean;
  }> {}

interface GenerateReviewRequest {
  token: string;
}

export interface GenerateReviewResponse
  extends SuccessResponse<{
    id: string;
    text: string;
    author: string;
  }> {}

export interface SendReplyRequest {
  reviewId: string;
  answer: number;
}

export interface SendReplyResponse
  extends SuccessResponse<{
    isCorrect: boolean;
    game: {
      lives: number;
      record: number;
      combo: number;
      isActive: boolean;
    };
  }> {}

export interface UploadMoviesRequest {
  title: string;
  token: string;
}

export interface UploadMoviesResponse extends Omit<SuccessResponse, 'data'> {
  data: Array<{ id: number; title: string; posterPath: string; releaseDate: string }>;
}

interface ConfirmEmailRequest {
  token: string;
  id: number;
}

interface ConfirmEmailResponse extends Omit<SuccessResponse, 'data'> {}

@Injectable({
  providedIn: 'root'
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
  public async signUp(data: SignUpRequest): Promise<SignUpResponse> {
    try {
      return await lastValueFrom(this.httpClient.post<SignUpResponse>(this.BASE_URL + '/auth/signup/', data));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'The user with email' + data.email + 'already exists.'
      };
      throw errorResponse;
    }
  }

  /**
   * Função responsável por enviar uma solicitação de redefinição de senha para o e-mail fornecido
   * @param email endereço de e-mail para o qual enviar a solicitação de redefinição de senha
   * @returns Promise contendo os dados de retorno da solicitação de redefinição de senha
   */
  public async forgotPassword(email: ForgotPasswordRequest): Promise<ForgotPasswordResponse> {
    try {
      return await lastValueFrom(this.httpClient.post<ForgotPasswordResponse>(this.BASE_URL + '/auth/forgot-password/', email));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'An error occurred while sending a password reset request. Please try again later.'
      };
      throw errorResponse;
    }
  }

  /**
   * Função responsável por realizar o login de usuário
   * @param data os dados do usuário qualquer
   * @returns uma Promise contendo os dados do novo usuário
   */
  public async login(data: LoginRequest): Promise<LoginResponse> {
    try {
      return await lastValueFrom(this.httpClient.post<LoginResponse>(this.BASE_URL + '/auth/login/', data));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'Email or password is invalid.'
      };
      throw errorResponse;
    }
  }

  /**
   * Função responsável por realizar a redefinição de senha para o usuário
   * @param data um objeto contendo as informações necessárias para a redefinição, como token, id, password e confirmPassword
   * @returns Promise contendo os dados redefinidos
   */
  public async resetPassword(data: ResetPasswordRequest): Promise<ForgotPasswordResponse> {
    try {
      return await lastValueFrom(this.httpClient.put<ForgotPasswordResponse>(this.BASE_URL + '/auth/reset-password/', data));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'An error occurred while resetting the password.'
      };
      throw errorResponse;
    }
  }

  /**
   * Função responsável por iniciar o jogo.
   * @param data token do usuário necessário para iniciar o jogo
   * @returns Promise contendo os dados do jogo
   */
  public async startGame(data: StartGameRequest): Promise<StartGameResponse> {
    try {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${data.token}`);

      return await lastValueFrom(this.httpClient.post<StartGameResponse>(this.BASE_URL + '/games/new/', null, { headers }));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'An error occurred while starting the game. Please try again later.'
      };
      throw errorResponse;
    }
  }

  /**
   * Função responsável por gerar uma nova review a cada token fornecido
   * @param data o token necessário para gerar a review
   * @returns Promise contendo a review
   */
  public async generateReview(data: GenerateReviewRequest): Promise<GenerateReviewResponse> {
    try {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${data.token}`);

      return await lastValueFrom(this.httpClient.get<GenerateReviewResponse>(this.BASE_URL + '/reviews/random/', { headers }));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'An error occurred while generating the review. Please try again later.'
      };
      throw errorResponse;
    }
  }

  /**
   * Envia a resposta do usuário do jogo
   * @param data os dados contendo id da review e resposta
   * @returns Promise que devolve se a resposta está correta e os dados do jogo
   */
  public async sendReply(data: SendReplyRequest, token: string): Promise<SendReplyResponse> {
    try {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      return await lastValueFrom(this.httpClient.put<SendReplyResponse>(this.BASE_URL + '/games/answer/', data, { headers }));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'An error occurred while sending the response. Please try again later.'
      };
      throw errorResponse;
    }
  }

  /**
   * Realiza o carregamento de informações sobre filmes usando os dados fornecidos
   * @param data os dados necessários para realizar o carregamento de informações sobre filmes
   * @returns Promise que devolve os dados dos filmes
   */
  public async uploadMovies(data: UploadMoviesRequest): Promise<UploadMoviesResponse> {
    try {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${data.token}`);

      return await lastValueFrom(this.httpClient.get<UploadMoviesResponse>(`${this.BASE_URL}/movies?title=${data.title}`, { headers }));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'An error occurred while uploading the movie. Please try again later.'
      };
      throw errorResponse;
    }
  }

  /**
   * Realiza a confirmação do e-mail
   * @param data o token e o id do usuário
   * @returns uma Promise contendo uma mensagem de sucesso
   */
  public async confirmEmail(data: ConfirmEmailRequest): Promise<ConfirmEmailResponse> {
    try {
      return await lastValueFrom(this.httpClient.put<ConfirmEmailResponse>(this.BASE_URL + '/auth/confirm-email/', data));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'An error occurred while confirming the email. Try again later.'
      };
      throw errorResponse;
    }
  }
}
