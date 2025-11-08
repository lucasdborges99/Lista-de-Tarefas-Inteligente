import Tarefa from "./Tarefa";
import "../styles/ListaTarefa.css";

function ListaTarefas({
  listaDeTarefas,
  removerTarefaDaLista,
  marcarTarefaConcluida,
  mudancaEdicao,
  mudarBotao,
  verificarEdicao,
}) {
  return (
    <div className="listaItens">
      <Tarefa
        listaDeTarefas={listaDeTarefas}
        removerTarefaDaLista={removerTarefaDaLista}
        marcarTarefaConcluida={marcarTarefaConcluida}
        mudancaEdicao={mudancaEdicao}
        mudarBotao={mudarBotao}
        verificarEdicao={verificarEdicao}
      />
    </div>
  );
}

export default ListaTarefas;
