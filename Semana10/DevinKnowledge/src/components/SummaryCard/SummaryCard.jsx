import PropTypes from 'prop-types';

export const SummaryCard = ({title, count} ) =>{
    return(
    <button id="botaoTotal" className="display">
    <h2>{title}</h2>
    <p>{count}</p>
  </button>)
}
SummaryCard.propTypes = {
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
}