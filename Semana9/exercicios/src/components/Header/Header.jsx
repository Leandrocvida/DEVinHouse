import { logo } from '@images';

import styles from './Header.module.css';
import {  Link} from "react-router-dom";
export const Header = () => (
  <header className={styles.header}>
    <div className={styles.titleContainer}>
      <img src={logo} alt='Logo do restaurante' height={50} />
      <h1 className={styles.title}>Green Food</h1>
    </div>

    <nav>
      <ul className={styles.ul}>
        <li>
          <Link to ='/' className={styles.link}>Pratos Escolhidos</Link>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          
        </li>
      </ul>
    </nav>
  </header>
);
