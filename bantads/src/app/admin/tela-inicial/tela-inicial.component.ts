import { Component, OnInit } from '@angular/core';
import { Gerente } from 'src/app/shared';
import { AdminService } from '../services';
import { ClienteService } from 'src/app/cliente/services';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {
  gerentesComTotais: any[] = [];

  constructor(
    private adminService: AdminService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    //Lista os gerentes
    var gerentes: Gerente[] = [];
    this.adminService.listarTodosGerentes().subscribe(
      (data: Gerente[]) => {
        if (data == null) {
          gerentes = []
        } else {
          gerentes = data;
        }
      });

      this.gerentesComTotais = gerentes.map((gerente, idx, arr) => {
      //Adicionar aqui busca doas contas
      // Totalizacao dos saldos
      // Devolver array gerentes com a seguinte estrutura
      // [
      //  {
      //   gerente: Gerente,
      //   totalClientes: number,
      //   totalSaldoPositivo: number,
      //   totalSaldoNegativo: number
      //  }
      //]
    });

  }

}
