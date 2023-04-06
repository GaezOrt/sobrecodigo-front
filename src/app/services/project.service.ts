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
    return this.http.get(ApiLink.Api +"/1.0/projects/recent");
  }

  obtenerPersonalProjects():Observable<any>{
    return this.http.get(ApiLink.Api +"/1.0/projects/by-user");
  }

  getProjectById(id:number):Observable<any>{
    return this.http.get(ApiLink.Api +"/1.0/projects/by-id/"+id);
  }

  getAllProjects():Observable<any>{
    return this.http.get(ApiLink.Api + "/1.0/projects");
  }

}
