import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { IShowCustomApi, CustomapiService } from '../services/customapi.service';

@Component({
  selector: 'app-custom-api',
  templateUrl: './custom-api.component.html',
  styleUrls: ['./custom-api.component.scss'],
})
export class CustomApiComponent implements OnInit {

  shows;

  constructor(public auth: AuthService, private apiSvc: CustomapiService) {
    if (this.auth.isAuthenticated()) {
      this.GetAllShows();
    }
  }

  ngOnInit() { }

  GetAllShows() {
    this.apiSvc.GetShows().subscribe(success => {
      console.log(success);
      this.shows = success;
    });
  }

  delete(id: number) {
    this.apiSvc.DeleteShow(id);
    this.GetAllShows();
  }
}