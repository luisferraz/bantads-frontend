import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta, Usuario } from 'src/app/shared';
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
    return this.httpClient.post<Conta>(this.BASE_URL + 'contas', JSON.stringify(novaConta), this.httpOptions);
  }

  atualizarCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(this.BASE_URL + `clientes//${cliente.id}`, JSON.stringify(cliente), this.httpOptions);
  }

  buscarContaPorCliente(cliente: Cliente): Observable<Conta[]> {
    return this.httpClient.get<Conta[]>(this.BASE_URL + `contas?cliente.id=${cliente.id}`, this.httpOptions);
  }

  buscarClientePorUsuario(usuario: Usuario): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.BASE_URL + `clientes?usuario.id=${usuario.id}`, this.httpOptions);
  }

  inserirCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.BASE_URL + 'clientes', JSON.stringify(cliente), this.httpOptions);
  }

  listarTodos(): Cliente[] {
    const clientes = localStorage[LS_CHAVE];
    return clientes ? JSON.parse(clientes) : [];
  }


  buscarPorId(id: number): Cliente | undefined {
    const clientes: Cliente[] = this.listarTodos();
    return clientes.find(cliente => cliente.id === id);
  }

  sacar(valor: number) {
    throw new Error('Method not implemented.');
  }
}


