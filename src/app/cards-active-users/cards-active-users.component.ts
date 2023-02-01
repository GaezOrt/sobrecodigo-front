import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-active-users',
  templateUrl: './cards-active-users.component.html',
  styleUrls: ['./cards-active-users.component.css'],
})
export class CardsActiveUsersComponent implements OnInit {
  constructor() {}

  users = [
    {
      nombre: '@Gaezort',
      desafiosCompletados: '345',
      cantidadContribuciones: '30'
    },
    {
      nombre: '@valen',
      desafiosCompletados: '35',
      cantidadContribuciones: '450'
    },
    {
      nombre: '@eagle',
      desafiosCompletados: '335',
      cantidadContribuciones: '20'
    },
  ];

  ngOnInit(): void {}
}
