import { useState } from 'react'
import '.././App.css'
import { requestFormReset } from 'react-dom'

function App() {

  return(
    <div className="container">

      <header>
        <div className="titulo">
          <h1>Lista de Tarefas Inteligente</h1>
        </div>

        <div className="entradaTarefa">
          <div className="inputTarefa">
            <input type="text"  placeholder='Digite sua tarefa...'/>
          </div>
          <div className="btnAddTarefa">
            <button>Adicionar</button>
          </div>
        </div>
      </header>

      <section>
        <div className="listaItens">

        </div>
      </section>
    </div>
  )
}

export default App
