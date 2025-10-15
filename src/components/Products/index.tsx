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
  photo: string
  name: string
  description: string
}

export const Products = ({ onOpen, photo, name, description }: Props) => {
  const getDescription = (description: string) => {
    if (description.length >= 132) {
      return description.slice(0, 129) + '...'
    }
    return description
  }

  return (
    <ProductsContainer>
      <ProductsAbout>
        <Image style={{ backgroundImage: `url(${photo})` }} />
        <Title>{name}</Title>
        <Description>{getDescription(description)}</Description>
      </ProductsAbout>
      <ButtonRow>
        <Button onClick={onOpen}>Mais detalhes</Button>
      </ButtonRow>
    </ProductsContainer>
  )
}
