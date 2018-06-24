import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';

/**
 * Generated class for the AddressTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-address-tabs',
  templateUrl: 'address-tabs.html'
})
export class AddressTabsPage {
  mailerId :string;
  allAddressesRoot = 'AllAddressesPage';
  movedAddressesRoot = 'MovedAddressesPage';
  tabParams= {companyMailerId:this.mailerId};

  constructor(public navCtrl: NavController,public navParams: NavParams) {
  this.mailerId =   this.navParams.get('companyMailerId');
  console.log("Address Tabs with mailer id : + " + this.mailerId); 
  this.tabParams.companyMailerId = this.mailerId;

    console.log(this.tabParams);
  }
}
