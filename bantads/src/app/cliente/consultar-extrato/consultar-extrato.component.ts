import { Component, OnInit } from '@angular/core';
import { Transacao } from 'src/app/shared/models/transacao.model';

@Component({
  selector: 'app-consultar-extrato',
  templateUrl: './consultar-extrato.component.html',
  styleUrls: ['./consultar-extrato.component.css']
})
export class ConsultarExtratoComponent implements OnInit {

  extrato?: Array<Transacao>;
  saldo?: number = 0; // temporario

  constructor() { }

  ngOnInit(): void {
  }

}
