import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, Conta, Gerente } from 'src/app/shared';


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
  
  constructor(private httpClient: HttpClient) { }

  recusar(cliente: Cliente): void {
    
  }
  
  /*   buscarConta(numeroConta: number): Observable<Conta> {
    return this.httpClient.get<Conta>(this.BASE_URL + numeroConta, this.httpOptions);
    }
  
    alterarConta(conta: Conta): Observable<Conta> {
      return this.httpClient.put<Conta>(this.BASE_URL + conta.numero, this.httpOptions);
    }
  
    sacar(numeroConta: number, valor: number): Conta {
      var conta: Conta;
      this.buscarConta(numeroConta).subscribe(
        (obj: Conta) => {
          obj.saldo! -= valor;
          this.alterarConta(obj);
          conta = obj;
        }
      );
      return conta;
    };
   */

  //Criar conta nao deve estar em gerente, pois ocorre no autocadastro
  //Deve estar em cliente
  criarConta(conta: Conta): Observable<Conta> {
    return this.httpClient.post<Conta>(`${this.BASE_URL}contas`, JSON.stringify(conta));

  }

  buscarClientePorId(idCliente: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.BASE_URL}clientes/${idCliente}`, this.httpOptions);
  }

  listarClientesPendentes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.BASE_URL + 'clientes', this.httpOptions);
  }

  buscaContasPorGerente(gerente: Gerente): Observable<Conta[]> {
    return this.httpClient.get<Conta[]>(this.BASE_URL + `contas?gerente.id=${gerente.id}`, this.httpOptions);
  }
}
