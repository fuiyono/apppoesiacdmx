import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DpoetasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dpoetas',
  templateUrl: 'dpoetas.html',
})
export class DpoetasPage {

  poeta:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log( navParams );
    this.poeta =this.navParams.get("poeta");
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DpoetasPage');
  }

}
