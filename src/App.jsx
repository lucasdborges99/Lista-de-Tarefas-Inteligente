import { useEffect, useState, useRef } from "react";
import Header from "./components/Header";
import ListaTarefas from "./components/ListaTarefas";
import { useTarefas } from "./hooks/useTarefas";
import "./styles/App.css";

function App() {
  const {
    mudancaInput,
    addTarefaNaLista,
    addTarefaEnter,
    mudancaSelectCategoria,
    removerTarefaDaLista,
    marcarTarefaConcluida,
    mudancaEdicao,
    editarTarefa,
    mudarBotao,
    salvar,
    teclaSalvar,
    input,
    setInput,
    listaDeTarefas,
    setListaDeTarefas,
    select,
    setSelect,
    catColor,
    setCatColor,
    carregamentoIncial,
    tarefaEmEdicao,
    setTarefaEmEdicao,
    inputTarefa,
    inputEdicao
  } = useTarefas();


  function verificarEdicao(tarefa) {
        return tarefaEmEdicao === tarefa.id ? (
        <input
            type="text"
            value={tarefa.texto}
            ref={inputEdicao}
            autoFocus={true}
            onChange={(texto) => editarTarefa(tarefa.id, texto.target.value)}
            onKeyDown={(tecla) => teclaSalvar(tecla, tarefa.texto)}
        />
        ) : (
            <p>{tarefa.texto}</p>
        );
    }

    
  return (
    <div className="container">
      <Header
        input={input}
        mudancaInput={mudancaInput}
        addTarefaNaLista={addTarefaNaLista}
        select={select}
        mudancaSelectCategoria={mudancaSelectCategoria}
        catColor={catColor}
        addTarefaEnter={addTarefaEnter}
        inputTarefa={inputTarefa}
      />
      <ListaTarefas
        listaDeTarefas={listaDeTarefas}
        removerTarefaDaLista={removerTarefaDaLista}
        marcarTarefaConcluida={marcarTarefaConcluida}
        mudancaEdicao={mudancaEdicao}
        editarTarefa={editarTarefa}
        tarefaEmEdicao={tarefaEmEdicao}
        setTarefaEmEdicao={setTarefaEmEdicao}
        mudarBotao={mudarBotao}
        salvar={salvar}
        teclaSalvar={teclaSalvar}
        verificarEdicao={verificarEdicao}
      />
    </div>
  );
}

export default App;
