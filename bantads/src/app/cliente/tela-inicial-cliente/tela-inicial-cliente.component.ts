import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SaldoResponse, { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-tela-inicial-cliente',
  templateUrl: './tela-inicial-cliente.component.html',
  styleUrls: ['./tela-inicial-cliente.component.css']
})
export class TelaInicialClienteComponent implements OnInit {

  saldo?: SaldoResponse;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    
  }

  getSaldo(): void {

    let id = +this.route.snapshot.params['id'];
    this.clienteService.getSaldo(id).subscribe((res) => {
      if (res) {
        console.log(res);
        this.saldo = res;
      }
      else {
        throw new Error('Falha ao carregar o saldo do cliente = ' + id);
      }
    });
  }
}
