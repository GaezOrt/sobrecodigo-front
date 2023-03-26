import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiLink } from "../enums/Api.enum";

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http:HttpClient) { }

  obtenerUsers():Observable<any> {
    return this.http.get(ApiLink.Api+'/1.0/users/active');
  }
  mostActiveUsers():Observable<any> {
    return this.http.get(ApiLink.Api+'/1.0/users/most-active');
  }

  getIconsTechUser(userId:number):Observable<any> {
    return this.http.get(ApiLink.Api+'/1.0/technologies/by-user/'+userId);
  }
}
