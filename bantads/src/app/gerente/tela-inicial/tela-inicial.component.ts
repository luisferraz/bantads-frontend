import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared';
import { GerenteService } from '../services';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private gerenteService: GerenteService) { }

  ngOnInit(): void {
    this.clientes = this.listarClientesPendentes();
  }

  listarClientesPendentes(): Cliente[] {
    this.gerenteService.listarClientesPendentes().subscribe(
      (data: Cliente[]) => {
        if(data == null) {
          this.clientes = []
        } else {
          this.clientes = data;
        }
      });
      return this.clientes
  }

}
