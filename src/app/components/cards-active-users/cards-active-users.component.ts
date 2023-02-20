import { Component, OnInit } from '@angular/core';
import { ICardsActiveUsers } from 'src/app/interfaces/cards-active-users.interface';

@Component({
  selector: 'app-cards-active-users',
  templateUrl: './cards-active-users.component.html',
  styleUrls: ['./cards-active-users.component.css'],
})
export class CardsActiveUsersComponent implements OnInit {
  constructor() {}

  users: ICardsActiveUsers[] = [
    {
      name: '@Gaezort',
      challengesCompleted: '345',
      amountContributions: '30'
    },
    {
      name: '@valen',
      challengesCompleted: '35',
      amountContributions: '450'
    },
    {
      name: '@eagle',
      challengesCompleted: '335',
      amountContributions: '20'
    },
  ];

  ngOnInit(): void {}
}
