import { FiPlay } from "react-icons/fi";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.headerAndSidebar}>
          <Sidebar />
          <Header />
        </div>

        <div className={styles.centerContainer}>
          <img src="./spider-man.svg" alt="Miles Morales Name" />
          <button>
            ASSISTA AO TRAILER
            <FiPlay />
          </button>
        </div>
      </main>
    </>
  )
}