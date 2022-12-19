import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LoginService } from 'src/app/auth/services/login.service';
import { Conta, Fluxo, TiposOperacao, Transacao, Usuario } from 'src/app/shared';
import { Cliente } from 'src/app/shared/models/cliente.model';

const LS_CHAVE: string = "clientes";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  BASE_URL = "http://localhost:3000/";

  constructor(
    private httpClient: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public get clienteLogado(): Cliente {
    let clienteLogado = localStorage[LS_CHAVE];
    return clienteLogado ? JSON.parse(clienteLogado) : null;
  }

  public set clienteLogado(cliente: Cliente) {
    localStorage[LS_CHAVE] = JSON.stringify(cliente)
  }

  public get contaCliente(): Conta {
    let contaCliente = localStorage[LS_CHAVE];
    return contaCliente ? JSON.parse(contaCliente) : null;
  }

  public set contaCliente(conta: Conta) {
    localStorage[LS_CHAVE] = JSON.stringify(conta);
  }



  salvarConta(novaConta: Conta) {
    return this.httpClient.post<Conta>(this.BASE_URL + 'contas', JSON.stringify(novaConta), this.httpOptions);
  }

  atualizarCliente(cliente: Cliente): Observable<Cliente> {
    this.clienteLogado = cliente;
    return this.httpClient.put<Cliente>(this.BASE_URL + `clientes//${cliente.id}`, JSON.stringify(cliente), this.httpOptions);
  }

  atualizarConta(conta: Conta): Observable<Conta> {
    //Isso aqui num funciona ):
    // return this.httpClient.put<Conta>(this.BASE_URL + `contas?conta.numero=${conta.numero}`, JSON.stringify(conta), this.httpOptions);

    return this.httpClient.put<Conta>(this.BASE_URL + `contas/${conta.id}`, JSON.stringify(conta), this.httpOptions);
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

  depositar(valor: number): Observable<boolean> {
    var status = false;
    if (this.clienteLogado) {
      this.buscarContaPorCliente(this.clienteLogado).subscribe(
        (contas: Conta[]) => {
          if ((contas != null) && (contas.length > 0)) {
            let conta = contas[0];

            conta.saldo! += +valor;

            this.atualizarConta(conta).subscribe({
              next: (conta) => status = true,
              complete: () => {
                this.registrarTransacao(TiposOperacao.Deposito, valor, conta, Fluxo.Entrada);
              }
            }
            );
          }
        }
      );
    }
    return of(status);
  }

  sacar(valor: number): Observable<boolean> {
    var status = false;
    if (this.clienteLogado) {
      this.buscarContaPorCliente(this.clienteLogado).subscribe(
        (contas: Conta[]) => {
          if ((contas != null) && (contas.length > 0)) {
            let conta = contas[0];

            if ((conta.saldo! + conta.limite! - valor) > 0) {
              conta.saldo! -= valor;

              this.atualizarConta(conta).subscribe({
                next: (conta) => status = true,
                complete: () => {
                  this.registrarTransacao(TiposOperacao.Saque, valor, conta, Fluxo.Saida);
                }
              }
              );

            }
          }
        }
      );
    }
    return of(status);
  }

  registrarTransacao(tipo: TiposOperacao, valor: number, contaOrigem: Conta, fluxo: Fluxo, contaDestino?: Conta): Observable<Transacao> {
    let transacao = new Transacao(new Date(), tipo, valor, contaOrigem, fluxo, contaDestino);
    return this.httpClient.post<Transacao>(this.BASE_URL + 'transacoes', JSON.stringify(transacao), this.httpOptions);
  }

  buscarTransacoesPorConta(conta: Conta): Observable<Transacao[]> {
    return this.httpClient.get<Transacao[]>(this.BASE_URL + `transacoes?contaOrigem.id=${conta.id}`, this.httpOptions);
  }
}


