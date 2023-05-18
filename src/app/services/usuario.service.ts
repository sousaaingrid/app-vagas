import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }


  baseUrl: string = "https://localhost:7274/api/user";

  public postUsuarioApi(usuario: Usuario) : Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }

  public get usuarios() : string [] {
    return [
      'admin', 'scania', 'convidado'
    ];
  }
}