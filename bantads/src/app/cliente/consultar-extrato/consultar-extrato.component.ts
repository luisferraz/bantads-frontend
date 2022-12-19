import { Component, OnInit } from '@angular/core';
import { Conta, Transacao, TiposOperacao, Fluxo } from 'src/app/shared';
import { ClienteService } from '../services';

@Component({
  selector: 'app-consultar-extrato',
  templateUrl: './consultar-extrato.component.html',
  styleUrls: ['./consultar-extrato.component.css']
})
export class ConsultarExtratoComponent implements OnInit {
  conta!: Conta;
  extrato: Transacao[] = [];

  public TiposOperacao = TiposOperacao;
  public Fluxo = Fluxo;

  constructor(
    private clienteService: ClienteService
  ) { 
    this.conta = new Conta();
  }

  ngOnInit(): void {
    this.clienteService.buscarContaPorCliente(this.clienteService.clienteLogado).subscribe(
      (contas: Conta[]) => {
        if (contas != null) {
          this.conta = contas[0];

          this.clienteService.buscarTransacoesPorConta(this.conta).subscribe(
            (transacoes: Transacao[]) => {
              if (transacoes != null) {
                this.extrato = transacoes;
              }
            }
          )
        }
      }
    );
  }

}
