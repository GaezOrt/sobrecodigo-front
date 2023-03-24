import { Component, OnInit } from '@angular/core';
import { ICardsActiveUsers } from 'src/app/interfaces/cards-active-users.interface';
import { RankingService } from 'src/app/services/ranking-service.service';

@Component({
  selector: 'app-cards-active-users',
  templateUrl: './cards-active-users.component.html',
  styleUrls: ['./cards-active-users.component.css'],
})
export class CardsActiveUsersComponent implements OnInit {
  constructor(private rankingService:RankingService ) {}

  users: any[];
  ngOnInit(): void {
    this.rankingService.mostActiveUsers().subscribe( val => {
      console.log(val);
      this.users = val;
    })
  }
}
