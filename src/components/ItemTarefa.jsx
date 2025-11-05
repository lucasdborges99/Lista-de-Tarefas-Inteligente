import { use } from "react";
import { useRef } from "react";

function ItemTarefa({listaDeTarefas, removerTarefaDaLista, marcarTarefaConcluida, editarTarefa, tarefaEmEdicao, setTarefaEmEdicao, atualizarTextoEditado, mudarBotao}){
    const inputEdicao = useRef(null);    
    
    function mudarCorEtiqueta(categoria){
        switch(categoria){
            case 'trabalho': return 'cat trabalho';
            case 'pessoal' : return 'cat pessoal';
            case 'estudos' : return 'cat estudos';
            case 'casa' : return 'cat casa';
            case 'lazer' : return 'cat lazer';
            case 'financas' : return 'cat financas';
            case 'projetos' : return 'cat projetos';
            default: return;
        } 
    }
        
    function mudarTextoEtiqueta(categoria){
        switch(categoria){
            case 'trabalho': return 'Trabalho';
            case 'pessoal' : return 'Pessoal';
            case 'estudos' : return 'Estudos';
            case 'casa' : return 'Casa';
            case 'lazer' : return 'Lazer';
            case 'financas' : return 'Finanças';
            case 'projetos' : return 'Projetos';
            default: return;
        }   
    
    }

    function tarefaEdicao(statusEdicao){
        if(statusEdicao === true){
            
        }
    }

    return(
        <>
            {listaDeTarefas.map((tarefa) => (
                <div  key={tarefa.id} className={tarefa.concluido ? 'item concluido' : 'item'}>
                    <div className={mudarCorEtiqueta(tarefa.categoria)}>
                        <p style={{color: 'white'}}>{mudarTextoEtiqueta(tarefa.categoria)}</p>
                    </div>
                    <div className="btnMarcarConcluida">
                        <button onClick={() => marcarTarefaConcluida(tarefa.id)}></button>
                    </div>
                    <div className="textoTarefa">
                        {tarefaEmEdicao === tarefa.id ? (
                            <input type="text" value={tarefa.texto} 
                            ref={inputEdicao}
                            autoFocus={true}
                            onChange={(mudancaInputEdicao) => atualizarTextoEditado(tarefa.id, mudancaInputEdicao.target.value)}
                            onBlur={tarefa.texto.trim() === '' 
                                    ? () => {alert('A sua tarefa está vazia, digite algo!'); setTimeout(() => inputEdicao.current.focus(), 50)}
                                    : () => setTimeout(() => setTarefaEmEdicao(null), 300)}
                            className="inputEdicao"/>
                        ) : (
                            <p>{tarefa.texto}</p>
                        )}
                    </div>
                    <div className="btnExcluirEditar">
                        <button onClick={() => editarTarefa(tarefa.id)} className="editar" >{mudarBotao(tarefa.id)}</button>
                        <button  onClick={() => removerTarefaDaLista(tarefa.id)} className="excluir">🗑️</button>
                    </div>
                </div>
            ))}
        </>
    );    
}

export default ItemTarefa;