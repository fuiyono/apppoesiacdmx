import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { OneSignal } from '@ionic-native/onesignal';
import { UbicacionesPage, PoetasPage, RedesPage } from "../pages/index.paginas";

import { PushnotificationProvider } from '../providers/pushnotification/pushnotification';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public OneSignal: OneSignal,
              public _pushProvider: PushnotificationProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'PROGRAMA', component: HomePage },
      { title: 'POETAS', component: PoetasPage },
      { title: 'SEDES', component: UbicacionesPage },
      { title: 'RRSS Y SITIOS WEB', component: RedesPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this._pushProvider.init_notifications();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
