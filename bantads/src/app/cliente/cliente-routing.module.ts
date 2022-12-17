import { Routes } from "@angular/router";
import { AutocadastroComponent } from "./autocadastro/autocadastro.component";
import { ConsultarExtratoComponent } from "./consultar-extrato/consultar-extrato.component";
import { ConsultarSaldoComponent } from "./consultar-saldo/consultar-saldo.component";
import { DespositarComponent } from "./despositar/despositar.component";
import { EditarPerfilComponent } from "./editar-perfil/editar-perfil.component";
import { SacarComponent } from "./sacar/sacar.component";
import { TelaInicialClienteComponent } from "./tela-inicial-cliente/tela-inicial-cliente.component";
import { AuthGuard } from "../auth/auth.guard";

export const ClienteRoutes: Routes = [
  {
    path: 'cliente',
    canActivate: [AuthGuard],
    data: {
      role: 'CLIENTE'
    },
    children: [
      {
        path: 'cliente',
        redirectTo: 'inicial',
        pathMatch: 'full'
      },
      {
        path: 'consultar-extrato',
        component: ConsultarExtratoComponent
      },
      {
        path: 'consultar-saldo',
        component: ConsultarSaldoComponent
      },
      {
        path: 'depositar',
        component: DespositarComponent
      },
      {
        path: 'editar-perfil',
        component: EditarPerfilComponent
      },
      {
        path: 'sacar',
        component: SacarComponent
      },
      {
        path: 'inicial',
        component: TelaInicialClienteComponent
      }
    ],
  }
];