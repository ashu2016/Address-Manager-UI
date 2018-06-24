import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressTabsPage } from './address-tabs';

@NgModule({
  declarations: [
    AddressTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressTabsPage),
  ]
})
export class AddressTabsPageModule {}
