import "../styles/filtro.css";

function Filtro() {
  return (
    <select className="filtro">
      <opition className="trabalho" value='trabalho'>Trabalho</opition>
      <opition className="pessoal">Pessoal</opition>
      <opition className="estudos">Estudos</opition>
      <opition className="casa">Casa</opition>
      <opition className="lazer">Lazer</opition>
      <opition className="financas">Finanças</opition>
      <opition className="projetos">Projetos</opition>
    </select>
  );
}

export default Filtro;
