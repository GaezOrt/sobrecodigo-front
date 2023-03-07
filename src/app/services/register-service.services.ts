
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({providedIn:'root'})
export class RegisterService{

constructor (private authService: AuthService) {}
registerNewUser(username:string, email:string, password:string):Promise<any>{

    return this.authService.register(username,email,password).toPromise().then(val=>
      {
        return val;
      }, err => {

        return err;
      })
}

}
