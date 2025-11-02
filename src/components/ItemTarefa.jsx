import App from "./App";

function ItemTarefa({listaDeTarefas, removerTarefaDaLista}){

    return(
        <>
            {listaDeTarefas.map((tarefa) => (
                <div  key={tarefa.id} className='item'>
                    <div className="btnMarcarConcluida">
                        <button></button>
                    </div>
                    <div className="textoTarefa">
                        <p>{tarefa.texto}</p>
                    </div>
                    <div className="btnExcluir" onClick={() => removerTarefaDaLista(tarefa.id)}>
                        <button>🗑️</button>
                    </div>
                </div>
            ))}
        </>
    );    
}

export default ItemTarefa;