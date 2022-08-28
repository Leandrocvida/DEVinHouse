import {useState} from "react"
import PropTypes from 'prop-types';
import { ProdSelecContext } from "."


        
export const ProdSelecProvider = ({children}) => {
    const [produtosSelecionados,setProdutosSelecionados]= useState([]);
    
    const isSelected = (id) => {
        return produtosSelecionados.some((item) => item.id === id);
      };
    
      const handleSelecionar = (prod) => {
        if (isSelected(prod.id)) {
          setProdutosSelecionados(produtosSelecionados.filter((item) => item.id !== prod.id));
          return;
        }
    
        setProdutosSelecionados([...produtosSelecionados, prod]);
      };

    return( 

    <ProdSelecContext.Provider value = {{produtosSelecionados, handleSelecionar, isSelected}}>
        {children}
    </ProdSelecContext.Provider>
)

}
ProdSelecProvider.propTypes = {
    children: PropTypes.node,
}