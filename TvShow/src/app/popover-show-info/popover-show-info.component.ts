import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { IShowInfo, ShowsService } from '../services/shows.service';

@Component({
  selector: 'app-popover-show-info',
  templateUrl: './popover-show-info.component.html',
  styleUrls: ['./popover-show-info.component.scss'],
})
export class PopoverShowInfoComponent implements OnInit {

  showId = null;
  show: IShowInfo;

  constructor(private navParams: NavParams, private showSvc: ShowsService) {
    console.log(this.showId);
  }

  ngOnInit() {
    this.showId = Number(this.navParams.get('showId'));
    this.showSvc.getShowMainInfo(this.showId).subscribe(success => {
      this.show = success;
    });
  }

}
