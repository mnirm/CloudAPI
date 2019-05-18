import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy, PopoverController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ShowsService } from './services/shows.service';
import { PopoverShowInfoComponent } from './popover-show-info/popover-show-info.component';
import { AuthService } from './services/auth/auth.service';
import { CustomApiComponent } from './custom-api/custom-api.component';
import { CustomapiService } from './services/customapi.service';

@NgModule({
  declarations: [AppComponent, PopoverShowInfoComponent, CustomApiComponent],
  entryComponents: [PopoverShowInfoComponent, CustomApiComponent],
  imports:
    [BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpClientModule
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ShowsService,
    PopoverController,
    AuthService,
    CustomapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
