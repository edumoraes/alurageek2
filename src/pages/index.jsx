import Head from 'next/head'
import Copyright from '../components/Copyright'
import Formulario from '../components/Formulario'
import GridProdutos from '../components/GridProdutos'
import LinksFooter from '../components/LinksFooter'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'


export default function Home() {
  return(

    <>
      <Head>
        <title>AluraGeek</title>
        <meta name='Loja AluraGeek' content='A maior loja de artigos Geeks do Brasil!' />
      </Head>
      <Navbar />
      <main>
        <hero>
          <Slider />

        </hero>
        
        <section>
          <GridProdutos src="https://plugcitarios.com/blog/wp-content/uploads/2012/04/Produtos-Geek-01.jpg" />
        </section>

      </main>

      <footer>
        <LinksFooter />
        <Formulario />
        <Copyright />
      </footer>
    </>
  
  )
}
