import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import {environment} from "../../environments/environment";
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  apiURL = 'https://corona.lmao.ninja/';
  constructor(private http: HttpClient ) { }

  getData(ctry):Observable<any> {
    console.log(this.apiURL);
    return this.http.get(`${this.apiURL}countries/${ctry}`);
  }
}
