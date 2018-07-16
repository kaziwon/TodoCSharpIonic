import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TarefasProvider } from './../../providers/tarefas/tarefas';


@IonicPage()
@Component({
  selector: 'page-lista-de-tarefas',
  templateUrl: 'lista-de-tarefas.html',
})
export class ListaDeTarefasPage {
  tarefas: any[];


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toast: ToastController, private tarefasProvider: TarefasProvider) {
  }

  ionViewDidEnter() {
    this.tarefas = [];

    this.getAllTarefas();
  }

 

  finalizarTarefas(id: number) {
    this.tarefasProvider.FinalizarTarefa(id)
      .then((result: any) => {
        this.toast.create({ message: 'Tarefa finalizada', position: 'botton', duration: 3000 }).present();
        this.getAllTarefas();

      })
      .catch((error: any) => {

        this.toast.create({ message: 'Error ao finalizar a tarefa', position: 'botton', duration: 3000 }).present();

      });

  }

  getAllTarefas() {
    this.tarefasProvider.GetTarefa()
      .then((result: any) => {

        this.tarefas = result;
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os usuarios', position: 'botton', duration: 3000 }).present();
      })

  }

  getTarefa() {
    setTimeout(() => {

      this.getAllTarefas();
    }, 500);
  }

  abrirTarefa(id: number) {
    this.tarefasProvider.GetTarefaPorId(id)
      .then((result: any) => {
        this.navCtrl.push('DetalharTarefaPage', { tarefa: result });

      })
      .catch((error: any) => {

        this.toast.create({ message: 'Error ao recuperar a tarefa', position: 'botton', duration: 3000 }).present();

      });

  }
  abrirCriarUsuario() {
    this.navCtrl.push('ListaTarefasPage');
  }

  abrirEditarTarefa(id: number) {
    this.tarefasProvider.GetTarefaPorId(id)
      .then((result: any) => {
        this.navCtrl.push('DetalheTarefaPage', { tarefa: result });

      })
      .catch((error: any) => {

        this.toast.create({ message: 'Error ao ir para outra pagina', position: 'botton', duration: 3000 }).present();

      });

  }

  deletarTarefa(tarefa: any) {
    this.tarefasProvider.Remove(tarefa.id)
      .then((result: any) => {
        let index = this.tarefas.indexOf(tarefa);
        this.tarefas.splice(index, 1);
        this.toast.create({ message: tarefa.titulo + ' excluido com sucesso', position: 'botton', duration: 3000 }).present();
      })
      .catch((error: any) => {

        this.toast.create({ message: 'Error ao excluir', position: 'botton', duration: 3000 }).present();

      });

  }

}
