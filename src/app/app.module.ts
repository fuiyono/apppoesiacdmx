import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UbicacionesPage, Dia1Page, Dia2Page, Dia3Page, Dia4Page, DpoetasPage, PoetasPage } from "../pages/index.paginas";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    UbicacionesPage,
    Dia1Page,
    Dia2Page,
    Dia3Page,
    Dia4Page,
    DpoetasPage,
    PoetasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    UbicacionesPage,
    Dia1Page,
    Dia2Page,
    Dia3Page,
    Dia4Page,
    DpoetasPage,
    PoetasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
