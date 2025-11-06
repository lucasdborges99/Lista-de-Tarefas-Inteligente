import App from "./App";
import '../styles/Filtro.css';

function Filtro({selectFiltro, setSelectFiltro}){

    return(
        <>
            <div className="filtro">
                <select value={selectFiltro}>
                    <option value="" hidden>Filtrar por:</option>
                    <option value="trabalho">Trabalho</option>
                    <option value="pessoal">Pessoal</option>
                    <option value="estudos">Estudos</option>
                    <option value="casa">Casa</option>
                    <option value="lazer">Lazer</option>
                    <option value="financas">Finanças</option>
                    <option value="projetos">Projetos</option>
                </select>
            </div>
        </>
    )
}

export default Filtro;