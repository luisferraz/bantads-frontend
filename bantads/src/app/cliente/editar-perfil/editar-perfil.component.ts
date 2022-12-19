import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/shared/models/cliente.model';
import { ClienteService } from '../services';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  @ViewChild('formCliente') formCliente!: NgForm;
  cliente!: Cliente;

  constructor(
    private ClienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.cliente = this.ClienteService.clienteLogado;
  }

  atualizar($event: any): void {
    $event.preventDefault();
    if (this.formCliente.form.valid) {
      this.ClienteService.atualizarCliente(this.cliente).subscribe(
        (cliente: Cliente) => {
          if (cliente != null) {
            alert('Cliente atualizado com sucesso');
          }
        }
      );
    }
  }
}
