import { FaRegTrashAlt } from 'react-icons/fa'
import {
  Button,
  CartAbout,
  CartContainer,
  CartContent,
  CartEnd,
  CartItem,
  Icon,
  Image,
  Price,
  Title
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { removeItem } from '../../store/cartReducer'

type Props = {
  closeSideBar: () => void
  openAddress: () => void
}

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const Cart = ({ closeSideBar, openAddress }: Props) => {
  const items = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()

  const getFullPrice = () => {
    return items.reduce((acc, total) => {
      return (acc += total.price)
    }, 0)
  }

  return (
    <CartContainer>
      <Title>Carrinho</Title>
      <CartContent>
        {items.map((item, index) => (
          <CartItem key={index}>
            <Icon onClick={() => dispatch(removeItem(index))}>
              <FaRegTrashAlt size={16} />
            </Icon>
            <Image src={item.photo} alt="" />
            <CartAbout>
              <Title>{item.name}</Title>
              <Price>{formatPrice(item.price)}</Price>
            </CartAbout>
          </CartItem>
        ))}
      </CartContent>
      {items.length >= 1 && (
        <CartEnd>
          <Title>Valor total:</Title>
          <Price>{formatPrice(getFullPrice())}</Price>
        </CartEnd>
      )}
      {items.length === 0 ? (
        <Button>Adicione um item antes de prosseguir</Button>
      ) : (
        <Button onClick={openAddress} type="button">
          Continuar com a entrega
        </Button>
      )}
      <Button onClick={closeSideBar} type="button">
        Voltar
      </Button>
    </CartContainer>
  )
}
