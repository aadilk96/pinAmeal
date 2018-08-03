import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapPage } from '../map/map'
import { ResPage } from '../respage/respage'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  constructor(public navCtrl: NavController) {
  }
  gotomap() {
      this.navCtrl.push(MapPage);
    }
  gotorespage() {
      this.navCtrl.push(ResPage);
    }
}
