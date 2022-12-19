import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente, Conta } from 'src/app/shared';
import { ClienteService } from '../services';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent implements OnInit {

  @ViewChild('formDepositar') formDepositar!: NgForm;
  cliente!: Cliente;
  conta!: Conta;
  public valorDeposito!: number;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.clienteService.buscarContaPorCliente(this.clienteService.clienteLogado).subscribe(
      (contas: Conta[]) => {
        if ((contas != null) && (contas.length > 0)) {
          this.conta = contas[0];
        }
      }
    );
  }

  depositar(): void {
    if (this.formDepositar.form.valid) {
      if (this.clienteService.depositar(this.valorDeposito)) {
        alert('Depósito realizado com sucesso.');
      }
      else {
        alert('Erro ao realizar depósito.')
      }
    };
    this.router.navigate(['/cliente']);
  }
}

