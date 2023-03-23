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
export class EditProfileService {
  constructor(private http: HttpClient) { }

  getInfoUser(): Observable<any> {

    return this.http.get(ApiLink.Api+'/1.0/users/info');
  }

  editInfo(profile:any): Observable<any> {
    
    return this.http.post(ApiLink.Api+'/1.0/users/edit-profile', profile);
  }

}
