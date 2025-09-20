import {
  Button,
  ButtonRow,
  Description,
  Image,
  ProductsAbout,
  ProductsContainer,
  Title
} from './styles'

type Props = {
  onOpen: () => void
  image: string
  title: string
  description: string
}

export const Products = ({ onOpen, image, title, description }: Props) => {
  return (
    <ProductsContainer>
      <ProductsAbout>
        <Image style={{ backgroundImage: `url(${image})` }} />
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ProductsAbout>
      <ButtonRow>
        <Button onClick={onOpen}>Mais detalhes</Button>
      </ButtonRow>
    </ProductsContainer>
  )
}
