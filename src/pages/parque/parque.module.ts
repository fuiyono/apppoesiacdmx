import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParquePage } from './parque';

@NgModule({
  declarations: [
    ParquePage,
  ],
  imports: [
    IonicPageModule.forChild(ParquePage),
  ],
})
export class ParquePageModule {}
