import { Routes } from "@angular/router";
import { AutocadastroComponent } from "./autocadastro/autocadastro.component";
import { ConsultarExtratoComponent } from "./consultar-extrato/consultar-extrato.component";
import { ConsultarSaldoComponent } from "./consultar-saldo/consultar-saldo.component";
import { DespositarComponent } from "./despositar/despositar.component";
import { EditarPerfilComponent } from "./editar-perfil/editar-perfil.component";
import { SacarComponent } from "./sacar/sacar.component";
import { TelaInicialClienteComponent } from "./tela-inicial-cliente/tela-inicial-cliente.component";

export const ClienteRoutes: Routes = [

  {
    path: 'cliente/autocadastro',
    component: AutocadastroComponent
  },
  {
    path: 'cliente/consultar-extrato',
    component: ConsultarExtratoComponent
  },
  {
    path: 'cliente/consultar-saldo',
    component: ConsultarSaldoComponent
  },
  {
    path: 'cliente/depositar',
    component: DespositarComponent
  },
  {
    path: 'cliente/editar-perfil',
    component: EditarPerfilComponent
  },
  {
    path: 'cliente/sacar',
    component: SacarComponent
  },
  {
    path: 'cliente/inicial',
    component: TelaInicialClienteComponent
  },
  {
    path: 'cliente',
    redirectTo: 'cliente/inicial'
  }];