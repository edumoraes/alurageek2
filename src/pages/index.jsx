import Head from 'next/head'
import Copyright from '../components/copyright/Copyright'
import Formulario from '../components/formulario/Formulario'
import GridProdutos from '../components/gridprodutos/GridProdutos'
import LinksFooter from '../components/linksfooter/LinksFooter'
import Navbar from '../components/navbar/Navbar'
import Slider from '../components/slider/Slider'


import "swiper/css/bundle";



export default function Home() {
  return(

    <>
      <Head>
        <title>AluraGeek</title>
        <meta name='Loja AluraGeek' content='A maior loja de artigos Geeks do Brasil!' />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css" />
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
