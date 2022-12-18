import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta } from 'src/app/shared';
import { Cliente } from 'src/app/shared/models/cliente.model';

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

  constructor(private httpClient: HttpClient) { }

  salvarConta(novaConta: Conta) {
    return this.httpClient.post(this.BASE_URL + 'contas', JSON.stringify(novaConta), this.httpOptions);
  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put(this.BASE_URL + `clientes//${cliente.id}`, JSON.stringify(cliente), this.httpOptions);
  }


  listarTodos(): Cliente[] {
    const clientes = localStorage[LS_CHAVE];
    return clientes ? JSON.parse(clientes) : [];
  }

  inserir(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.BASE_URL + 'clientes', JSON.stringify(cliente), this.httpOptions);
  }

  buscarPorId(id: number): Cliente | undefined {
    const clientes: Cliente[] = this.listarTodos();
    return clientes.find(cliente => cliente.id === id);
  }

  sacar(valor: number) {
    throw new Error('Method not implemented.');
  }
}


