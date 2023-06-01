import { MatMenuModule } from '@angular/material/menu';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
})

export class MenuComponent implements OnInit {
  Router = Router;


  constructor(router: Router) { }

  ngOnInit(): void {

  }


}
