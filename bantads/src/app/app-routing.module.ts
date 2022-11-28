import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserirGerenteComponent } from './admin/inserir-gerente/inserir-gerente.component';
import { ListarGerentesComponent } from './admin/listar-gerentes/listar-gerentes.component';
import { RelatorioClientesComponent } from './admin/relatorio-clientes/relatorio-clientes.component';
import { TelaInicialComponent } from './admin/tela-inicial/tela-inicial.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'admin/inicio',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    redirectTo: 'admin/inicio'
  },
  {
    path: 'admin/inicio',
    component: TelaInicialComponent
  },
  {
    path: 'admin/listar-gerente',
    component : ListarGerentesComponent
  },
  {
    path: 'admin/novo-gerente',
    component: InserirGerenteComponent
  },
  {
    path:'admin/relatorio-clientes',
    component: RelatorioClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
