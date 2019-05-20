import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomapiService {

  url: string = "https://tvshowjarnoapi.azurewebsites.net/api"
  httpOptions;

  constructor(private http: HttpClient, private auth: AuthService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.auth.accessToken,
        'Content-Type': 'application/json'
      })
    }
  }

  public GetShows() {
    return this.http.get<IShowCustomApi[]>(this.url + "/show", this.httpOptions);
  }

  public DeleteShow(id: number) {
    this.http.delete(this.url + "/show/" + id, this.httpOptions)
      .subscribe(success => {
        console.log(success);
      }, error => {
        console.log(error)
      })
  }

  public NewShow(show: IShowCustomApi) {
    this.http.post(this.url + "/show", show, this.httpOptions)
      .subscribe(success => {
        console.log(success)
      },
        error => {
          console.log(error)
        });
  }
}

export interface Actor {
  id?: number;
  name: string;
  age: number;
}

export interface IShowCustomApi {
  id?: number;
  name: string;
  type: string;
  rating: number;
  actors?: Actor[];
}