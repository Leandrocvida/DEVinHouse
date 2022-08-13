import styles from "./Header.module.css";

export const Header = ()=>{
    return(
        <header className={styles.Header}>

        <h1>DevInbras</h1>
        <nav>
            <ul className={styles.ul}>
                <li>Inicio</li>
                <li>Produto</li>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
        </nav>
        <button>Sair</button>
        </header>
    )
}