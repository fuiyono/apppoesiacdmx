import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-claustro',
  templateUrl: 'claustro.html',
})
export class ClaustroPage {

  lat: number;
  lng: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.lat = 19.4267285;
    this.lng = -99.1367785;
  }



}
