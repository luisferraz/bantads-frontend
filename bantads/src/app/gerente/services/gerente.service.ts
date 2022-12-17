import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, Conta, Gerente } from 'src/app/shared';


@Injectable({
  providedIn: 'root'
})

export class GerenteService {

  BASE_URL = "http://localhost:3000/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  recusar(cliente: Cliente) : void {
  
  }

  criarConta(conta: Conta) : Observable<Conta>{
    return this.httpClient.post<Conta>(`${this.BASE_URL}contas`, JSON.stringify(conta));
  
  }

  buscarClientePorId(idCliente: number) : Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.BASE_URL}clientes/${idCliente}`, this.httpOptions);
  }

  listarClientesPendentes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.BASE_URL + 'clientes', this.httpOptions);
  }
}
