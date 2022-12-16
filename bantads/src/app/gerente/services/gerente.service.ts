import { Injectable } from '@angular/core';
import { Cliente } from '../../shared';

@Injectable({
  providedIn: 'root'
})
export class GerenteService {

  constructor() { }

  recusar(cliente: Cliente) : void {
  
  }

  aceitar(cliente: Cliente) : void {
  
  }

  listarTodos(): Cliente[] {
    return [];
  }


}
