import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditProfileService } from 'src/app/services/edit-profile-service.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navbar-landing',
  templateUrl: './navbar-landing.component.html',
  styleUrls: ['./navbar-landing.component.css']
})
export class NavbarLandingComponent implements OnInit {

  route : string;
  isLoggedIn:boolean;
  email:string;
  constructor(private router : Router, private profileInfo:EditProfileService, private tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {
    this.route = this.router.url;
    this.profileInfo.getInfoUser().subscribe(val=>{
      this.email=val.email;
    console.log(this.email)
  });
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    
  }

  // show : boolean = true;

  // switch() :void {
  //   this.show = !this.show;
  // }

}
