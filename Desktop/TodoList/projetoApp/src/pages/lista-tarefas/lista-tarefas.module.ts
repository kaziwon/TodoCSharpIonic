import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaTarefasPage } from './lista-tarefas';

@NgModule({
  declarations: [
    ListaTarefasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaTarefasPage),
  ],
})
export class ListaTarefasPageModule {}
