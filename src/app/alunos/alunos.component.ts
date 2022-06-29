import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {
  public titulo = 'Alunos';

  public alunos = [
    { id: 1, nome: 'gaby', sobrenome: 'silva', telefone: '64993' },
    { id: 2, nome: 'louyze', sobrenome: 'vitoria', telefone: '64992' },
    { id: 3, nome: 'marselo', sobrenome: 'rodrigo', telefone: '64991' },
    { id: 4, nome: 'stefany', sobrenome: 'almeida', telefone: '64990' },
    { id: 5, nome: 'daniel', sobrenome: 'rodrigues', telefone: '64999' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
