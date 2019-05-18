import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { headersToString } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class CustomapiService {

  url: string = "https://tvshowjarnoapi.azurewebsites.net/api"
  httpOptions;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.auth.accessToken
      })
    }
  }

  public GetShows() {
    return this.http.get<IShowCustomApi[]>("https://tvshowjarnoapi.azurewebsites.net/api/show", this.httpOptions);
  }
}

export interface Actor {
  id: number;
  name: string;
  age: number;
}

export interface IShowCustomApi {
  id: number;
  name: string;
  type: string;
  rating: number;
  actors: Actor[];
}