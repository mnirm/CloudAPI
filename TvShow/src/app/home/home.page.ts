import { Component } from '@angular/core';
import { ShowsService, IShowInfo } from '../services/shows.service';
import { PopoverController } from '@ionic/angular';
import { PopoverShowInfoComponent } from '../popover-show-info/popover-show-info.component';

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

  constructor(private showSvc: ShowsService, public popoverCtrl: PopoverController) {
    this.showShows();
  }

  lookup() {
    console.log(this.search);
    if (this.search) {
      this.searched = true;
      this.showSvc.getSpecificShows(this.search).subscribe(success => {
        this.Shows = success;
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
    });
  }

  NextPage() {
    this.pageNumber++;
    this.showSvc.getShows(this.pageNumber).subscribe(success => {
      this.Shows = success;
    });
  }

  PreviousPage() {
    if (this.pageNumber >= 1)
      this.pageNumber--;
    this.showSvc.getShows(this.pageNumber).subscribe(success => {
      this.Shows = success;
    });
  }

  async presentPopover(ev: any, id) {
    const popover = await this.popoverCtrl.create({
      component: PopoverShowInfoComponent,
      componentProps: {
        showId: id
      },
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}