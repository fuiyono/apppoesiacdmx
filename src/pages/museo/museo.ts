import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MuseoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-museo',
  templateUrl: 'museo.html',
})
export class MuseoPage {
  lat: number;
  lng: number;


constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.lat = 19.4291853;
  this.lng = -99.1325173;
}

}
