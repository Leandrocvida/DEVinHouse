import style from "./Section.module.css";
import { Card} from "../Card/Card.jsx";

export const Section = ({listaComidas, nomeDaSecao, listaSubsecao}) => {
    const comprimento= listaSubsecao.length;
    const naoTemSubsecao = comprimento === 0;

    return( 
    <section className={style.section}>
       <h2 className={style.h2}>{nomeDaSecao}</h2>
       
       {naoTemSubsecao  && (
        <ul className={style.ul}>
            {listaComidas.map((comida) => ( Card(comida)))}
        </ul>
        )
        
        } 

        {!naoTemSubsecao && (
            listaSubsecao.map((subItem) => {
               return (
                <>
                
                <h3 className={style.h3}>{subItem}</h3>
               <ul key={subItem} className={style.ul}>
                    
                    {listaComidas.filter(prato => prato.subsecao === subItem).map((comida) => (Card(comida)))};

                </ul>
                </>
                );
                 }
                )
            )
        }
    </section>)
}