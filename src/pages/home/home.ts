import { Component } from "@angular/core";
import { NavController, PopoverController, NavParams } from "ionic-angular";
import { Storage } from '@ionic/storage';

import { NotificationsPage } from "../notifications/notifications";
import { SettingsPage } from "../settings/settings";
import { TripsPage } from "../trips/trips";
import { SearchLocationPage } from "../search-location/search-location";
import { Dataservice } from '../../providers/dataservice/dataservice';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage { 
  lightOnOrOff:boolean=false;
  //public navCtrl: NavController, public navParams: NavParams,private dataService: Dataservice
  constructor(private storage: Storage, public navCtrl: NavController, public popoverCtrl: PopoverController,
    public navParams: NavParams, private dataService: Dataservice) { 
  }
  controlLight() {  
    var onOrOff :any= this.lightOnOrOff?'ON':'OFF'
   this.dataService.getData(this.dataService.serviceurl + onOrOff).subscribe(data => {
      
    },
      (error => {
        this.handleError(error, "loadData()");
      }));

  }
  private handleError(error: any, method: any) {

    alert('An error occurred ');


  }
  // choose place
  choosePlace(from) {
    this.navCtrl.push(SearchLocationPage, from);
  }

  // to go account page
  goToAccount() {
    this.navCtrl.push(SettingsPage);
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }

 

}

//
