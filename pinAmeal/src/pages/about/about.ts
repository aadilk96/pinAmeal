import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items: any[];
  constructor(public navCtrl: NavController) {
    this.items =[];
    for(let i = 1; i < 11; i++){
      this.items.push({
        text: "Restaurant " + i,
        id: i
      });
    }

  }
  itemSelected(item){
    alert(item.text);
  }
}
