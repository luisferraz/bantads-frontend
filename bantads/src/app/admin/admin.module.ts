import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { RelatorioClientesComponent } from './relatorio-clientes/relatorio-clientes.component';
import { InserirGerenteComponent } from './inserir-gerente/inserir-gerente.component';
import { ListarGerentesComponent } from './listar-gerentes/listar-gerentes.component';
import { EditarGerenteComponent } from './editar-gerente/editar-gerente.component';
import { AdminService } from './services';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TelaInicialComponent,
    RelatorioClientesComponent,
    InserirGerenteComponent,
    ListarGerentesComponent,
    EditarGerenteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
