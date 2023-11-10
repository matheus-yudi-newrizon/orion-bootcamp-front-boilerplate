import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';
import { RequestData, SuccessResponse } from 'src/app/models/http/interface';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  protected BASE_URL: string = environment.baseUrl;

  constructor(protected httpClient: HttpClient) { }

  /**
   * Realiza uma requisição de leitura assíncrona
   * @param id recurso a ser lido
   * @returns uma Promise
   */
  public async read(id: number): Promise<SuccessResponse> {
    try {
      return await lastValueFrom(this.httpClient.get<SuccessResponse>(`${this.BASE_URL}/${id}`));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Realiza uma operação de criação assíncrona
   * @param data dados a serem criados
   * @returns uma Promise
   */
  public async create(data: RequestData): Promise<SuccessResponse> {
    try {
      return await lastValueFrom(this.httpClient.post<SuccessResponse>(`${this.BASE_URL}/`, data));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Realiza uma operação de atualização assíncrona
   * @param id id do objeto a ser atualizado
   * @param data a serem atualizados
   * @returns uma Promise
   */
  public async update(id: number, data: RequestData): Promise<SuccessResponse> {
    try {
      return await lastValueFrom(this.httpClient.put<SuccessResponse>(`${this.BASE_URL}/${id}`, data));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  /**
   * Realiza uma operação de exclusão assíncrona
   * @param id id do objeto a ser excluído
   * @returns uma Promise
   */
  public async delete(id: number): Promise<SuccessResponse> {
    try {
      return await lastValueFrom(this.httpClient.delete<SuccessResponse>(`${this.BASE_URL}/${id}`));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
