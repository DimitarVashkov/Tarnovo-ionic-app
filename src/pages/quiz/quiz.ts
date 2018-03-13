import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {EasyQuizPage} from "../easy-quiz/easy-quiz";
import {MediumQuizPage} from "../medium-quiz/medium-quiz";
import {HardQuizPage} from "../hard-quiz/hard-quiz";
/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {
  easyQuiz = EasyQuizPage;
  mediumQuiz = MediumQuizPage;
  hardQuiz = HardQuizPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }

}
