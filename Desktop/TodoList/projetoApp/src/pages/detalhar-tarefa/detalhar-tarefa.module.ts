import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalharTarefaPage } from './detalhar-tarefa';

@NgModule({
  declarations: [
    DetalharTarefaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalharTarefaPage),
  ],
})
export class DetalharTarefaPageModule {}
