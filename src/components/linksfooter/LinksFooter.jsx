import Image from 'next/image'
import Logo from '../../../public/img/Logo.svg'
import Link from 'next/link'

export default function LinksFooter() {

  return (

    <div className="logo">
      <Image src={Logo} alt="AluraGeek" />
      <Link href="#"><a>Quem somos nós</a></Link>
      <Link href="#"><a>Política de privacidade</a></Link>
      <Link href="#"><a>Programa de fidelidade</a></Link>
      <Link href="#"><a>Nossas lojas</a></Link>
      <Link href="#"><a>Quero ser franqueado</a></Link>
      <Link href="#"><a>Anuncie aqui</a></Link>
    </div>

  )
}