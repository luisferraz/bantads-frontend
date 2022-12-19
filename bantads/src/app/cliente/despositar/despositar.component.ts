import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Conta } from 'src/app/shared';
import { ClienteService } from '../services';

@Component({
  selector: 'app-despositar',
  templateUrl: './despositar.component.html',
  styleUrls: ['./despositar.component.css']
})
export class DespositarComponent implements OnInit {

  @ViewChild('formDepositar') formSacar! : NgForm;
  conta! : Conta; 

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.conta = new Conta();
  }

  depositar() : void{
    let id = +this.route.snapshot.params['id'];
    if(this.formSacar.form.valid){
      this.clienteService.sacar(this.formSacar.form.value, id);
      this.router.navigate(['/cliente']);
    }
  }
}
