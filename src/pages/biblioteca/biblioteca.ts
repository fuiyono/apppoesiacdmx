import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BibliotecaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-biblioteca',
  templateUrl: 'biblioteca.html',
})
export class BibliotecaPage {

    lat: number;
    lng: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.lat = 19.3473304;
    this.lng = -99.1826752;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibliotecaPage');
  }

}
