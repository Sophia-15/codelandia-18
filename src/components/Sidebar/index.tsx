import { FiInstagram, FiTwitter, FiFacebook, FiSearch } from 'react-icons/fi';
import styles from './styles.module.scss';

export function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}> 
      <div className={styles.profileContainer}>
        <img src="https://github.com/iuricode.png" alt="Foto de perfil do Github" />
        <div className={styles.statusIndicatorContainer}>
          <div className={styles.statusIndicator} />
        </div>
      </div>

      <ul className={styles.socialMedias}>
        <li>
          <FiInstagram />
        </li>
        <li>
          <FiTwitter />
        </li>
        <li>
          <FiFacebook />
        </li>
      </ul>

      <FiSearch />
    </aside>
  );
}