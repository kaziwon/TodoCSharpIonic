import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, UrlSerializer } from 'ionic-angular';
import {TarefasProvider} from './../../providers/tarefas/tarefas';
import { Tarefa } from './../../model/TarefaModel';



@IonicPage()
@Component({
  selector: 'page-lista-tarefas',
  templateUrl: 'lista-tarefas.html',
})
export class ListaTarefasPage {
  model :  Tarefa;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private toast : ToastController, private tarefasProvider: TarefasProvider ) {

      this.model = new Tarefa();
      
  }


  CreateTarefa(){
this.tarefasProvider.CreateTarefa(this.model.titulo, this.model.descricao)
.then((result: any) =>{
  this.navCtrl.push('ListaDeTarefasPage');
this.toast.create({message: 'A tarefa '+result.Titulo+ ' foi inserida com sucesso '  , position: 'botton', duration: 3000}).present();


})
.catch((error: any) =>{
  this.toast.create({message: 'Erro ao criar o usuario', position: 'botton', duration: 3000}).present();

})

  }
 

}

/*export class Tarefa{
  titulo: string;
  descricao: string;
}*/
