import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoetasPage } from './poetas';

@NgModule({
  declarations: [
    PoetasPage,
  ],
  imports: [
    IonicPageModule.forChild(PoetasPage),
  ],
})
export class PoetasPageModule {}
