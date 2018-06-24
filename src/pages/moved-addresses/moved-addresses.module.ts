import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovedAddressesPage } from './moved-addresses';

@NgModule({
  declarations: [
    MovedAddressesPage,
  ],
  imports: [
    IonicPageModule.forChild(MovedAddressesPage),
  ],
})
export class MovedAddressesPageModule {}
