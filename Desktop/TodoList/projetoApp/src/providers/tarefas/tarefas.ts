import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TarefasProvider {
  private API_URL = 'http://localhost:29165/tarefas'

  constructor(public http: Http) { }

  CreateTarefa(titulo: string, descricao: string) {
    return new Promise((resolve, reject) => {
      var data = {
        "Titulo": titulo,
        "Descricao": descricao

      };

      

      this.http.post(this.API_URL, data)
        .subscribe((result: any) => {
          resolve(result.json());

        },
          (error) => {
            reject(error.json());
          });

    });
  }

  GetTarefa() {
    return new Promise((resolve, reject) => {

      this.http.get(this.API_URL)
        .subscribe((result: any) => {
          resolve(result.json());

        },
          (error) => {
            reject(error.json());
          });

    });
  }

  FinalizarTarefa(id: number){
    return new Promise((resolve, reject) => {

      let url = this.API_URL + '/' +id;

      this.http.patch(url, id)
        .subscribe((result: any) => {
          resolve(result.json());

        },
          (error) => {
            reject(error.json());
          });

    });

  }
  
  

  GetTarefaPorId(id: number) {
    return new Promise((resolve, reject) => {

      let url = this.API_URL + '/' + id;

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());

        },
          (error) => {
            reject(error.json());
          });

    });
  }

  /*Insert(tarefa: any) {
    return new Promise((resolve, reject) => {

      let url = this.API_URL;

      this.http.post(url, tarefa)
        .subscribe((result: any) => {
          resolve(result.json());

        },
          (error) => {
            reject(error.json());
          });

    });
  }*/

  Update(tarefa: any) {
    return new Promise((resolve, reject) => {

      let url = this.API_URL + '/' + tarefa.id;
      let data ={
        "titulo": tarefa.titulo,
        "descricao": tarefa.descricao
      }

      this.http.put(url, data)
        .subscribe((result: any) => {
          resolve(result.json());

        },
          (error) => {
            reject(error.json());
          });

    });
  }

  Remove(id: number) {
    return new Promise((resolve, reject) => {

      let url = this.API_URL + '/' + id;

      this.http.delete(url)
        .subscribe((result: any) => {
          resolve(result.json());

        },
          (error) => {
            reject(error.json());
          });

    });
  }

}
