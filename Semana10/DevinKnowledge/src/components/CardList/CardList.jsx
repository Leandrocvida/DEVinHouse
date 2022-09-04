import { TipCard } from "@components"
import PropTypes from 'prop-types';



export const CardList = ({children}) =>{
       
    return( 
    <ul className="cardContainer"> 
        {children}
    </ul>
    )
}
CardList.propTypes = {
    children: PropTypes.node.isRequired,
}