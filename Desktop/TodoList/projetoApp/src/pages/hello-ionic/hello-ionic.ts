import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TarefasProvider } from './../../providers/tarefas/tarefas';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private tarefasProvider: TarefasProvider) {
  }

  Transferir() {
    this.navCtrl.push('ListaDeTarefasPage');

  }
}
