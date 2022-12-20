import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta, Gerente, Usuario } from 'src/app/shared';

const LS_CHAVE: string = "gerentes";

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  BASE_URL = "http://localhost:3000/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  inserirGerente(ger: Gerente): Observable<Gerente> {
    return this.httpClient.post<Gerente>(this.BASE_URL + 'gerentes', JSON.stringify(ger), this.httpOptions);
  }

  listarTodosGerentes(): Observable<Gerente[]> {
    return this.httpClient.get<Gerente[]>(this.BASE_URL + 'gerentes', this.httpOptions);
  }

  buscarGerentePorId(idGerente: number): Observable<Gerente> {
    return this.httpClient.get<Gerente>(this.BASE_URL + `gerentes/${idGerente}`, this.httpOptions);
  }

  alterarGerente(ger: Gerente): Observable<Gerente> {
    return this.httpClient.put<Gerente>(this.BASE_URL + `gerentes/${ger.id}`, JSON.stringify(ger), this.httpOptions);
  }

  removerGerente(idGerente: number): Observable<any> {
    return this.httpClient.delete<any>(this.BASE_URL + `gerentes/${idGerente}`, this.httpOptions);
  }

  listarTodasContas(): Observable<Conta[]> {
    return this.httpClient.get<Conta[]>(this.BASE_URL + 'contas', this.httpOptions);
  }

  inserirUsuario(novoUsuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.BASE_URL + 'usuarios', JSON.stringify(novoUsuario), this.httpOptions);
  }

  alterarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(this.BASE_URL + `usuarios/${usuario.id}`, JSON.stringify(usuario), this.httpOptions);
  }
}
