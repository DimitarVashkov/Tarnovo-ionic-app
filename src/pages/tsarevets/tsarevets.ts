import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CastleArticle_1Page} from "../castle-article-1/castle-article-1";
import {CastleArticle_2Page} from "../castle-article-2/castle-article-2";
import {CastleArticle_3Page} from "../castle-article-3/castle-article-3";
import {CastleArticle_4Page} from "../castle-article-4/castle-article-4";

/**
 * Generated class for the TsarevetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tsarevets',
  templateUrl: 'tsarevets.html',
})
export class TsarevetsPage {

  item1 = CastleArticle_1Page;
  item2 = CastleArticle_2Page;
  item3 = CastleArticle_3Page;
  item4 = CastleArticle_4Page;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TsarevetsPage');
  }

}
