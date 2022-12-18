import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map, of, take } from 'rxjs';
import { Usuario, Login } from 'src/app/shared';

const LS_CHAVE: string = 'usuarioLogado';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  BASE_URL = "http://localhost:3000/usuarios/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public get usuarioLogado(): Usuario {
    let usu = localStorage[LS_CHAVE];
    return usu ? JSON.parse(localStorage[LS_CHAVE]) : null;
  }
  public set usuarioLogado(usuario: Usuario) {
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }

  login(login: Login): Observable<Usuario[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams().append('email', login.email!).append('senha', login.senha!)
    };

    return this.httpClient.get<Usuario[]>(this.BASE_URL, httpOptions);

  }
}
