import { Component } from '@angular/core';
import { ShowsService, IShowInfo } from '../services/shows.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Shows: IShowInfo[];
  search: string;
  searched: boolean = false;
  pageNumber: number = 0;
  constructor(private showSvc: ShowsService) {
    this.showShows();
  }

  lookup() {
    console.log(this.search);
    if (this.search) {
      this.searched = true;
      this.showSvc.getSpecificShows(this.search).subscribe(success => {
        this.Shows = success;
        console.log(this.Shows);
      });
    }
    if (!this.search) {
      this.searched = false;
      this.showShows();
    }
  }

  showShows() {
    this.showSvc.getShows(this.pageNumber).subscribe(success => {
      this.Shows = success;
      console.log(this.Shows);
    });
  }

  NextPage() {
    this.pageNumber++;
    this.showSvc.getShows(this.pageNumber).subscribe(success => {
      this.Shows = success;
      console.log(success);
    });
  }

  PreviousPage() {
    if (this.pageNumber >= 1)
      this.pageNumber--;
    this.showSvc.getShows(this.pageNumber).subscribe(success => {
      this.Shows = success;
    });
  }

  ShowMore(show: IShowInfo) {
    console.log(show);
  }
}