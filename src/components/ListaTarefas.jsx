import Tarefa from "./Tarefa";
import '../styles/ListaTarefa.css'

function ListaTarefas({
    listaDeTarefas,
    removerTarefaDaLista,
    marcarTarefaConcluida,
    mudancaEdicao,
    editarTarefa,
    tarefaEmEdicao,
    setTarefaEmEdicao,
    mudarBotao,
    salvar,
    teclaSalvar})
{
    return(
        <div className="listaItens">
            <Tarefa 
            listaDeTarefas={listaDeTarefas} 
            removerTarefaDaLista={removerTarefaDaLista} 
            marcarTarefaConcluida={marcarTarefaConcluida} 
            mudancaEdicao = {mudancaEdicao} 
            editarTarefa = {editarTarefa}
            tarefaEmEdicao = {tarefaEmEdicao} 
            setTarefaEmEdicao = {setTarefaEmEdicao} 
            mudarBotao = {mudarBotao}
            salvar = {salvar}
            teclaSalvar = {teclaSalvar}
            />
        </div>
    );
}

export default ListaTarefas;