import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResDetailsPage } from './res-details';

@NgModule({
  declarations: [
    ResDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ResDetailsPage),
  ],
})
export class ResDetailsPageModule {}
