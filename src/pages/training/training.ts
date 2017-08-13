import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { TrainingProgressPage } from '../training-progress/training-progress';

@Component({
  selector: 'page-training',
  templateUrl: 'training.html'
})
export class TrainingPage {

  constructor(public navCtrl: NavController) {

  }

  StartTraning($event, item) {
    this.navCtrl.push(TrainingProgressPage, item);
  }

}
