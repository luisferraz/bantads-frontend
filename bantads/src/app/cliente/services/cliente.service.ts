import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/shared/models/cliente.model';

const LS_CHAVE: string = "clientes";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  BASE_URL = "http://localhost:3000/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor (private httpClient: HttpClient) { }

  listarTodos(): Cliente[] {
    const clientes = localStorage[LS_CHAVE];
    return clientes ? JSON.parse(clientes) :[];
  } 
  
  inserir(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.BASE_URL + 'clientes', JSON.stringify(cliente), this.httpOptions);
  }

  buscarPorId(id: number): Cliente | undefined{
    const clientes: Cliente[] = this.listarTodos();
    return clientes.find(cliente => cliente.id === id);
  }

  atualizar (cliente: Cliente): void{

    const clientes: Cliente[] = this.listarTodos();
    clientes.forEach((obj, index, objs) => {

      if( cliente.id === obj.id){
        objs[index] = cliente
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(clientes);
    
  }
  
  sacar(valor: number) {
    throw new Error('Method not implemented.');
  }
}


