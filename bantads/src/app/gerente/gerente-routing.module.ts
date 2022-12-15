import { RecursiveAstVisitor } from "@angular/compiler";
import { Routes } from "@angular/router";
import { AprovarClienteComponent } from "./aprovar-cliente/aprovar-cliente.component";
import { ConsultarCincoMlehoreClientessComponent } from "./consultar-cinco-melhores-clientes/consultar-cinco-mlehore-clientess.component";
import { ConsultarClienteComponent } from "./consultar-cliente/consultar-cliente.component";
import { ConsultarTodosClientesComponent } from "./consultar-todos-clientes/consultar-todos-clientes.component";
import { RejeitarClienteComponent } from "./rejeitar-cliente/rejeitar-cliente.component";
import { TelaInicialComponent } from "./tela-inicial/tela-inicial.component";

export const GerenteRoutes: Routes = [
    {
        path: 'gerente',
        redirectTo: 'gerente/inicio'
      },
      {
        path: 'gerente/inicio',
        component: TelaInicialComponent
      },
      {
        path: 'gerente/listar-clientes',
        component : ConsultarTodosClientesComponent
      },
      {
        path: 'gerente/listar-5-melhores-clientes',
        component: ConsultarCincoMlehoreClientessComponent
      },
      {
        path: 'gerente/aceitar-cliente',
        component : AprovarClienteComponent
      },
      {
        path: 'gerente/recusar-cliente',
        component: RejeitarClienteComponent
      },
      {
        path: 'gerente/consultar-cliente',
        component: ConsultarClienteComponent
      }

];