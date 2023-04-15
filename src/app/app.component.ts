import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sobrecodigo-front';
  showPopUp:boolean = false;
  constructor(private router: Router) {

   }

  acceptCookies(){
    document.cookie = "key=value"
    this.declineCookies()
  }
  declineCookies(){
    this.showPopUp = false;    
  }
   ngOnInit() {
    this.router.navigateByUrl('/home');
    if (document.cookie.length <= 0){
      this.showPopUp = true;
    }
  }
}
