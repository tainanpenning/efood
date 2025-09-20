import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram-logo.png'
import facebook from '../../assets/images/facebook-logo.png'
import twitter from '../../assets/images/twitter-logo.png'
import { Disclaimer, FooterContainer, Link, Links, Logo } from './styles'

export const Footer = () => (
  <FooterContainer>
    <Logo src={logo} alt="" />
    <Links>
      <Link href="#">
        <img src={instagram} alt="" />
      </Link>
      <Link href="#">
        <img src={facebook} alt="" />
      </Link>
      <Link href="#">
        <img src={twitter} alt="" />
      </Link>
    </Links>
    <Disclaimer>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Disclaimer>
  </FooterContainer>
)
