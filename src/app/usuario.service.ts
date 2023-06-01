import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {
  constructor(private http: HttpClient) { }

  criarUsuario(nome: string, email: string, senha: string): Promise<any> {
    const usuario = { nome, email, senha };
    return this.http.post('/api/usuarios', usuario).toPromise();
  }
}
