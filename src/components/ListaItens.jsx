import App from "./App"
import ItemTarefa from "./ItemTarefa";

function ListaItens({listaDeTarefas, removerTarefaDaLista}){
    return(
        <div className="listaItens">
            <ItemTarefa listaDeTarefas={listaDeTarefas} removerTarefaDaLista={removerTarefaDaLista}/>
        </div>
    );
}

export default ListaItens;