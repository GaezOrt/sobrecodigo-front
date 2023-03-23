
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectedTechnologies } from '../components/sign-up/selected-technologies.model';
import { AuthService } from './auth.service';

@Injectable({providedIn:'root'})
export class RegisterService{

constructor (private authService: AuthService) {}
registerNewUser(username:string, email:string, password:string, rubro:any, technologies:SelectedTechnologies):Promise<any>{

    return this.authService.register(username,email,password, technologies).toPromise().then(val=>
      {
        return val;
      }, err => {

        return err;
      })
}

}
