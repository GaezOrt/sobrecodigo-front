
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiLink } from '../enums/Api.enum';
import { AuthService } from './auth.service';

@Injectable({providedIn:'root'})
export class TechnologyService{

constructor (private http:HttpClient) {}
getTechnologies():Observable<any>{
    return this.http.get(ApiLink.Api +"/1.0/technologies/");
  }

}
