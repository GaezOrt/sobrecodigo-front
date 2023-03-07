import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login-service.service';
import { RegisterService } from 'src/app/services/register-service.services';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  constructor(private registerService:RegisterService, private router:Router, private snackBar:MatSnackBar, private loginService:LoginService) { }

  ngOnInit(): void {
  }
  submitRegister(){
    this.snackBar.open("Signing Up", undefined, {
      duration: 3000,
      panelClass: 'my-custom-snackbar-loading'
    })
    this.registerService.registerNewUser(this.username,this.email, this.password).then(async val=>{
    
      if(val===true){

        this.snackBar.open("Signed up correctly.", undefined, {
          duration: 3000,
          panelClass: 'my-custom-snackbar-success'
        })
        this.router.navigate(['/home']);
      }else{
        this.snackBar.open("Email already in use.", undefined, {
          duration: 3000,
          panelClass: 'my-custom-snackbar-error'
        })
      }
    });

  }

}
