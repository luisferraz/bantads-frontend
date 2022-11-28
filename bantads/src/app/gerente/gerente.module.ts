import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { AprovarClienteComponent } from './aprovar-cliente/aprovar-cliente.component';
import { RejeitarClienteComponent } from './rejeitar-cliente/rejeitar-cliente.component';
import { ConsultarTodosClientesComponent } from './consultar-todos-clientes/consultar-todos-clientes.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { ConsultarCincoMlehoreClientessComponent } from './consultar-cinco-mlehore-clientess/consultar-cinco-mlehore-clientess.component';



@NgModule({
  declarations: [
    TelaInicialComponent,
    AprovarClienteComponent,
    RejeitarClienteComponent,
    ConsultarTodosClientesComponent,
    ConsultarClienteComponent,
    ConsultarCincoMlehoreClientessComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GerenteModule { }