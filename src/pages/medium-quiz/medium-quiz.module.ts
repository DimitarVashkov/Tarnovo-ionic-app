import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MediumQuizPage } from './medium-quiz';

@NgModule({
  declarations: [
    MediumQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(MediumQuizPage),
  ],
})
export class MediumQuizPageModule {}
