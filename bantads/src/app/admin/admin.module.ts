import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { RelatorioClientesComponent } from './relatorio-clientes/relatorio-clientes.component';
import { InserirGerenteComponent } from './inserir-gerente/inserir-gerente.component';
import { RemoverGerenteComponent } from './remover-gerente/remover-gerente.component';
import { ListarGerentesComponent } from './listar-gerentes/listar-gerentes.component';
import { EditarGerenteComponent } from './editar-gerente/editar-gerente.component';
import { AdminService } from './services';



@NgModule({
  declarations: [
    TelaInicialComponent,
    RelatorioClientesComponent,
    InserirGerenteComponent,
    RemoverGerenteComponent,
    ListarGerentesComponent,
    EditarGerenteComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
