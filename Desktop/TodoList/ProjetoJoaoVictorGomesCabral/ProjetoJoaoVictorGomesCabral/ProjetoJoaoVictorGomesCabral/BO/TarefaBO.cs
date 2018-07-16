
using ProjetoJoaoVictorGomesCabral.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoJoaoVictorGomesCabral.BO
{
    public class TarefaBO
    {
        private Contexto _db;
        public TarefaBO()
        {
            _db = new Contexto();
        }

        public async Task<Tarefa> Cadastrar(Tarefa tarefa)
        {
            _db.Tarefa.Add(tarefa);
            await _db.SaveChangesAsync();
            return tarefa;
        }

        public async Task<bool> Editar(Tarefa tarefa)
        {
            _db.Entry(tarefa).State = EntityState.Modified;
            await _db.SaveChangesAsync();
            return true;
        }

        public async Task<List<Tarefa>> Listar() => await _db.Tarefa.Where(a => a.DataDelecao == null).ToListAsync();
        
        public async Task<Tarefa> Buscar(int id) => await _db.Tarefa.FindAsync(id);
        
        public async Task<bool> Finalizar(int id)
        {
            var tarefa = await Buscar(id);
            if (tarefa != null)
            {
                tarefa.DataConclusao = DateTime.Now;
                return await Editar(tarefa);
            }
            return false;
        }

        public async Task<bool> Deletar(int id)
        {
            var tarefa = await Buscar(id);
            if (tarefa != null)
            {
                tarefa.DataDelecao = DateTime.Now;
                return await Editar(tarefa);
            }
            return false;
        }


    }
}