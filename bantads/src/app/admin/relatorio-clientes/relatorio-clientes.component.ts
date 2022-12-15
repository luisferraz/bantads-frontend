import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/shared';
import { AdminService } from '../services';

@Component({
  selector: 'app-relatorio-clientes',
  templateUrl: './relatorio-clientes.component.html',
  styleUrls: ['./relatorio-clientes.component.css']
})
export class RelatorioClientesComponent implements OnInit {

  contas: Conta[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.contas = this.relatorioClientes();
  }

  relatorioClientes(): Conta[] {
    return this.adminService.relatorioClientes();
  }

}
