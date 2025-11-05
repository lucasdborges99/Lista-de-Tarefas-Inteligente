function ItemTarefa({listaDeTarefas, removerTarefaDaLista, marcarTarefaConcluida}){

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