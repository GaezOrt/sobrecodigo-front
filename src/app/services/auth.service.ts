import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiLink } from '../enums/Api.enum';
import { SelectedTechnologies } from '../components/sign-up/selected-technologies.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    console.log(ApiLink.Api)
    return this.http.post(ApiLink.Api+'/1.0/users/log-in', {
      email,
      password
    }, httpOptions);

  }

  register(username: string, email: string, password: string, technologiesDto:SelectedTechnologies): Observable<any> {
    return this.http.post(ApiLink.Api+'/1.0/users/register-first-step', {
      username,
      email,
      password,
      technologiesDto
    }, httpOptions);
  }
}
