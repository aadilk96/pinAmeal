import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  keyword = ''

  constructor(public navCtrl: NavController) {
    this.keyword = 'daily';
  }

}
