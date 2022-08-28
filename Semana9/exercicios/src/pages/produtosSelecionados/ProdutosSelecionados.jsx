import { ListaCards } from "@components"
import { useProdSelec } from "@contexts"

export const ProdutosSelecionados = () => {
   const {produtosSelecionados} = useProdSelec()
    return(
        <>
        <h1>Produtos Selecionados</h1>
        <ListaCards produtos = {produtosSelecionados}/>
        </>

)

}