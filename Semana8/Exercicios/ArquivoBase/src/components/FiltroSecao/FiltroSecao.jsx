
import styles from "./FiltroSecao.module.css";


export const FiltroSecao = ({arraySecoes, onSelecionarSecao}) => {

    return(
        <ul className ={styles.ul} >
            {arraySecoes.map((secao)=>{
                return(
                    <li key={`filter${secao.nome}`} className ={styles.li}>
                        <button className={styles.button} onClick ={()=> onSelecionarSecao(secao.nome)} >{secao.nome}</button>
                    </li>
                )
            })}
        </ul>
    )
}