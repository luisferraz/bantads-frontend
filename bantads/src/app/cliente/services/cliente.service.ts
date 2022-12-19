import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { Transacao } from 'src/app/shared/models/transacao.model';

const LS_CHAVE: string = "clientes";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  BASE_URL = "http://localhost:3000/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor (private httpClient: HttpClient) { }

  listarTodos(): Cliente[] {
    const clientes = localStorage[LS_CHAVE];
    return clientes ? JSON.parse(clientes) :[];
  } 
  
  inserir(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.BASE_URL + 'clientes', JSON.stringify(cliente), this.httpOptions);
  }

  buscarPorId(id: number): Cliente | undefined{
    const clientes: Cliente[] = this.listarTodos();
    return clientes.find(cliente => cliente.id === id);
  }

  atualizar (cliente: Cliente): void{

    const clientes: Cliente[] = this.listarTodos();
    clientes.forEach((obj, index, objs) => {

      if( cliente.id === obj.id){
        objs[index] = cliente
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(clientes);
    
  }

  getSaldo(idCliente: number): Observable<SaldoResponse>{
    return this.httpClient.get<SaldoResponse>(
      this.BASE_URL + `/saldo/${idCliente}`, this.httpOptions);
  }

  getExtrato(idCliente: number): Observable<Array<Transacao>> {
    return this.httpClient.get<Array<Transacao>>(
      this.BASE_URL + `/extrato/${idCliente}`,
      this.httpOptions);
  }
  
  sacar(valor: number, idCliente: number): Observable<SaldoResponse> | null {
    return this.httpClient.put<SaldoResponse>(
      this.BASE_URL + `/sacar/${idCliente}`,
      {valor},
      this.httpOptions);
  }
}

export default interface SaldoResponse {
  saldo: number;
  limite: number;
}


