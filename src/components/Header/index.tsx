import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import styles from './styles.module.scss';

export function Header() { 
  const [isMenuShowing, setIsMenuShowing] = useState(false)

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="./marvel-logo.svg" alt="Logo da Marvel" />
        <img src="./logo.svg" alt="Logo do Spider-Man" />
        <nav className={isMenuShowing ? styles.activeNav : styles.nav}>
          <ul>
            <li>HOME</li>
            <li>SINOPSE</li>
            <li>ELENCO</li>
          </ul>
        </nav>
      </div>

      <div className={styles.menuHamburguer}>
          <Hamburger rounded toggled={isMenuShowing} toggle={setIsMenuShowing} />
        </div>
    </header>
  );
}