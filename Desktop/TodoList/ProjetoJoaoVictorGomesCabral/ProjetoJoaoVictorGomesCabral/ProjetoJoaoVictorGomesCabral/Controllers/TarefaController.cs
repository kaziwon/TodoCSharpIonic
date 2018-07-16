using ProjetoJoaoVictorGomesCabral.BO;
using ProjetoJoaoVictorGomesCabral.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ProjetoJoaoVictorGomesCabral.Controllers
{
    [EnableCors(origins: "http://localhost:8100", headers: "*", methods: "*")]
    public class TarefaController : ApiController
    {
        private TarefaBO _tarefaBo;
        public TarefaController()
        {
            _tarefaBo = new TarefaBO();
        }


        [HttpPost]
        [Route("tarefas")]
        public async Task<IHttpActionResult> Cadastrar(CadastrarEditarTarefaViewModel model)
        {
            var result = await _tarefaBo.Cadastrar(model.ToTarefa());
            return Created("Tarefa cadastrada!", result);
        }

        [HttpPut]
        [Route("tarefas/{id}")]
        public async Task<IHttpActionResult> Editar([FromUri]int id, [FromBody] CadastrarEditarTarefaViewModel model)
        {
            var tarefa = model.ToTarefa();
            tarefa.ID = id;
            var result = await _tarefaBo.Editar(tarefa);

            return Ok(await _tarefaBo.Editar(tarefa));

        }

        [HttpGet]
        [Route("tarefas")]
        public async Task<IHttpActionResult> Listar()
        {
            var x = await _tarefaBo.Listar();
            var y = x.Select(c => new TarefaViewModel(c)).ToList();

            return Ok(y);
        }

        [HttpGet]
        [Route("tarefas/{id}")]
        public async Task<IHttpActionResult> Buscar([FromUri]int id) => Ok(new TarefaViewModel(await _tarefaBo.Buscar(id)));

        [HttpDelete]
        [Route("tarefas/{id}")]
        public async Task<IHttpActionResult> Deletar([FromUri]int id) => Ok(await _tarefaBo.Deletar(id));

        [HttpPatch]
        [Route("tarefas/{id}")]
        public async Task<IHttpActionResult> Finalizar([FromUri]int id) => Ok(await _tarefaBo.Finalizar(id));















    }
}
