import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HardQuizPage } from './hard-quiz';

@NgModule({
  declarations: [
    HardQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(HardQuizPage),
  ],
})
export class HardQuizPageModule {}
