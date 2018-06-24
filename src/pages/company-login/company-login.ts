import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddressTabsPage  } from "../address-tabs/address-tabs";


@Component({
  selector: 'page-company-login',
  templateUrl: 'company-login.html',
})
export class CompanyLoginPage {

  mailerId :string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyLoginPage');
  }

  loginCompany(mailerId : string){
    this.navCtrl.push(AddressTabsPage,{ companyMailerId : mailerId})
  }
}
