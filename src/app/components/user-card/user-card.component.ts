import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() id:string;
  @Input() username: string;
  @Input() challengesCompleted: string;
  @Input() amountContributions: string;
  @Input() image:string;
  @Input() projectsDone:string;
  @Input() position:string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.projectsDone = "25";
    this.position = "Trainee"
  }


  navigateToProfile(){
    console.log(this.id);
    this.router.navigate(['profile-page/'+this.id]);
  }

}
