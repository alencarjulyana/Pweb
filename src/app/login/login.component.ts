import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email?: string;
  senha?: string;

  constructor(private router: Router) { }

  fazerLogin() {

    if (this.email === 'user@example.com' && this.senha === '123456') {

      this.router.navigate(['/dashboard']);
    } else {
      
      alert('Email ou senha inválidos');
    }
  }

  cadastrar() {
    this.router.navigate(['/cadastro']);
  }

}
