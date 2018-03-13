import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
/**
 * Generated class for the EasyQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-easy-quiz',
  templateUrl: 'easy-quiz.html',
})
export class EasyQuizPage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  next(){
    this.slides.slideNext(500);
  }

  previous(){
    this.slides.slidePrev(500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }
  ionViewDidLoad() {
  }
  slidesInfo = [
    {
      question: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      a1: 'Something1', a2: 'Something1', a3: 'Something1', a4: 'Something1'
    },
    {
      question: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      a1: 'Something1', a2: 'Something1', a3: 'Something1', a4: 'Something1'
    },
    {
      question: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      a1: 'Something1', a2: 'Something1', a3: 'Something1', a4: 'Something1'
    }
  ];
}
