import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css'],
})
export class ProfessoresComponent implements OnInit {
  titulo = 'Professores';
  public professores = [
    { nome: 'lucas' },
    { nome: 'marcos' },
    { nome: 'eduardo' },
    { nome: 'gabriel' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
