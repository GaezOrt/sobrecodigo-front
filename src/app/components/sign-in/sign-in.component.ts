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
  isLoading: boolean = false;
  constructor(private loginService:LoginService,  private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  async submitLogin(){
    this.isLoading = true
    const resp = await this.loginService.login(this.email, this.password)
    this.isLoading = false
    if(resp){
      this.snackBar.open("¡Bienvenido!", undefined, {
        duration: 3000,
        panelClass: 'my-custom-snackbar-success'
      })
      window.location.reload()
    }else{
      this.snackBar.open("No pudimos procesar la solicitud", undefined, {
        duration: 3000,
        panelClass: 'my-custom-snackbar-success'
      })
    }
  }
}
