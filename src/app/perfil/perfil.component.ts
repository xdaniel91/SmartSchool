import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  titulo = 'PERFIL';

  perfilItems = ['MINHA CONTA'];
  constructor() {}

  ngOnInit(): void {}
}
