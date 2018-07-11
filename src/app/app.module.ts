import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UbicacionesPage, MetroPage, ParquePage, Dia1Page, Dia2Page, Dia3Page, Dia4Page, Dia5Page, DpoetasPage,PoetasPage, RedesPage, ClaustroPage, EstanquilloPage, CreacionPage, MuseoPage } from "../pages/index.paginas";
//mapas

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UbicacionesPage,
    Dia1Page,
    Dia2Page,
    Dia3Page,
    Dia4Page,
    DpoetasPage,
    PoetasPage,
    Dia5Page,
    RedesPage,
    ClaustroPage,
    EstanquilloPage,
    CreacionPage,
    MuseoPage,
    MetroPage,
    ParquePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDBDZ--NTZKUeQ4AdJkQ5d4_r0wdy98Hds'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UbicacionesPage,
    Dia1Page,
    Dia2Page,
    Dia3Page,
    Dia4Page,
    DpoetasPage,
    PoetasPage,
    Dia5Page,
    RedesPage,
    ClaustroPage,
    EstanquilloPage,
    CreacionPage,
    MuseoPage,
    MetroPage,
    ParquePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
