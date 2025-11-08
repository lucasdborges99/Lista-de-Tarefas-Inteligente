import { useRef } from "react";
import '../styles/Tarefa.css';

function Tarefa({
    listaDeTarefas,
    removerTarefaDaLista,
    marcarTarefaConcluida,
    mudancaEdicao,
    mudarBotao,
    verificarEdicao})
{
    

    //! MUDA A COR DA BARRA LATERAL DE CATEGORIA
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
        

    //! MUDA O TEXTO DA BARRA LATERAL DE CATEGORIA
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
                        {verificarEdicao(tarefa)}
                    </div>
                    <div className="btnExcluirEditar">
                        <button onClick={() => mudancaEdicao(tarefa.id)} className="editar" >{mudarBotao(tarefa.id)}</button>
                        <button  onClick={() => removerTarefaDaLista(tarefa.id)} className="excluir">🗑️</button>
                    </div>
                </div>
            ))}
        </>
    );    
}

export default Tarefa;