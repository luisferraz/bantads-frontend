import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarGerentesComponent } from './admin/listar-gerentes/listar-gerentes.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'admin/inicio',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    redirectTo: 'admin/listar-gerente'
  },
  {
    path: 'admin/listar-gerente',
    component : ListarGerentesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
