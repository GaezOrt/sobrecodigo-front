import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RankingService } from '../../services/ranking-service.service';
@Component({
  selector: 'app-ranking-users',
  templateUrl: './ranking-users.component.html',
  styleUrls: ['./ranking-users.component.css']
})
export class RankingUsersComponent implements OnInit {
  rankings:any[];
  constructor(private rankingService:RankingService, private router:Router) { }

  ngOnInit(): void {
    this.rankingService.obtenerUsers().subscribe(data => {
      console.log(data);
      this.rankings = data;
    });
  }

}
