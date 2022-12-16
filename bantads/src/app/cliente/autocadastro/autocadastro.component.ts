import { Component, OnInit, ViewChild, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/shared';
import { ClienteService } from '../services';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/shared';
import { Endereco } from 'src/app/shared/models/endereco.model';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class AutocadastroComponent implements OnInit {
  @ViewChild('formCliente') formCliente!: NgForm;
  cliente!: Cliente;

  constructor(private clienteService: ClienteService,
    private router: Router) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
  }

  inserir(): void {
    if (this.formCliente.form.valid) {
      this.clienteService.inserir(this.cliente);
      this.router.navigate(['/cliente']);
    }
  }

}
