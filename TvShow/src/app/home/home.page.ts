import { Component } from '@angular/core';
import { ShowsService, IShowInfo } from '../services/shows.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ShowsLookedUp: IShowInfo;
  search: string;
  constructor(private showSvc: ShowsService) {
    console.log(this.showSvc.getShows());
  }
  lookup() {
    console.log(this.search);
    this.showSvc.getSpecificShows(this.search).subscribe(success => {
      this.ShowsLookedUp = success;
    });
  }
}