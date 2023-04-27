import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  form: FormGroup;
  constructor(private loginService:LoginService,  private snackBar:MatSnackBar, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  login(form : any){
    // console.log(form);
    this.email = form.email;
    this.password = form.password;
    this.submitLogin();
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
