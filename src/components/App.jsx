import { useState } from 'react';
import '../styles/App.css';

function App() { 
  const[input, setInput] = useState('');
  const[listaDeTarefas, setListaDeTarefas] = useState([]);

  function mudancaInput(mudanca){     //pega o evento mandado automaticamente pelo onChange do input, o .target identifica qual
    setInput(mudanca.target.value);   //elemento foi mudado e o .value pega o valor atual*/
  }                                  

  function addTarefaNaLista(valorTarefa){      
    const novaTarefa = 
    {                                                    //cria um objeto com id e o valor do input que sera o texto da tarefa
      id: Date.now(),                                    //da um id unico
      texto: valorTarefa,                                //texto da tarefa
      concluido: false                                   //status dela
    };                                                   //pega a lista nova, deixa ela como tudo que ja tinha na listaDeTarefas(usando
    let novaLista = [...listaDeTarefas, novaTarefa];     //os ...) mais o valor do input, depois atualiza o useState passando a novaLista
    setListaDeTarefas(novaLista);                        //como parametro
  }

  function removerTarefaDaLista(idRemocao){                                         //pega a funcao da lista de tarefas, no parametro(que
    setListaDeTarefas(listaDeTarefas.filter(tarefa => tarefa.id !== idRemocao));    //sera o novo useState) ele filtra para que só aparecam
  }                                                                                 //as tarefas cujo id são diferentes do idRemocao, que é o id que esta sendo passado

  function marcarConcluida(statusTarefa){
    if(statusTarefa === true){
      return{... tarefa, concluido = !}
    }
    else if(statusTarefa === false){
      tarefa.concluido = true;
    }
  }


  return(
    
      <div className="container">
        <header>
          <div className="titulo">
            <h1>Lista de Tarefas Inteligente</h1>
          </div>

          <div className="entradaTarefa">
            <div className="inputTarefa">
              <input type="text"  placeholder='Digite sua tarefa...' value={input} onChange={mudancaInput}/>
            </div>
            <div className="btnAddTarefa">
              <button onClick={() => addTarefaNaLista(input)}>+</button>
            </div>
          </div>
        </header>

        <div className="listaItens">
          {listaDeTarefas.map((tarefa) => {
            return(
              <div key={tarefa.id} className={`item ${concluido ? 'concluido' : ''}`}>
                <div className="btnMarcarConcluida">
                  <button onClick={() => marcarConcluida(tarefa.concluido)}></button>
                </div>
                <div className="textoTarefa">
                  <p>{tarefa.texto}</p>
                </div>
                <div className="btnExcluir" onClick={() => removerTarefaDaLista(tarefa.id)}>
                  <button>🗑️</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

  )
}

export default App
