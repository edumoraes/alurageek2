import Image from 'next/image'
import Logo from '../../../public/img/Logo.svg'
import { BsSearch } from "react-icons/bs";
import styles from './Navbar.module.css'
import Link from 'next/link';


export default function Cabecalho() {
  return (

     <header className={styles.header}>
      <nav className="container">
        
        <div className={styles.containerNav}>
          <div className={styles.containerLogo}>
            <Link href="#">
              <a>
                <img src="/img/Logo.svg" alt="AluraGeek" className={styles.logo} />
              </a>
            </Link>
          </div>
          
          <div className={styles.containerInput}>
            <button className="button-secundario" >Login</button>
            <input className={styles.inputPesquisa} type="text" placeholder='O que deseja encontrar?' />
          </div>

        </div>

      </nav>
    </header>
  )
}