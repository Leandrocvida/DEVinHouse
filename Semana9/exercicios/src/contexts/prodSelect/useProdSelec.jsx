import { useContext } from "react";
import { ProdSelecContext } from ".";

export const useProdSelec = () =>{
    
        const context = useContext(ProdSelecContext)
    return context
}