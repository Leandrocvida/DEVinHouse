import style from "./Footer.module.css";
export const Footer = () => {
return(
    <footer className = {style.footer} >
        <div>
            <h3>Contato:</h3>
            <p><span style={{fontWeight: "bold"}}>Telefone:</span> (48) 3232-2323</p>
        </div>
        <div>
            <h3>Endereço:</h3>
            <p> Av. Brasil 5678, Florianópolis, SC</p>
        </div>
        <div className={style.copyright}>
            <p>Site by Leandro Vida @2022</p>
        </div>

    </footer>
)

}