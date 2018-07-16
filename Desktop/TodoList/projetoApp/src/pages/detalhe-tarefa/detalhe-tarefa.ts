import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, UrlSerializer } from 'ionic-angular';
import { TarefasProvider } from './../../providers/tarefas/tarefas';
import { Tarefa } from './../../model/TarefaModel';


@IonicPage()
@Component({
  selector: 'page-detalhe-tarefa',
  templateUrl: 'detalhe-tarefa.html',
})
export class DetalheTarefaPage {
  model: Tarefa;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private toast: ToastController, private tarefaProvider: TarefasProvider ) {
    if (this.navParams.data.tarefa) {
      this.model = this.navParams.data.tarefa;
    }
    else {
      this.model = new Tarefa();
    }

  }

  save() {
    this.saveTarefa()
      .then(() => {
        this.toast.create({ message: 'Usuario editado com sucesso', position: 'botton', duration: 3000 }).present();

        this.navCtrl.pop();

      })
      .catch((error) => {

        this.toast.create({ message: 'Error ao salvar o usuario', position: 'botton', duration: 3000 }).present();

      });

  }

  private saveTarefa() {
    if (this.model.id) {
      return this.tarefaProvider.Update(this.model);
    } else {
      this.tarefaProvider.CreateTarefa(this.model.titulo, this.model.descricao);
    }

  }

}

/*export class Tarefa {
  id: number;
  titulo: string;
  descricao: string;
  

}*/