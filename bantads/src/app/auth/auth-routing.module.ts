import { Routes } from '@angular/router';
import { AutocadastroComponent } from '../cliente/autocadastro/autocadastro.component';
import { LoginComponent } from './login/login.component';
export const LoginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'autocadastro',
    component: AutocadastroComponent,
  },
];
