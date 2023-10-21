import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { interval, firstValueFrom, lastValueFrom } from 'rxjs';
import { Create, Read, Update, Delete } from 'src/app/models/http/interface';

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
  public async read(id: number): Promise<Read> {
    try {
      return await lastValueFrom(this.httpClient.get<Read>(`${this.BASE_URL}/${id}`));
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
  public async create(data: Create): Promise<Create> {
    try {
      return await lastValueFrom(this.httpClient.post<Create>(`${this.BASE_URL}/`, data));
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
  public async update(id: number, data: Update): Promise<Update> {
    try {
      return await lastValueFrom(this.httpClient.put<Update>(`${this.BASE_URL}/${id}`, data));
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
  public async delete(id: number): Promise<Delete> {
    try {
      return await lastValueFrom(this.httpClient.delete<Delete>(`${this.BASE_URL}/${id}`));
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}