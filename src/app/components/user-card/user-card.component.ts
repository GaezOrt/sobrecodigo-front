import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() i:number;
  @Input() user:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }


  navigateToProfile(){
    console.log(this.user.id);
    this.router.navigate(['profile-page/'+Number(this.user.id)]);
  }

}
