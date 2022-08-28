import {useState} from "react"
import PropTypes from 'prop-types';
import { ProdSelecContext } from "."


        
export const ProdSelecProvider = ({children}) => {
    const [produtosSelecionados,setProdutosSelecionados]= useState([]);
    const handleSelecionar = (prod) => {
        produtosSelecionados.includes(prod)
          ? setProdutosSelecionados(produtosSelecionados.filter((p) => p !== prod))
          : setProdutosSelecionados((pprodutosSelecionados) => [
              ...pprodutosSelecionados,
              prod,
            ]);};
    const isSelected = (id) => {
       return(
        produtosSelecionados.includes((p)=> p.id === id)
       ) 
    }
    return( 

    <ProdSelecContext.Provider value = {{produtosSelecionados, handleSelecionar, isSelected}}>
        {children}
    </ProdSelecContext.Provider>
)

}
ProdSelecProvider.propTypes = {
    children: PropTypes.node,
}