import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditProfileService } from 'src/app/services/edit-profile-service.service';
import { LoginService } from 'src/app/services/login-service.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import {MatDialog} from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-navbar-landing',
  templateUrl: './navbar-landing.component.html',
  styleUrls: ['./navbar-landing.component.css']
})
export class NavbarLandingComponent implements OnInit {

  route : string;
  isLoggedIn:boolean;
  email:string;
  userName: string;
  userId:number;
  constructor(private router : Router, private profileInfo:EditProfileService, 
    private tokenStorageService:TokenStorageService, private loginService:LoginService,
    public dialog: MatDialog

    ) { }

  ngOnInit(): void {
    this.route = this.router.url;
    this.profileInfo.getInfoUser().subscribe(val=>{
      this.email=val.email;
      this.userName = val.username;
      this.userId=val.id;
  });
    this.isLoggedIn = !!this.tokenStorageService.getToken();

  }

  userLogout():void{
    this.loginService.logout()
  }

  // show : boolean = true;

  // switch() :void {
  //   this.show = !this.show;
  // }

  openDialog() {
    const dialogRef = this.dialog.open(SignInComponent, {
      panelClass: 'dialog-style'
    });
  }

}
