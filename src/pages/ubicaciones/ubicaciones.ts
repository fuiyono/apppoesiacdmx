import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ClaustroPage, MuseoPage, ParquePage, CreacionPage, EstanquilloPage, MetroPage, BibliotecaPage, PenduloPage } from "../index.paginas";
/**
 * Generated class for the UbicacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ubicaciones',
  templateUrl: 'ubicaciones.html',
})
export class UbicacionesPage {

  claustroPage:any = ClaustroPage;
  estanquilloPage:any = EstanquilloPage;
  creacionPage:any = CreacionPage;
  museoPage:any = MuseoPage;
  metroPage:any = MetroPage;
  parquePage:any = ParquePage;
  bibliotecaPage:any = BibliotecaPage;
  penduloPage:any = PenduloPage;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UbicacionesPage');
  }

}
