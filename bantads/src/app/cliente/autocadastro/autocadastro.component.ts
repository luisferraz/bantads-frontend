import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/shared';
import { Endereco } from 'src/app/shared/models/endereco.model';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class AutocadastroComponent implements OnInit {

  @ViewChild('formRegistro') formRegistro!: NgForm;

  cliente: Cliente = new Cliente;
  endereco: Endereco = new Endereco;

  constructor() { }

  ngOnInit(): void {
  }

  registrar(): void{

  }
  
}
