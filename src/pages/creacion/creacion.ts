import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creacion',
  templateUrl: 'creacion.html',
})
export class CreacionPage {
  lat: number;
  lng: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.lat = 19.4121519;
    this.lng = -99.172378;
  }

}
