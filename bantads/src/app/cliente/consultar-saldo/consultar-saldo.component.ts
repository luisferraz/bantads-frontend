import { Component, OnInit } from '@angular/core';
import { Cliente, Conta, Usuario } from 'src/app/shared';
import { ClienteService } from '../services';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-consultar-saldo',
  templateUrl: './consultar-saldo.component.html',
  styleUrls: ['./consultar-saldo.component.css']
})
export class ConsultarSaldoComponent implements OnInit {
  conta!: Conta;
  cliente!: Cliente;

  constructor(
    private loginService: LoginService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.clienteService.buscarClientePorUsuario(this.loginService.usuarioLogado).subscribe({
      next:
        (clientes: Cliente[]) => {
          if ((clientes != null) && (clientes.length > 0)) {
            this.cliente = clientes[0];
          }
        },
      complete: () => {
        this.clienteService.buscarContaPorCliente(this.cliente).subscribe(
          (contas: Conta[]) => {
            if ((contas != null) && (contas.length > 0)) {
              this.conta = contas[0];
            }
          }
        )
      }
    }
    );
  }

}
