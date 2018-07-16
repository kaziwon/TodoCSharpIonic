import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheTarefaPage } from './detalhe-tarefa';

@NgModule({
  declarations: [
    DetalheTarefaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheTarefaPage),
  ],
})
export class DetalheTarefaPageModule {}
