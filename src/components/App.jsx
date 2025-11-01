import { useState } from 'react';
import '../styles/App.css';

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
            <button>+</button>
          </div>
        </div>
      </header>

      <div className="listaItens">
        
      </div>
    </div>
  )
}

export default App
