import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { ConsultarExtratoComponent } from './consultar-extrato/consultar-extrato.component';
import { ConsultarSaldoComponent } from './consultar-saldo/consultar-saldo.component';
import { DespositarComponent } from './despositar/despositar.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { SacarComponent } from './sacar/sacar.component';
import { TelaInicialClienteComponent } from './tela-inicial-cliente/tela-inicial-cliente.component';
import { TransferirComponent } from './transferir/transferir.component';


@NgModule({
  declarations: [
    AutocadastroComponent,
    TelaInicialClienteComponent,
    EditarPerfilComponent,
    DespositarComponent,
    SacarComponent,
    TransferirComponent,
    ConsultarSaldoComponent,
    ConsultarExtratoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class ClienteModule { }
