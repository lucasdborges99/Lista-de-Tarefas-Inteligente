import Tarefa from "./Tarefa";
import '../styles/ListaTarefa.css'

function ListaTarefas({
    listaDeTarefas,
    removerTarefaDaLista,
    marcarTarefaConcluida,
    mudancaEdicao,
    mudarBotao,
    verificarEdicao,
    inputEdicao})
{
    return(
        <div className="listaItens">
            <Tarefa 
            listaDeTarefas={listaDeTarefas} 
            removerTarefaDaLista={removerTarefaDaLista} 
            marcarTarefaConcluida={marcarTarefaConcluida} 
            mudancaEdicao = {mudancaEdicao}  
            mudarBotao = {mudarBotao}
            verificarEdicao = {verificarEdicao}
            inputEdicao = {inputEdicao}
            />
        </div>
    );
}

export default ListaTarefas;