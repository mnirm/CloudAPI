import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { IShowCustomApi, CustomapiService, Actor } from '../services/customapi.service';
import { ShowsService } from '../services/shows.service';

@Component({
  selector: 'app-custom-api',
  templateUrl: './custom-api.component.html',
  styleUrls: ['./custom-api.component.scss'],
})
export class CustomApiComponent implements OnInit {

  shows;
  inputName;
  inputType;
  inputRating;

  constructor(public auth: AuthService, private apiSvc: CustomapiService) {
    if (this.auth.isAuthenticated()) {
      this.GetAllShows();
    }
  }

  ngOnInit() { }

  newShow() {
    if (this.inputName != null && this.inputRating != null && this.inputType != null) {
      let show: IShowCustomApi = {
        "name": this.inputName,
        "type": this.inputType,
        "rating": this.inputRating
      }
      this.apiSvc.NewShow(show);
      this.GetAllShows();
    }
  }

  GetAllShows() {
    this.apiSvc.GetShows().subscribe(data => {
      console.log(data);
      this.shows = data;
    });
  }
}