using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ProjetoJoaoVictorGomesCabral.Models.ViewModel
{
    public class CadastrarEditarTarefaViewModel
    {
        [Required(ErrorMessage = "Escreva um titulo!")]
        public string Titulo { get; set; }

        [Required(ErrorMessage = "Escreva uma descrição!")]
        public string Descricao { get; set; }


        public Tarefa ToTarefa() => new Tarefa { Titulo = Titulo, Descricao = Descricao};

    }
}