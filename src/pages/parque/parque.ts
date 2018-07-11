import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ParquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parque',
  templateUrl: 'parque.html',
})
export class ParquePage {

  lat: number;
  lng: number;


constructor(public navCtrl: NavController, public navParams: NavParams) {

  this.lat = 19.4118526;
  this.lng = -99.1701581;
}

}
