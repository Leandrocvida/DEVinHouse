
import style from "./Card.module.css";
import PropTypes from 'prop-types';

export const Card = (produto) => {
    return (
        <li key={produto.id} className= {style.Card}>
            <img className={style.img} src={produto.img} alt={produto.nome} />
            <div className={style.div} >
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <p>{produto.preco}</p>
            <p>Tempo de preparo:{produto.tempo}</p>
            </div>
        </li>
    )
}

Card.propTypes = {
produto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    preco: PropTypes.string.isRequired,
    tempo: PropTypes.string.isRequired,
}).isRequired,

}