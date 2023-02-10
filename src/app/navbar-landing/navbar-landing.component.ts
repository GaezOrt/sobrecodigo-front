import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-landing',
  templateUrl: './navbar-landing.component.html',
  styleUrls: ['./navbar-landing.component.css']
})
export class NavbarLandingComponent implements OnInit {

  route : string;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.route = this.router.url;
  }

  // show : boolean = true;

  // switch() :void {
  //   this.show = !this.show;
  // }

}
