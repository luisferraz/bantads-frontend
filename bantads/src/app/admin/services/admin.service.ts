import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta, Gerente } from 'src/app/shared';

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




  // listarTodos(): Gerente[] {
  //   const gerentes = localStorage[LS_CHAVE];
  //   return gerentes ? JSON.parse(gerentes) : [];
  // }

  // inserir(gerente: Gerente): void {
  //   const gerentes = this.listarTodos();
  //   gerente.id = new Date().getTime();
  //   gerentes.push(gerente);

  //   localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  // }

  // buscarPorId(id: number): Gerente | undefined {
  //   const gerentes: Gerente[] = this.listarTodos();
  //   return gerentes.find(gerente => gerente.id === id);
  // }

  // atualizar(gerente: Gerente): void {
  //   const gerentes: Gerente[] = this.listarTodos();
  //   gerentes.forEach((obj, index, objs) => {
  //     if (gerente.id === obj.id) {
  //       objs[index] = gerente
  //     }
  //   });
  //   localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  // }

  // remover(id: number): void {
  //   let gerentes: Gerente[] = this.listarTodos();
  //   gerentes = gerentes.filter(gerente => gerente.id !== id);
  //   localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  // }

  // relatorioClientes(): Conta[] {
  //   return [];
  // }
}
