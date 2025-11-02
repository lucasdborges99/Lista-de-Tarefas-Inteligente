function InputTarefa({input, mudancaInput, addTarefaNaLista}){

    return(
        <header>
            <div className="titulo">
                <h1>Lista de Tarefas Inteligente</h1>
            </div>

            <div className="entradaTarefa">
                <div className="inputTarefa">
                    <input type="text"  placeholder='Digite sua tarefa...' value={input} onChange={mudancaInput}/>
                <div className="categorias">
                    <select>
                        <option value="" hidden selected>Categoria</option>
                        <option className="trabalho">Trabalho</option>
                        <option className="pessoal">Pessoal</option>
                        <option className="estudos">Estudos</option>
                        <option className="casa">Casa</option>
                        <option className="lazer">Lazer</option>
                        <option className="financas">Finanças</option>
                        <option className="projetos">Projetos</option>
                    </select>
                </div>
                </div>
                <div className="btnAddTarefa">
                    <button onClick={() => addTarefaNaLista(input)}>+</button>
                </div>
            </div>
        </header>
    );
}

export default InputTarefa;