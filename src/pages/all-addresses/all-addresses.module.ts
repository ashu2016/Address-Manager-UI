import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllAddressesPage } from './all-addresses';

@NgModule({
  declarations: [
    AllAddressesPage,
  ],
  imports: [
    IonicPageModule.forChild(AllAddressesPage),
  ],
})
export class AllAddressesPageModule {}
