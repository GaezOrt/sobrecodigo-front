
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiLink } from '../enums/Api.enum';
import { AuthService } from './auth.service';
import { TokenStorageService } from './token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn:'root'})
export class LoginService{
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];


constructor (private authService: AuthService,  private tokenStorage: TokenStorageService, private router: Router, private http:HttpClient){}
checkEmail(email:string){

    return this.http.get(ApiLink.Api+'/1.0/users/email-registered/'+email, httpOptions);

}
/*
signInGoogle(email:string){
  return this.http.post(ApiLink.Api+'/1.0/users/log-in-google',{email:email}, httpOptions).toPromise().then(
   ( data:any) => {
      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUser(data.token);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      return true;
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
      return false;
    }
  );;

}
*/
async login( email:string, password:string):Promise<boolean>{

   return this.authService.login(email, password).toPromise().then(
        (data:any) => {
          console.log()
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data.token);
          console.log(this.tokenStorage);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          return true;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
          return false;
        }
      );

    }
    reloadPage(): void {
        window.location.reload();
      }
}
