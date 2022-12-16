import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared';
import { GerenteService } from '../services';

@Component({
  selector: 'app-consultar-cinco-mlehore-clientess',
  templateUrl: './consultar-cinco-mlehore-clientess.component.html',
  styleUrls: ['./consultar-cinco-mlehore-clientess.component.css']
})
export class ConsultarCincoMlehoreClientessComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private gerenteService: GerenteService) { }

  ngOnInit(): void {
    this.clientes = this.listar5Melhores();
  }

  listar5Melhores(): Cliente[] {
    return [];
  }

}
