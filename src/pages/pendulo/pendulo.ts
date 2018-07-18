import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PenduloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pendulo',
  templateUrl: 'pendulo.html',
})
export class PenduloPage {

  lat: number;
  lng: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


        this.lat = 19.4181817;
        this.lng = -99.15885665;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PenduloPage');
  }

}
