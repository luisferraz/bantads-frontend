import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AdminModule } from './admin';
import { AdminService } from './admin/services';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ClienteModule } from './cliente';
import { ClienteService } from './cliente/services';
import { GerenteModule } from './gerente';
import { GerenteService } from './gerente/services';
import { SharedModule } from './shared';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    ClienteModule,
    GerenteModule,
    SharedModule,
    AuthModule,
    HttpClientModule
  ],
  providers: [
    AdminService,
    ClienteService,
    GerenteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
