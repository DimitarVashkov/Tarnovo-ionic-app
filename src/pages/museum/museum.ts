import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MuseumArticle_1Page} from '../museum-article-1/museum-article-1';
import {MuseumArticle_2Page} from '../museum-article-2/museum-article-2';
import {MuseumArticle_3Page} from '../museum-article-3/museum-article-3';
import {MuseumArticle_4Page} from '../museum-article-4/museum-article-4';
/**
 * Generated class for the MuseumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-museum',
  templateUrl: 'museum.html',
})
export class MuseumPage {

  article1 = MuseumArticle_1Page;
  article2 = MuseumArticle_2Page;
  article3 = MuseumArticle_3Page;
  article4 = MuseumArticle_4Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MuseumPage');
  }

}
