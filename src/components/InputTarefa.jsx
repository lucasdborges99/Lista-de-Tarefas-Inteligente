function InputTarefa({input, mudancaInput, addTarefaNaLista, select, mudancaSelect, catColor, addTarefaEnter}){

    return(
        <header>
            <div className="titulo">
                <h1>Lista de Tarefas Inteligente</h1>
            </div>

            <div className="entradaTarefa">
                <div className="inputTarefa">
                    <input type="text"  placeholder='Digite sua tarefa...' value={input} onChange={mudancaInput} onKeyDown={addTarefaEnter}/>
                    <div className="categorias">
                        <select onChange={mudancaSelect} onKeyPress={addTarefaEnter} value={select} style={{color: catColor}}>
                            <option value="" hidden>Categoria</option>
                            <option className="trabalho" value="trabalho">Trabalho</option>
                            <option className="pessoal" value="pessoal">Pessoal</option>
                            <option className="estudos" value="estudos">Estudos</option>
                            <option className="casa" value="casa">Casa</option>
                            <option className="lazer" value="lazer">Lazer</option>
                            <option className="financas"value="financas">Finanças</option>
                            <option className="projetos" value="projetos">Projetos</option>
                        </select>
                    </div>
                </div>
                <div className="btnAddTarefa">
                    <button onClick={() => addTarefaNaLista(input, select)}>+</button>
                </div>
            </div>
        </header>
    );
}

export default InputTarefa;