import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutes } from './admin/admin-routing.module';
import { LoginRoutes } from './auth/auth-routing.module';
import { ClienteRoutes } from './cliente/cliente-routing.module';
import { GerenteRoutes } from './gerente/gerente-routing.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  ...AdminRoutes,
  ...LoginRoutes,
  ...ClienteRoutes,
  ...GerenteRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
