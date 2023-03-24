import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() username: string;
  @Input() challengesCompleted: string;
  @Input() amountContributions: string;
  @Input() image:string;
  @Input() projectsDone:string;
  @Input() position:string;

  constructor() { }

  ngOnInit(): void {
    this.projectsDone = "25";
    this.position = "Trainee"
  }

}
