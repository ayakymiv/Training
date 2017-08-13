import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrainingProgressPage } from './training-progress';

@NgModule({
  declarations: [
    TrainingProgressPage,
  ],
  imports: [
    IonicPageModule.forChild(TrainingProgressPage),
  ],
})
export class TrainingProgressPageModule {}
