import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { Cliente, Conta, Gerente, Usuario } from 'src/app/shared';
import { __values } from 'tslib';

const LS_CHAVE: string = "gerentes";

@Injectable({
  providedIn: 'root'
})

export class GerenteService {
  
  private BASE_URL = "http://localhost:3000/";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public get gerenteLogado(): Gerente {
    let gerenteLogado = localStorage[LS_CHAVE];
    return gerenteLogado ? JSON.parse(gerenteLogado) : null;
  }

  public set gerenteLogado(gerente: Gerente) {
    localStorage[LS_CHAVE] = JSON.stringify(gerente)
  }
  
  constructor(private httpClient: HttpClient) { }

  recusar(cliente: Cliente): void {
    
  }
  
  buscarClientePorId(idCliente: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.BASE_URL}clientes/${idCliente}`, this.httpOptions);
  }

  listarContas(): Observable<Conta[]> {
    return this.httpClient.get<Conta[]>(this.BASE_URL + 'contas', this.httpOptions);
  }   

  buscaContasPorGerente(gerente: Gerente): Observable<Conta[]> {
    return this.httpClient.get<Conta[]>(this.BASE_URL + `contas?gerente.id=${gerente.id}`, this.httpOptions);
  }

  buscarGerentePorUsuario(usuario: Usuario): Observable<Gerente[]> {
    return this.httpClient.get<Gerente[]>(this.BASE_URL + `gerentes?usuario.id=${usuario.id}`, this.httpOptions);
  }

  inserirUsuárioCliente(user: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.BASE_URL + 'usuarios', JSON.stringify(user), this.httpOptions);
  }
  
}
