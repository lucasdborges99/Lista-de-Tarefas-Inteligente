import ItemTarefa from "./ItemTarefa";

function ListaItens({listaDeTarefas, removerTarefaDaLista, marcarTarefaConcluida}){
    return(
        <div className="listaItens">
            <ItemTarefa listaDeTarefas={listaDeTarefas} removerTarefaDaLista={removerTarefaDaLista} marcarTarefaConcluida={marcarTarefaConcluida}/>
        </div>
    );
}

export default ListaItens;