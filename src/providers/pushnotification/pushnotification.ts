
import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
/*
  Generated class for the PushnotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PushnotificationProvider {

  constructor( private oneSignal: OneSignal) {
    console.log('Hello PushnotificationProvider Provider');
  }

  init_notifications(){
    this.oneSignal.startInit('ba3b0195-e142-4cb4-b04d-757c4b0f3a56', '672933041681');

this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

this.oneSignal.handleNotificationReceived().subscribe(() => {
 // do something when notification is received
});

this.oneSignal.handleNotificationOpened().subscribe(() => {
  // do something when a notification is opened
});

this.oneSignal.endInit();
  }

}
