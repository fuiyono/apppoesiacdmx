import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { POETAS } from "../../data/data.poetas";
import { Poeta } from "../../interfaces/poeta.interface";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
    poetas:Poeta[] = [];

    constructor(){

      this.poetas = POETAS.splice(0);

  


    }
}
