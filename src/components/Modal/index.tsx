import { GrClose } from 'react-icons/gr'
import { Container } from '../../styles'
import {
  Button,
  Counter,
  Description,
  Icon,
  Image,
  ModalBackground,
  ModalContainer,
  ModalContent,
  Title
} from './styles'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../store/cartReducer'
import { RootState } from '../../store'
import { formatPrice } from '../Cart'

type Props = {
  open: boolean
  closeModal: () => void
  photo: string
  name: string
  description: string
  portion: string
  price: number
  id: number
}

export const Modal = ({
  open,
  closeModal,
  photo,
  name,
  description,
  portion,
  price,
  id
}: Props) => {
  const dispatch = useDispatch()

  const cartItems = useSelector((state: RootState) => state.cart.items)
  const counter = cartItems.filter((item) => item.id === id).length

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  if (!open) return null

  return (
    <ModalBackground>
      <Container>
        <ModalContainer>
          <Icon>
            <GrClose onClick={closeModal} size={16} />
          </Icon>
          <Image style={{ backgroundImage: `url(${photo})` }} />
          <ModalContent>
            <Title>{name}</Title>
            <Description>{description}</Description>
            <Description>{portion}</Description>
            <Button
              onClick={() => dispatch(addItem({ name, photo, price, id }))}
            >
              Adicionar ao carrinho - {formatPrice(price)}
            </Button>
            {counter > 0 && <Counter>x{counter} Adicionados</Counter>}
          </ModalContent>
        </ModalContainer>
      </Container>
    </ModalBackground>
  )
}
