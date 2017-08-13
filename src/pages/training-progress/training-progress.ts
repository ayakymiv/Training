import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

/**
 * Generated class for the TrainingProgressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-training-progress',
  templateUrl: 'training-progress.html',
  template: `
        <h1>My First Angular2 App</h1>
        <button (click)="gotoDetails()">Start Loading</button>
        <ng2-slim-loading-bar></ng2-slim-loading-bar>
    `
})
export class TrainingProgressPage {
  todo = {
    title: '',
    description: ''
  };
  logForm(form) {
    console.log(form.value)
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController, private slimLoadingBar: SlimLoadingBarService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingProgressPage');
  }

  // ionic2 will call this automatically
  ionViewWillEnter() {
      this.view.showBackButton(false);
  }

  startLoading() {
        this.slimLoadingBar.start(() => {
            console.log('Loading complete');
        });
    }

  stopLoading() {
      this.slimLoadingBar.stop();
  }

  completeLoading() {
      this.slimLoadingBar.complete();
  }

}
