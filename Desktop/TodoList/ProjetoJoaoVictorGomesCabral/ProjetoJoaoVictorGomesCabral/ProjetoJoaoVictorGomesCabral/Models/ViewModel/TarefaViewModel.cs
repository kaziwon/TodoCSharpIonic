using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjetoJoaoVictorGomesCabral.Models.ViewModel
{
    public class TarefaViewModel
    {
        public TarefaViewModel(Tarefa tarefa)
        {
            ID = tarefa.ID;
            Titulo = tarefa.Titulo;
            Descricao = tarefa.Descricao;

            if (tarefa.DataConclusao.HasValue)
                DataConclusao = tarefa.DataConclusao;

            if (tarefa.DataDelecao.HasValue)
                DataDelecao = tarefa.DataDelecao;

        }

        [JsonProperty("id")]
        public int ID { get; set; }

        [JsonProperty("titulo")]
        public string Titulo { get; set; }
        [JsonProperty("descricao")]
        public string Descricao { get; set; }

        [JsonProperty("dataConclusao")]
        public DateTime? DataConclusao { get; set; }

        [JsonProperty("dataDelecao")]
        public DateTime? DataDelecao { get; set; }


    }
}