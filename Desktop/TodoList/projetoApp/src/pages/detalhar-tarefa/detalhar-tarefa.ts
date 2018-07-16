import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalharTarefaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhar-tarefa',
  templateUrl: 'detalhar-tarefa.html',
})
export class DetalharTarefaPage {
tarefa : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.tarefa= this.navParams.data.tarefa; 
  }

}
