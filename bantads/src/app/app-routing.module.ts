import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutes } from './admin/admin-routing.module';
import { LoginRoutes } from './auth/auth-routing.module';


const routes: Routes = [
  {
    path : '',
    redirectTo: 'login',
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
  },
  {
    path:'cliente/autocadastro',
    component: AutocadastroComponent
  },
  {
    path:'cliente/consultar-extrato',
    component: ConsultarExtratoComponent
  },
  {
    path:'cliente/consultar-saldo',
    component: ConsultarSaldoComponent
  },
  {
    path:'cliente/depositar',
    component: DespositarComponent
  },
  {
    path:'cliente/editar-perfil',
    component: EditarPerfilComponent
  },
  {
    path:'cliente/sacar',
    component: SacarComponent
  },
  {
    path:'cliente/inicial',
    component: TelaInicialClienteComponent
  },
  {
    path:'cliente,',
    redirectTo: 'cliente/inicial'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
