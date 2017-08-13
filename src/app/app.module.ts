import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TrainingPage } from '../pages/training/training';
import { SettingsPage } from '../pages/settings/settings';
import { ProfilePage } from '../pages/profile/profile';
import { TrainingProgressPage } from '../pages/training-progress/training-progress';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service/auth-service';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    MyApp,
    TrainingPage,
    SettingsPage,
    ProfilePage,
    TrainingProgressPage,
    RegisterPage,
    LoginPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule.forRoot(),
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages: true})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TrainingPage,
    SettingsPage,
    ProfilePage,
    TrainingProgressPage,
    RegisterPage,
    LoginPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    SlimLoadingBarService
  ]
})
export class AppModule {}
