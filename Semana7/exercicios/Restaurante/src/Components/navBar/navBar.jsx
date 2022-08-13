import logo from "../../assets/img/acdd8742044742039e9025094c026d9a.png";
import styles from "./NavBar.module.css";

    

export function Navbar() {
  return (
    <header className={styles.navBarContainer}>
      <img src={logo} alt="logo da empresa" />
      <h1>Pizza Di Pepe</h1>
      <ul>
        <li>
          <h2>Cardápio</h2>
        </li>
      </ul>
    </header>
  );
}
