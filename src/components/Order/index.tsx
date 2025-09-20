import { useDispatch } from 'react-redux'
import { Button, Description, OrderContainer, Title } from './styles'
import { clearCart } from '../../store/cartReducer'
import { Link } from 'react-router'

type Props = {
  closeOrder: () => void
}

export const Order = ({ closeOrder }: Props) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(clearCart())
    closeOrder()
  }

  return (
    <OrderContainer>
      <Title>Pedido realizado - {`{ORDER_ID}`}</Title>
      <Description>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </Description>
      <Description>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </Description>
      <Description>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </Description>
      <Description>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </Description>
      <Link to={'/'}>
        <Button onClick={handleClick} type="button">
          Concluir
        </Button>
      </Link>
    </OrderContainer>
  )
}
