import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoutes } from './admin/admin-routing.module';
import { LoginRoutes } from './auth/auth-routing.module';
import { ClienteRoutes } from './cliente/cliente-routing.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  ...AdminRoutes,
  ...LoginRoutes,
  ...ClienteRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
