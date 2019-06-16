import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PageName1Page} from '../page-name1/page-name1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goAnOtherPage() {
    this.navCtrl.push(PageName1Page);
    }
   

}
