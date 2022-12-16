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
  }

  listarTodos(): Cliente[] {
    return this.gerenteService.listarTodos();
  }

}
