import { Link } from 'react-router'
import { FaShoppingCart } from 'react-icons/fa'
import { IoArrowBack } from 'react-icons/io5'
import logo from '../../assets/images/logo.png'
import heroBackground from '../../assets/images/hero-background.png'
import { Cart, HeaderContainer, Logo, Title } from './styles'
import { Container } from '../../styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

type Props = {
  openSideBar: () => void
}

export const Header = ({ openSideBar }: Props) => {
  const items = useSelector((state: RootState) => state.cart.items)

  return (
    <HeaderContainer style={{ backgroundImage: `url(${heroBackground})` }}>
      <Container>
        <Link to={'/'}>
          <Title>
            <IoArrowBack />
            Restaurantes
          </Title>
        </Link>
        <Logo src={logo} alt="EFood" />
        <Cart onClick={openSideBar}>
          {items.length} pedido(s)
          <FaShoppingCart />
        </Cart>
      </Container>
    </HeaderContainer>
  )
}
