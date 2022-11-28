import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { DespositarComponent } from './despositar/despositar.component';
import { SacarComponent } from './sacar/sacar.component';
import { TransferirComponent } from './transferir/transferir.component';
import { ConsultarSaldoComponent } from './consultar-saldo/consultar-saldo.component';
import { ConsultarExtratoComponent } from './consultar-extrato/consultar-extrato.component';



@NgModule({
  declarations: [
    AutocadastroComponent,
    TelaInicialComponent,
    EditarPerfilComponent,
    DespositarComponent,
    SacarComponent,
    TransferirComponent,
    ConsultarSaldoComponent,
    ConsultarExtratoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClienteModule { }
