import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { TelaInicialClienteComponent } from './tela-inicial-cliente/tela-inicial-cliente.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { DespositarComponent } from './despositar/despositar.component';
import { SacarComponent } from './sacar/sacar.component';
import { TransferirComponent } from './transferir/transferir.component';
import { ConsultarSaldoComponent } from './consultar-saldo/consultar-saldo.component';
import { ConsultarExtratoComponent } from './consultar-extrato/consultar-extrato.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



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
