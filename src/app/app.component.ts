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
  constructor(private router: Router) {

   }

   ngOnInit() {
    this.router.navigateByUrl('/home');
  }
}
