import { Routes } from '@angular/router';

import { AprovarClienteComponent } from './aprovar-cliente/aprovar-cliente.component';
import { ConsultarCincoMelhoresClientesComponent } from './consultar-cinco-melhores-clientes/consultar-cinco-melhores-clientes.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { ConsultarTodosClientesComponent } from './consultar-todos-clientes/consultar-todos-clientes.component';
import { RejeitarClienteComponent } from './rejeitar-cliente/rejeitar-cliente.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';

export const GerenteRoutes: Routes = [
  {
    path: 'gerente',
    redirectTo: 'gerente/inicio',
  },
  {
    path: 'gerente/inicio',
    component: TelaInicialComponent,
  },
  {
    path: 'gerente/consultar-cliente/:id',
    component: ConsultarClienteComponent,
  },
  {
    path: 'gerente/aprovar-cliente/:id',
    component: AprovarClienteComponent,
  },
  {
    path: 'gerente/rejeitar-cliente/:id',
    component: RejeitarClienteComponent,
  },
  {
    path: 'gerente/consultar-clientes',
    component: ConsultarTodosClientesComponent,
  },
  {
    path: 'gerente/consultar-5-melhores',
    component: ConsultarCincoMelhoresClientesComponent
  }


];
