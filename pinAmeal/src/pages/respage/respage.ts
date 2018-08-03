import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DonatePage } from '../donate/donate'

/**
 * Generated class for the RespagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-respage',
  templateUrl: 'respage.html',
})
export class ResPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RespagePage');
  }
  gotodonate() {
      this.navCtrl.push(DonatePage);
    }

}
