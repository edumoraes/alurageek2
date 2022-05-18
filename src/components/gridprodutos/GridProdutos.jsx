import Link from 'next/link'
import { BsArrowRight } from "react-icons/bs";
import styles from './GridProdutos.module.css'


export default function GridProdutos(props) {
  
  return (
    <>
    
    <div className='container'>
      
      <div className={styles.containerGrid}>

        <div className={styles.tituloSecao}>
          <h2 className='titulo-h2'>Nome da seção</h2>
          <Link href="#">
            <a className='link'>Ver tudo<BsArrowRight /></a>
          </Link>
        </div>

        <div className={styles.produtos}>

          <div className={styles.cardProduto}>
            <img src={props.src} className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src={props.src} className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src={props.src} className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src={props.src} className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src={props.src} className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src={props.src} className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

        </div>

      </div>

      <div className={styles.containerGrid}>

        <div className={styles.tituloSecao}>
          <h2 className='titulo-h2'>Nome da seção</h2>
          <Link href="#">
            <a className='link'>Ver tudo<BsArrowRight /></a>
          </Link>
        </div>

        <div className={styles.produtos}>

          <div className={styles.cardProduto}>
            <img src={props.src} className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src={props.src} className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src={props.src} className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src={props.src} className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src={props.src} className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src={props.src} className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>
          
        </div>

      </div>

      

    </div>
    
    </>
  ) 
}