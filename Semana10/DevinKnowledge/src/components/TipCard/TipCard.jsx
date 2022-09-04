import PropTypes from 'prop-types';
export const TipCard = ({dica}) => {
  return (
    <li className="card" >
      <h2 className="card-h2" >
        {dica.titulo}
      </h2>
      <h3>{dica.linguagem}</h3>
      <h3>{dica.categoria}</h3>
      <p>
       {dica.descricao}
      </p>
      {dica.video && (
        <a
        href={dica.video}
        target="_blank"
        className="botaoVideo"
      >
        <i className="fa-solid fa-video"></i>
      </a>
      )
        
      }
        
      <button className="botaoEditarCard" onClick={console.log("editar")}>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
      <button onClick={console.log("apagar")} className="botaoApagarCard">
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </li>
  );
};
TipCard.propTypes = {
  dica: PropTypes.shape({
    id: PropTypes.string,
    titulo: PropTypes.string.isRequired,
    linguagem: PropTypes.string.isRequired,
    categoria: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    video: PropTypes.string,
  }),}