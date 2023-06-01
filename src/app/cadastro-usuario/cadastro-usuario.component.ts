import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

interface Usuario {
  nome: string;
  email: string;
  senha: string;
  tipo: string;
}

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css'],
  standalone: true,
  imports: [MatCardModule],
})
export class CadastroUsuarioComponent {
  usuarioForm: FormGroup;
  usuarios: Usuario[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.usuarioForm = this.formBuilder.group({
      nome: '',
      email: '',
      senha: '',
      tipo: '',
    });
  }

  registrarUsuario() {
    const novoUsuario: Usuario = this.usuarioForm.value;
    this.usuarios.push(novoUsuario);
    alert('Usuário cadastrado com sucesso!');
  }

  exibirListaUsuarios() {
    this.router.navigate(['/listausuarios']);
  }
}
