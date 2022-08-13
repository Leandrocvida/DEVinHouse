import {produtos} from "module";
import style from "./Card.module.css";
import PropTypes from 'prop-types';

export const Card = (produto) => {
    return (
        <div key={produto.id} className= {style.Card}>
            <img src={produto.img} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>{produto.descricao}</p>
            <p>{produto.preco}</p>
            <p>{produto.tempo}</p>
        </div>
    )
}

Card.PropTypes = {
produto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img:PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    preco: PropTypes.string.isRequired,
    tempo: PropTypes.string.isRequired,
}
)


}