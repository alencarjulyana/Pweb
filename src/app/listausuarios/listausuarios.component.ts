import { Component } from '@angular/core';


interface Usuario {
  nome: string;
  email: string;
  senha: string;
  tipo: string;
}

@Component({
  selector: 'app-listausuarios',
  templateUrl: './listausuarios.component.html',
  styleUrls: ['./listausuarios.component.css']
})

export class ListausuariosComponent {
  usuarios: Usuario[] = [
    { nome: 'Usuário 1', email: 'usuario1@example.com', senha: '123456', tipo: 'Cliente' },
    { nome: 'Usuário 2', email: 'usuario2@example.com', senha: '654321', tipo: 'Profissional' },
    
  ];
}
