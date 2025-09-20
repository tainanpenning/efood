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

type Props = {
  open: boolean
  closeModal: () => void
  image: string
  title: string
  description2: string
  descriptionAmount: string
  price: number
  id: number
}

export const Modal = ({
  open,
  closeModal,
  image,
  title,
  description2,
  descriptionAmount,
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
          <Image style={{ backgroundImage: `url(${image})` }} />
          <ModalContent>
            <Title>{title}</Title>
            <Description>{description2}</Description>
            <Description>{descriptionAmount}</Description>
            <Button
              onClick={() => dispatch(addItem({ title, image, price, id }))}
            >
              Adicionar ao carrinho - R$ {price}
            </Button>
            {counter > 0 && <Counter>x{counter} Adicionados</Counter>}
          </ModalContent>
        </ModalContainer>
      </Container>
    </ModalBackground>
  )
}
