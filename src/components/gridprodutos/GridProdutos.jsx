import Link from 'next/link'
import { BsArrowRight } from "react-icons/bs";
import styles from './GridProdutos.module.css'


export default function GridProdutos(props) {
  
  return (
    <div className="container">
      <h2>Nome da seção</h2>
      <button>Ver tudo<BsArrowRight /></button>
      <div className="card">
        <img src={props.src} className={styles.cardImage} /> {/*Adiconar parametros*/}
        <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
        <h3>Preço do produto</h3> {/*Adiconar parametros*/}
        <Link href="#"><a>Ver produto</a></Link> {/*Adiconar parametros*/}
      </div>
    </div>
  ) 
}