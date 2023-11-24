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

interface ForgotPasswordRequest {
  email: string;
}

interface ForgotPasswordResponse extends SuccessResponse {
  message: string;
}

interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface LoginResponse
  extends SuccessResponse<{
    token: string;
    game: {
      lives: number;
      score: number;
      combo: number;
      isActive: boolean;
    };
  }> {}
interface ResetPasswordRequest {
  token: string;
  id: number;
  password: string;
  confirmPassword: string;
}

interface StartGameRequest {
  token: string;
}

interface StartGameResponse extends SuccessResponse {
  lives: number;
  score: number;
  combo: number;
  isActive: boolean;
}

interface GenerateReviewRequest {
  token: string;
}

interface GenerateReviewResponse extends SuccessResponse {
  id: string;
  text: string;
}

interface SendReplyRequest {
  reviewId: string;
  answer: string;
}

interface SendReplyResponse extends SuccessResponse {
  isCorrect: boolean;
  game: {
    lives: number;
    score: number;
    combo: number;
    isActive: boolean;
  };
}

interface UploadMoviesRequest {
  title: string;
  token: string;
}

interface UploadMoviesResponse extends SuccessResponse {
  title: string;
  posterPath: string;
  releaseDate: string;
}

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
   * @returns Promise contendo os dados redefinidos ou um objeto ErrorResponse no caso de erro
   */
  public async resetPassword(data: ResetPasswordRequest): Promise<ForgotPasswordResponse | ErrorResponse> {
    try {
      return await lastValueFrom(this.httpClient.post<ForgotPasswordResponse>(this.BASE_URL + '/auth/reset-password/', data));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'An error occurred while resetting the password.'
      };
      return errorResponse;
    }
  }

  /**
   * Função responsável por iniciar o jogo.
   * @param token token do usuário necessário para iniciar o jogo
   * @returns Promise contendo os dados do jogo ou um objeto ErrorResponse no caso de erro
   */
  public async startGame(token: StartGameRequest): Promise<StartGameResponse | ErrorResponse> {
    try {
      return await lastValueFrom(this.httpClient.post<StartGameResponse>(this.BASE_URL + '/games/new/', token));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'An error occurred while starting the game. Please try again later.'
      };
      return errorResponse;
    }
  }

  /**
   * Função responsável por gerar uma nova review a cada token fornecido
   * @param token o token necessário para gerar a review
   * @returns Promise contendo a review ou um objeto ErrorResponse no caso de erro
   */
  public async generateReview(token: GenerateReviewRequest): Promise<GenerateReviewResponse | ErrorResponse> {
    try {
      return await lastValueFrom(this.httpClient.post<GenerateReviewResponse>(this.BASE_URL + '/reviews/random/', token));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'An error occurred while generating the review. Please try again later.'
      };
      return errorResponse;
    }
  }

  /**
   * Envia a resposta do usuário do jogo
   * @param data os dados contendo id da review e resposta
   * @returns Promise que devolve se a resposta está correta e os dados do jogo ou um objeto ErrorResponse no caso de erro
   */
  public async sendReply(data: SendReplyRequest): Promise<SendReplyResponse | ErrorResponse> {
    try {
      return await lastValueFrom(this.httpClient.post<SendReplyResponse>(this.BASE_URL + '/games/answer/', data));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'An error occurred while sending the response. Please try again later.'
      };
      return errorResponse;
    }
  }

  /**
   * Realiza o carregamento de informações sobre filmes usando os dados fornecidos
   * @param data os dados necessários para realizar o carregamento de informações sobre filmes
   * @returns Promise que devolve os dados dos filmes ou um objeto ErrorResponse no caso de erro
   */
  public async uploadMovies(data: UploadMoviesRequest): Promise<UploadMoviesResponse | ErrorResponse> {
    try {
      return await lastValueFrom(this.httpClient.post<UploadMoviesResponse>(this.BASE_URL + '/movies/', data));
    } catch (error) {
      const errorResponse: ErrorResponse = {
        success: false,
        message: 'An error occurred while uploading the movie. Please try again later.'
      };
      return errorResponse;
    }
  }
}
