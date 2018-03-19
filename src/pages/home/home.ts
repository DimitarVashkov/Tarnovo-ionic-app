import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',

})



export class HomePage {

  revealInfo(){
    const info = document.getElementById('information');
    const work = document.getElementById('work-hours');
    const price = document.getElementById('prices');

    work.classList.add('hidden');
    price.classList.add('hidden');
    info.classList.remove('hidden');

  }
  revealWork(){
    const info = document.getElementById('information');
    const work = document.getElementById('work-hours');
    const price = document.getElementById('prices');
    work.classList.remove('hidden');
    price.classList.add('hidden');
    info.classList.add('hidden');
  }
  revealPrice(){
    const info = document.getElementById('information');
    const work = document.getElementById('work-hours');
    const price = document.getElementById('prices');
    work.classList.add('hidden');
    price.classList.remove('hidden');
    info.classList.add('hidden');
  }


  constructor(public navCtrl: NavController) {

  }

}
