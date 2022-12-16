import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { AprovarClienteComponent } from './aprovar-cliente/aprovar-cliente.component';
import { RejeitarClienteComponent } from './rejeitar-cliente/rejeitar-cliente.component';
import { ConsultarTodosClientesComponent } from './consultar-todos-clientes/consultar-todos-clientes.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { ConsultarCincoMelhoresClientesComponent } from './consultar-cinco-melhores-clientes/consultar-cinco-melhore-clientes.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared';
import { NgxMaskModule } from 'ngx-mask';



@NgModule({
  declarations: [
    TelaInicialComponent,
    AprovarClienteComponent,
    RejeitarClienteComponent,
    ConsultarTodosClientesComponent,
    ConsultarClienteComponent,
    ConsultarCincoMelhoresClientesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ]
})
export class GerenteModule { }
