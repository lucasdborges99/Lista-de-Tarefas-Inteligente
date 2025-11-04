import { useState } from 'react';
import '../styles/App.css';
import InputTarefa from './InputTarefa';
import ListaItens from './ListaItens';
import { use } from 'react';

function App() { 
  const[input, setInput] = useState('');
  const[listaDeTarefas, setListaDeTarefas] = useState([]);
  const[select, setSelect] = useState('');
  const[catColor, setCatColor] = useState('black');

  function mudancaInput(mudanca){     //pega o evento mandado automaticamente pelo onChange do input, o .target identifica qual
  setInput(mudanca.target.value);     //elemento foi mudado e o .value pega o valor atual*/
  } 

  function addTarefaNaLista(valorTarefa, valorCategoria){  
    if(valorTarefa.trim() === '' || valorCategoria === ''){
      alert("Digite alguma tarefa e selecione uma categoria!");
      return;
    }    

    const novaTarefa = 
    {                                                    //cria um objeto com id e o valor do input que sera o texto da tarefa
    id: Date.now(),                                      //da um id unico
    texto: valorTarefa,                                  //texto da tarefa
    concluido: false,
    categoria: valorCategoria                            //status dela
    };                                                   //pega a lista nova, deixa ela como tudo que ja tinha na listaDeTarefas(usando
    let novaLista = [...listaDeTarefas, novaTarefa];     //os ...) mais o valor do input, depois atualiza o useState passando a novaLista
    setListaDeTarefas(novaLista);                        //como parametro
    setInput('');                                        //limpa o input
  }


  function removerTarefaDaLista(idTarefa){                                         //pega a funcao da lista de tarefas, no parametro(que
    setListaDeTarefas(listaDeTarefas.filter(tarefa => tarefa.id !== idTarefa));    //sera o novo useState) ele filtra para que só aparecam
  }                                                                                 //as tarefas cujo id são diferentes do idRemocao, que é o id que esta sendo passado

  function marcarTarefaConcluida(idTarefa){
    setListaDeTarefas(lista => lista.map(tarefa => 
      tarefa.id === idTarefa ? {... tarefa, concluido: !tarefa.concluido} : tarefa
    ));
  }

  function mudancaSelect(mudanca){
    setSelect(mudanca.target.value);

    switch(mudanca.target.value){
      case 'trabalho':
        setCatColor('rgb(35, 35, 204)');
        break;
      case 'pessoal':
        setCatColor('red');
        break;
      case 'estudos':
        setCatColor('rgb(218, 186, 7)');
        break;
      case 'casa':
        setCatColor('rgb(100, 44, 7)');
        break;
      case 'lazer':
        setCatColor('orangered');
        break;
      case 'financas':
        setCatColor('green');
        break;
      case 'projetos':
        setCatColor('rgb(47, 167, 155)');
        break;
      default:
        setCatColor('black');

    }
  }

  function mudarCorEtiqueta(){

  }

  return(
      <div className='container'>
        <InputTarefa input={input} mudancaInput={mudancaInput} addTarefaNaLista={addTarefaNaLista} select={select} mudancaSelect={mudancaSelect} catColor={catColor}/>
        <ListaItens listaDeTarefas={listaDeTarefas} removerTarefaDaLista={removerTarefaDaLista} marcarTarefaConcluida={marcarTarefaConcluida}/>
      </div> 

  );
}

export default App
