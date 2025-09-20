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

export const Cart = ({ closeSideBar, openAddress }: Props) => {
  const items = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()

  return (
    <CartContainer>
      <Title>Carrinho</Title>
      <CartContent>
        {items.map((item, index) => (
          <CartItem key={index}>
            <Icon onClick={() => dispatch(removeItem(index))}>
              <FaRegTrashAlt size={16} />
            </Icon>
            <Image src={item.image} alt="" />
            <CartAbout>
              <Title>{item.title}</Title>
              <Price>R$ {item.price}</Price>
            </CartAbout>
          </CartItem>
        ))}
      </CartContent>
      <CartEnd>
        <Title>Valor total:</Title>
        <Price>
          R$ {items.reduce((acc, i) => acc + i.price, 0).toFixed(2)}
        </Price>
      </CartEnd>
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
