import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiLink } from '../enums/Api.enum';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }

  obtenerProjects():Observable<any>{
    return this.http.get(ApiLink.Api +"/1.0/projects/recent-projects");
  }

  obtenerPersonalProjects():Observable<any>{
    return this.http.get(ApiLink.Api +"/1.0/projects/by-user");
  }

}
