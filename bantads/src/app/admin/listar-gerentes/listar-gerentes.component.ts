import { Component, OnInit } from '@angular/core';
import { Gerente } from 'src/app/shared/models/gerente.model';
import { AdminService } from '../services';

@Component({
  selector: 'app-listar-gerentes',
  templateUrl: './listar-gerentes.component.html',
  styleUrls: ['./listar-gerentes.component.css']
})
export class ListarGerentesComponent implements OnInit {

  gerentes: Gerente[] = [];

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.gerentes = this.listarTodos();
  }

  listarTodos(): Gerente[] {
    return this.adminService.listarTodos();
  }

  remover($event: any, gerente: Gerente) : void {
    $event.preventDefault();
    if(confirm(`Deseja realmente remover ${gerente.nome} ?`)) {
      this.adminService.remover(gerente.id!);
      this.gerentes = this.listarTodos();
    }
  }

}
