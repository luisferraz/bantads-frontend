import { Component, OnInit } from '@angular/core';
import { Cliente, Conta, Gerente } from 'src/app/shared';
import { GerenteService } from '../services';
import { LoginService } from 'src/app/auth/services/login.service';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  contas: Conta[] = [];

  constructor(private gerenteService: GerenteService, private loginService : LoginService) { }

  ngOnInit(): void {
    this.gerenteService.buscarGerentePorUsuario(this.loginService.usuarioLogado).subscribe(
      (gerentes: Gerente[]) => {
        if ((gerentes != null) && (gerentes.length) > 0) {
          let gerente = gerentes.filter(gerente => gerente.email === this.loginService.usuarioLogado.email);
          this.gerenteService.gerenteLogado = gerente[0];
          this.contas.forEach((conta) => console.log(conta.cliente?.usuario?.email))
        }
      }
    );
    this.contas = this.listarClientes();
  }
   
  listarClientes(): Conta[] {
    this.gerenteService.listarContas().subscribe(
      (data: Conta[]) => {
        if(data == null) {
          this.contas = []
        } else {
          this.contas = data.filter(conta => conta.gerente?.id === this.gerenteService.gerenteLogado.id);
          console.log(this.gerenteService.gerenteLogado.id)
          this.contas.forEach((conta) => console.log(conta.cliente?.email))

        }
      });
      return this.contas
  }
}
