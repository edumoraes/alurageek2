import Link from 'next/link'
import { BsArrowRight } from "react-icons/bs";
import styles from './GridProdutos.module.css'


export default function GridProdutos(props) {
  
  return (
    <>
    
    <div className='container'>
      
      <div className={styles.containerGrid}>

        <div className={styles.tituloSecao}>
          <h2 className='titulo-h2'>Star Wars</h2>
          <Link href="#">
            <a className='link'>Ver tudo<BsArrowRight /></a>
          </Link>
        </div>

        <div className={styles.produtos}>

          <div className={styles.cardProduto}>
            <img src="/img/1-star-wars.jpg" className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>R$ 32,00</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src="/img/2-star-wars.jpg" className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>R$ 32,00</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src="/img/3-star-wars.jpg" className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>R$ 32,00</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src="/img/4-star-wars.jpg" className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>R$ 32,00</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src="/img/5-star-wars.jpg" className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>R$ 32,00</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src="/img/6-star-wars.jpg" className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>R$ 32,00</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

        </div>

      </div>

      <div className={styles.containerGrid}>

        <div className={styles.tituloSecao}>
          <h2 className='titulo-h2'>Consoles</h2>
          <Link href="#">
            <a className='link'>Ver tudo<BsArrowRight /></a>
          </Link>
        </div>

        <div className={styles.produtos}>

          <div className={styles.cardProduto}>
            <img src="/img/1-consoles.jpg" className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src="/img/2-consoles.jpg" className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src="/img/3-consoles.jpg" className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src="/img/4-consoles.jpg" className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src="/img/5-consoles.jpg" className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src="/img/6-consoles.jpg" className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>
          
        </div>

      </div>

      <div className={styles.containerGrid}>

        <div className={styles.tituloSecao}>
          <h2 className='titulo-h2'>Diversos</h2>
          <Link href="#">
            <a className='link'>Ver tudo<BsArrowRight /></a>
          </Link>
        </div>

        <div className={styles.produtos}>

          <div className={styles.cardProduto}>
            <img src="/img/1-diversos.png" className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src="/img/2-diversos.png" className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src="/img/3-diversos.png" className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src="/img/4-diversos.png" className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src="/img/5-diversos.png" className={styles.imageProduto} /> {/*Adiconar parametros*/}
            <h4>Nome do Produto</h4> {/*Adiconar parametros*/}
            <h3>Preço do produto</h3> {/*Adiconar parametros*/}
            <Link href="#"><a className='link'>Ver produto</a></Link> {/*Adiconar parametros*/}
          </div>

          <div className={styles.cardProduto}>
            <img src="/img/6-diversos.png" className={styles.imageProduto} /> {/*Adiconar parametros*/}
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