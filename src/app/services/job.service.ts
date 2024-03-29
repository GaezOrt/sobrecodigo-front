import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ApiLink } from '../enums/Api.enum';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }

    obtenerJobs():Observable<any> {
      return this.http.get(ApiLink.Api+'/1.0/jobs/recent');
    }

    createJob(jobDto:any):Observable<any> {
      console.log(jobDto);
      return this.http.post(ApiLink.Api+'/1.0/jobs/new', jobDto);
    }
}
