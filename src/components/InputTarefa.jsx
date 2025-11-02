import App from "./App";

function InputTarefa({input, mudancaInput, addTarefaNaLista}){

    return(
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
    );
}

export default InputTarefa;