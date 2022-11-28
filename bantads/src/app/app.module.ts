import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin';
import { AdminService } from './admin/services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteModule } from './cliente';
import { ClienteService } from './cliente/services';
import { GerenteModule } from './gerente';
import { GerenteService } from './gerente/services';
import { SharedModule } from './shared';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ClienteModule,
    GerenteModule,
    SharedModule
  ],
  providers: [
    AdminService,
    ClienteService,
    GerenteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
