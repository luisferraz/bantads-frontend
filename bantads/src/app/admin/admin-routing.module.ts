import { Routes } from '@angular/router';

import { EditarGerenteComponent } from './editar-gerente/editar-gerente.component';
import { InserirGerenteComponent } from './inserir-gerente/inserir-gerente.component';
import { ListarGerentesComponent } from './listar-gerentes/listar-gerentes.component';
import { RelatorioClientesComponent } from './relatorio-clientes/relatorio-clientes.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';


export const AdminRoutes: Routes = [
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
        path: 'admin/editar-gerente/:id',
        component: EditarGerenteComponent
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
