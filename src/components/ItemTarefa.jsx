function ItemTarefa({listaDeTarefas, removerTarefaDaLista, marcarTarefaConcluida}){

    return(
        <>
            {listaDeTarefas.map((tarefa) => (
                <div  key={tarefa.id} className={tarefa.concluido ? 'item concluido' : 'item'}>
                    <div className="cat"></div>
                    <div className="btnMarcarConcluida">
                        <button onClick={() => marcarTarefaConcluida(tarefa.id)}></button>
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