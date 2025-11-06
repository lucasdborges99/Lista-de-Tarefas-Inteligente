import { useEffect, useState, useRef } from 'react';
import Header from './Header';
import ListaTarefas from './ListaTarefas';
import '../styles/App.css';

function App() { 
  const[input, setInput] = useState('');
  const[listaDeTarefas, setListaDeTarefas] = useState([]);
  const[select, setSelect] = useState('');
  const[catColor, setCatColor] = useState('black');
  const carregamentoIncial = useRef(true);  
  const[tarefaEmEdicao, setTarefaEmEdicao] = useState(null);
  const[selectFiltro, setSelectFiltro] = useState('');


  //! MUDA O ESTADO DO INPUT PARA O QUE FOR DIGITADO  (Header.jsx)
  function mudancaInput(mudanca){     
  setInput(mudanca.target.value);
  } 


  //! ADICIONA A TAREFA NA LISTA  (Header.jsx)
  function addTarefaNaLista(valorTarefa, valorCategoria){  
    if(valorTarefa.trim() === '' || valorCategoria === ''){
      alert("Digite alguma tarefa e selecione uma categoria!");
      return;
    }    

    if(tarefaEmEdicao !== null){
      alert("Termine de editar a tarefa antes de criar uma nova!");
      return;
    }

    const novaTarefa = 
    {                                                    
    id: Date.now(),                                      
    texto: valorTarefa,                                  
    concluido: false,
    categoria: valorCategoria                           
    };                                                  
    let novaLista = [...listaDeTarefas, novaTarefa];     
    setListaDeTarefas(novaLista);                       
    setSelect('')                                       
    setCatColor('black')                           
    setInput('');                                        
  }


  //! ADICIONA A TAREFA NA LISTA POR MEIO DO TECLADO  (Header.jsx)
  function addTarefaEnter(evento){                        
    if(evento.key === 'Enter'){
      evento.preventDefault();
      addTarefaNaLista(input, select);
    }
  }
  
  
  //! MUDA O ESTADO E A COR DO SELECT PARA O QUE FOR SELECIONADO  (Header.jsx)
  function mudancaSelect(mudanca){
    setSelect(mudanca.target.value);

    switch(mudanca.target.value){
      case 'trabalho':
        setCatColor('rgb(35, 35, 204)');
        break;
      case 'pessoal':
        setCatColor('crimson');
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


  //! REMOVE A TAREFA DA LISTA  (Tarefa.jsx)  
  function removerTarefaDaLista(idTarefa){                                         
    setListaDeTarefas(listaDeTarefas.filter(tarefa => tarefa.id !== idTarefa));    
  }                                                                                


  //! MARCA A TAREFA COMO CONCLUÍDA  (Tarefa.jsx)
  function marcarTarefaConcluida(idTarefa){
    setListaDeTarefas(lista => lista.map(tarefa => 
      tarefa.id === idTarefa ? {... tarefa, concluido: !tarefa.concluido} : tarefa
    ));
  }




  //! MUDA O ESTADO SE TEM ALGUMA TAREFA SENDO EDITADA  (Tarefa.jsx)
  function mudancaEdicao(idTarefa){
    setTarefaEmEdicao(valorAnterior => valorAnterior === idTarefa ? null : idTarefa)
  }


  //! ATUALIZA O TEXTO DA TAREFA EDITADA  (Tarefa.jsx)
  function editarTarefa(idTarefaEmEdicao, textoEditado){
    setListaDeTarefas(
      listaDeTarefas.map(tarefaEditada =>
        idTarefaEmEdicao === tarefaEditada.id ? {...tarefaEditada, texto: textoEditado} : tarefaEditada
      )
    )
  }


  //! MUDA O EMOJI DO BOTÃO DE EDIÇÃO (Tarefa.jsx)
  function mudarBotao(idTarefa){
    const tarefa = listaDeTarefas.find(t => t.id === idTarefa);
    if(!tarefa) return ''; 

    return tarefaEmEdicao === idTarefa ? '✅' : '✏️'
  }

  //! SALVA A TAREFA COM VALOR DEIXADO DEPOIS DA EDIÇÃO (Tarefa.jsx)
  function salvar(conteudoTarefa){
          conteudoTarefa.trim() === '' 
          ? (alert('A sua tarefa está vazia, digite algo!'), setTimeout(() => inputEdicao.current.focus(), 50))
          : setTimeout(() => setTarefaEmEdicao(null), 300)
      }


  //! SALVA A TAREFA COM O VALOR DEIXADO APÓS A EDIÇÃO POR MEIO DO TECLADO  (Tarefa.jsx) 
  function teclaSalvar(tecla, conteudoTarefa){
          if(tecla.key === 'Enter'){
              tecla.preventDefault();
              tecla.target.blur();
          }
      }


  //! CARREGA AS TAREFAS SALVAS NO LOCAL STORAGE  (App.jsx)
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('tarefas');        
    if(tarefasSalvas){
      try{
        const tarefasParseadas = JSON.parse(tarefasSalvas);
        setListaDeTarefas(tarefasParseadas);
      }
      catch(error){
        console.error('Erro ao carregar tarefas', error);
        localStorage.removeItem('tarefas');
      }
    }

    else{
      console.warn('localStorage não está disponível')
    }
  }, []);


  //! SALVA AS TAREFAS E SUAS MUDANÇAS  (App.jsx)
  useEffect(() => {
    if(carregamentoIncial.current){
      carregamentoIncial.current = false;
      return;
    }

    localStorage.setItem('tarefas', JSON.stringify(listaDeTarefas));      
  }, [listaDeTarefas]);


  //! CONTEÚDO HTML DA PÁGINA (App.jsx)
  return(
      <div className='container'>
        <Header 
        input = {input} 
        mudancaInput = {mudancaInput} 
        addTarefaNaLista = {addTarefaNaLista} 
        select = {select} 
        mudancaSelect = {mudancaSelect} 
        catColor = {catColor} 
        addTarefaEnter = {addTarefaEnter}
        selectFiltro = {selectFiltro}
        setSelectFiltro = {setSelectFiltro}
        />
        <ListaTarefas 
        listaDeTarefas = {listaDeTarefas} 
        removerTarefaDaLista = {removerTarefaDaLista} 
        marcarTarefaConcluida = {marcarTarefaConcluida} 
        mudancaEdicao = {mudancaEdicao}
        editarTarefa = {editarTarefa} 
        tarefaEmEdicao = {tarefaEmEdicao} 
        setTarefaEmEdicao = {setTarefaEmEdicao} 
        mudarBotao = {mudarBotao}
        salvar = {salvar}
        teclaSalvar= {teclaSalvar}
        />
      </div> 

  );
}

export default App
