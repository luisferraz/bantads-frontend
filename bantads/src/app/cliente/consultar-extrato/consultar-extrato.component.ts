import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transacao } from 'src/app/shared/models/transacao.model';
import { ClienteService } from '../services';
import SaldoResponse from '../services/cliente.service';

@Component({
  selector: 'app-consultar-extrato',
  templateUrl: './consultar-extrato.component.html',
  styleUrls: ['./consultar-extrato.component.css']
})
export class ConsultarExtratoComponent implements OnInit {

  extrato?: Array<Transacao>;
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

  getExtrato(): void{
    let id = +this.route.snapshot.params['id'];
    this.clienteService.getExtrato(id).subscribe((res) => {
      if (res) {
        console.log(res);
        this.extrato = res.reverse();      
      }
      else {
        throw new Error('Falha ao carregar o extrato do cliente = ' + id);
      }
    });
  }
}
