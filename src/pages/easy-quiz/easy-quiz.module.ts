import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EasyQuizPage } from './easy-quiz';

@NgModule({
  declarations: [
    EasyQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(EasyQuizPage),
  ],
})
export class EasyQuizPageModule {}
