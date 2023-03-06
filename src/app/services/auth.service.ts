import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiLink } from '../enums/Api.enum';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(ApiLink.Api+'/1.0/users/log-in', {
      email,
      password
    }, httpOptions);

  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(ApiLink.Api+'/1.0/users/register-first-step', {
      username,
      email,
      password
    }, httpOptions);
  }
}
