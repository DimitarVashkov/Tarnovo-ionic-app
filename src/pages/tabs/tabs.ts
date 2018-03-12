import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {MuseumPage} from "../museum/museum";
import {TsarevetsPage} from "../tsarevets/tsarevets";
import {QuizPage} from "../quiz/quiz";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MuseumPage;
  tab3Root = TsarevetsPage;
  tab4Root = QuizPage;

  constructor() {

  }
}
