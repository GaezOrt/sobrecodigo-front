import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http:HttpClient) { }

  obtenerUsers():Observable<any>{
    return this.http.get('./assets/data/ranking-users.json');
  }
}
