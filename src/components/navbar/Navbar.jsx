import Image from 'next/image'
import Logo from '../../../public/img/Logo.svg'
import { BsSearch } from "react-icons/bs";
import styles from './Navbar.module.css'


export default function Cabecalho() {
  return (

     <header className={styles.header}>
      <nav className="container">
      <div className={styles.containerNav}>
        
        <div>
          <img src="/img/Logo.svg" alt="AluraGeek" className={styles.logo} />
        </div>
        
        <div className="pesquisa">
          <input className={styles.esconder} type="text" />
          <button><BsSearch /></button>
        </div>
        
        <div className="login">
          <button className='button-secundario'>Login</button>
        </div>

      </div>
      </nav>
    </header>
  )
}