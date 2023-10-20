import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private API: string = environment.baseUrl;

  constructor(private httpCliente: HttpClient) { }

  /**
   * Simulação de solicitação GET para a API
   */
  testeGet(): any {
    return this.httpCliente.get(`${this.API}/teste`);
  }

  /**
   * Simulaçãp de solicitação POST para a API
   * @param info informações a serem enviadas para a API
   */
  testePost(info: any): Observable<any> {
    return this.httpCliente.post<any>(`${this.API}/teste`, info);
  }
}
