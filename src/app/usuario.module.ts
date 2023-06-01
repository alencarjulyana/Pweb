import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsuarioService } from './usuario.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [UsuarioService]
})
export class UsuarioModule { }
