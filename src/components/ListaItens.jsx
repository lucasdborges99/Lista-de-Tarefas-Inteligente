import ItemTarefa from "./ItemTarefa";

function ListaItens({listaDeTarefas, removerTarefaDaLista, marcarTarefaConcluida, editarTarefa}){
    return(
        <div className="listaItens">
            <ItemTarefa listaDeTarefas={listaDeTarefas} removerTarefaDaLista={removerTarefaDaLista} marcarTarefaConcluida={marcarTarefaConcluida} /*editarTarefa={editarTarefa}*//>
        </div>
    );
}

export default ListaItens;