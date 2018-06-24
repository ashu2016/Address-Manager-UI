import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";

import { MovedAddressInfo } from "../../models/address-info/moved-address.interface";

/**
 * Generated class for the MovedAddressesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moved-addresses',
  templateUrl: 'moved-addresses.html',
})
export class MovedAddressesPage {
  movedaddresslistRef$ : FirebaseListObservable<MovedAddressInfo[]>;
  mailerId :string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    this.mailerId =   this.navParams.get('companyMailerId');
    
        this.movedaddresslistRef$ =  this.database.list('moved-address-list',{
          query: {
              orderByChild: 'mailerId',
              equalTo: this.mailerId
          }
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovedAddressesPage');
  }

}
