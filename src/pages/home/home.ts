import { LifecycleEventsPage } from './../lifecycle-events/lifecycle-events';
import { ListPage } from './../list/list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPage(){
    this.navCtrl.push(ListPage,{
      type:'push',
      course: 'Ionic2',
      message:() => {
        console.log("testando passagem de parametro")
      }
    });
  }

  setRoot(){
    this.navCtrl.setRoot(ListPage, {
      type: 'setRoot'
    });
  }

  lifeCycle(){
    this.navCtrl.push(LifecycleEventsPage)
    .then((authorizedAccess: boolean) => {
      if(authorizedAccess) {        
        console.log('Page pushed!');
      } else {
        console.log('Acesso não autorizado!');
      }
    }).catch(error =>{
    console.log('Mensagem de erro' + error);
  });
  }

}
