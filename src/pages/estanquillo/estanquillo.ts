import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EstanquilloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estanquillo',
  templateUrl: 'estanquillo.html',
})
export class EstanquilloPage {

    lat: number;
    lng: number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.lat = 19.4332691;
    this.lng = -99.1362302;
  }



}
