import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Conta } from 'src/app/shared';
import { ClienteService } from '../services';

@Component({
  selector: 'app-sacar',
  templateUrl: './sacar.component.html',
  styleUrls: ['./sacar.component.css']
})
export class SacarComponent implements OnInit {

  @ViewChild('formSacar') formSacar! : NgForm;
  conta! : Conta; 

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.conta = new Conta();
  }

  sacar() : void{
    if(this.formSacar.form.valid){
      this.clienteService.sacar(this.formSacar.form.value);
      this.router.navigate(['/admin/listar-gerente']);
    }
  }

}
