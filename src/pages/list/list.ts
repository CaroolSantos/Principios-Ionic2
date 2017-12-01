import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }

  pushPage(){
    this.navCtrl.push(ListPage);
  }

  popPage(){
    this.navCtrl.pop();
  }

  ionViewDidLoad(){
    console.log(this.navParams);
    this.navParams.data.type;
    this.navParams.data.type;
    
  }

}
