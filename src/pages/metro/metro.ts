import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MetroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-metro',
  templateUrl: 'metro.html',
})
export class MetroPage {
  lat: number;
  lng: number;


constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.lat = 19.4084827;
  this.lng = -99.1337907;
}

}
