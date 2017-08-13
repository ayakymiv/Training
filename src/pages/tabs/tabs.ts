import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { TrainingPage } from '../training/training';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ProfilePage;
  tab2Root: any = TrainingPage;
  tab3Root: any = SettingsPage;

  constructor() {

  }
}
