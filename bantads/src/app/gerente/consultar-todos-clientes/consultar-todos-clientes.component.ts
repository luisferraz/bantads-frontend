import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { Cliente, Conta, Gerente } from 'src/app/shared';
import { GerenteService } from '../services';

@Component({
  selector: 'app-consultar-todos-clientes',
  templateUrl: './consultar-todos-clientes.component.html',
  styleUrls: ['./consultar-todos-clientes.component.css']
})
export class ConsultarTodosClientesComponent implements OnInit {

  contas: Conta[] = [];

  constructor(private gerenteService: GerenteService, private loginService : LoginService) { }

  ngOnInit(): void {
    this.gerenteService.buscarGerentePorUsuario(this.loginService.usuarioLogado).subscribe(
      (gerentes: Gerente[]) => {
        if ((gerentes != null) && (gerentes.length) > 0) {
          let gerente = gerentes.filter(gerente => gerente.email === this.loginService.usuarioLogado.email);
          this.gerenteService.gerenteLogado = gerente[0];
        }
      }
    );
    this.contas = this.listarTodosClientes();
  }
   
  listarTodosClientes(): Conta[] {
    this.gerenteService.listarContas().subscribe(
      (data: Conta[]) => {
        if(data == null) {
          this.contas = []
        } else {
          this.contas = data.filter(conta => conta.gerente?.id === this.gerenteService.gerenteLogado.id);
        }
      });
      return this.contas
  }

}
