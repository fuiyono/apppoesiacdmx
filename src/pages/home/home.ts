import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { UbicacionesPage, Dia1Page, Dia2Page, Dia3Page, Dia4Page, Dia5Page } from "../index.paginas";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //Declaración de variable para ir a página sin función
dia1Page:any = Dia1Page;
dia2Page:any = Dia2Page;
dia3Page:any = Dia3Page;
dia4Page:any = Dia4Page;
dia5Page:any = Dia5Page;

  constructor(public navCtrl: NavController) {

  }

}
