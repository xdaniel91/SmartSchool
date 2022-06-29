import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css'],
})
export class ProfessoresComponent implements OnInit {
  titulo = 'Professores';
  public professores = [
    { id: 1, nome: 'lucas', disciplina: 'portugues' },
    { id: 2, nome: 'marcos', disciplina: 'matematica' },
    { id: 3, nome: 'eduardo', disciplina: 'quimica' },
    { id: 4, nome: 'gabriel', disciplina: 'fisica' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
