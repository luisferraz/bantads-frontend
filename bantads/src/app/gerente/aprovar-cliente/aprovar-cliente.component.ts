import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin/services';
import { ClienteService } from 'src/app/cliente/services';
import { Cliente, Conta, Usuario } from 'src/app/shared';
import { GerenteService } from '../services';

@Component({
  selector: 'app-aprovar-cliente',
  templateUrl: './aprovar-cliente.component.html',
  styleUrls: ['./aprovar-cliente.component.css'],
})
export class AprovarClienteComponent implements OnInit {
  cliente!: Cliente;
  usuarioCliente!: Usuario;

  constructor(
    private gerenteService: GerenteService,
    private adminService: AdminService,
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioCliente = new Usuario();

    let id = +this.route.snapshot.params['id'];
    const res = this.gerenteService
      .buscarClientePorId(id)
      .subscribe((cl: Cliente) => {
        if (cl != null) {
          this.cliente = cl;
        } else {
          throw new Error('Cliente não encontrado: id = ' + id);
        }
      });
  }

  aceitarCliente() {
    let id = +this.route.snapshot.params['id'];
    this.gerenteService.buscarClientePorId(id)
      .subscribe((cli: Cliente) => {
        //Cria um usuario pra ele (so vai ter depois de aprovar mas preciso testar)
        let senha = Math.random().toString(36).slice(-8);
        const novoUsuario: Usuario = new Usuario(
          cli.nome,
          cli.email,
          senha,
          'CLIENTE',
        );
        this.adminService
          .inserirUsuario(novoUsuario)
          .subscribe((usu: Usuario) => {
            cli.usuario = usu;
            this.clienteService.atualizarCliente(cli).subscribe();
          });
      });
      this.router.navigate(['/gerente']);
  }
}
