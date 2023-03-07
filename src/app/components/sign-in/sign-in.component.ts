import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  email: string = '';
  password: string = '';
  constructor(private loginService:LoginService,  private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  submitLogin(){
    this.loginService.login(this.email, this.password).then(val=>{
        if(val){
          this.snackBar.open("Entrado correctamente.", undefined, {
            duration: 3000,
            panelClass: 'my-custom-snackbar-success'
          })
        }else{
          this.snackBar.open("Error al entrar.", undefined, {
            duration: 3000,
            panelClass: 'my-custom-snackbar-success'
          })
        }
    })
  }
}
