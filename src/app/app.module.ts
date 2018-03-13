import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {TsarevetsPage} from "../pages/tsarevets/tsarevets";
import {QuizPage} from "../pages/quiz/quiz";
import {MuseumPage} from "../pages/museum/museum";
import {MuseumArticle_1Page} from "../pages/museum-article-1/museum-article-1";
import {MuseumArticle_2Page} from "../pages/museum-article-2/museum-article-2";
import {MuseumArticle_3Page} from "../pages/museum-article-3/museum-article-3";
import {MuseumArticle_4Page} from "../pages/museum-article-4/museum-article-4";
import {CastleArticle_1Page} from "../pages/castle-article-1/castle-article-1";
import {CastleArticle_2Page} from "../pages/castle-article-2/castle-article-2";
import {CastleArticle_3Page} from "../pages/castle-article-3/castle-article-3";
import {CastleArticle_4Page} from "../pages/castle-article-4/castle-article-4";
import {EasyQuizPage} from "../pages/easy-quiz/easy-quiz";
import {MediumQuizPage} from "../pages/medium-quiz/medium-quiz";
import {HardQuizPage} from "../pages/hard-quiz/hard-quiz";

@NgModule({
  declarations: [
    MyApp,
    TsarevetsPage,
    QuizPage,
    MuseumPage,
    HomePage,
    TabsPage,
    MuseumArticle_1Page,
    MuseumArticle_2Page,
    MuseumArticle_3Page,
    MuseumArticle_4Page,
    CastleArticle_1Page,
    CastleArticle_2Page,
    CastleArticle_3Page,
    CastleArticle_4Page,
    EasyQuizPage,
    MediumQuizPage,
    HardQuizPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'Назад'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TsarevetsPage,
    QuizPage,
    MuseumPage,
    HomePage,
    TabsPage,
    MuseumArticle_1Page,
    MuseumArticle_2Page,
    MuseumArticle_3Page,
    MuseumArticle_4Page,
    CastleArticle_1Page,
    CastleArticle_2Page,
    CastleArticle_3Page,
    CastleArticle_4Page,
    EasyQuizPage,
    MediumQuizPage,
    HardQuizPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
