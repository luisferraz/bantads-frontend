import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared';

@Component({
  selector: 'app-consultar-todos-clientes',
  templateUrl: './consultar-todos-clientes.component.html',
  styleUrls: ['./consultar-todos-clientes.component.css']
})
export class ConsultarTodosClientesComponent implements OnInit {

  clientes : Cliente[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
