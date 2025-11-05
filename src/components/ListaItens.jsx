import ItemTarefa from "./ItemTarefa";

function ListaItens({listaDeTarefas, removerTarefaDaLista, marcarTarefaConcluida, editarTarefa, tarefaEmEdicao, setTarefaEmEdicao, atualizarTextoEditado, mudarBotao}){
    return(
        <div className="listaItens">
            <ItemTarefa 
            listaDeTarefas={listaDeTarefas} 
            removerTarefaDaLista={removerTarefaDaLista} 
            marcarTarefaConcluida={marcarTarefaConcluida} 
            editarTarefa={editarTarefa} 
            tarefaEmEdicao={tarefaEmEdicao} 
            setTarefaEmEdicao={setTarefaEmEdicao} 
            atualizarTextoEditado={atualizarTextoEditado}
            mudarBotao = {mudarBotao}
            />
        </div>
    );
}

export default ListaItens;