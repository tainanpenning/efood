import { Link } from 'react-router'
import { FaStar } from 'react-icons/fa'
import { Colors, Container } from '../../styles'
import {
  Button,
  CardAbout,
  CardBanner,
  Description,
  Image,
  Rating,
  Tag,
  TagContainer,
  Title
} from './styles'

type Props = {
  title: string
  rating: number
  description: string
  cover: string
  type: string
  contrast: boolean
  id: number
}

export const Restaurants = ({
  title,
  rating,
  description,
  cover,
  type,
  contrast,
  id
}: Props) => {
  return (
    <Container>
      <CardBanner>
        <Image style={{ backgroundImage: `url(${cover})` }} />
        <TagContainer>
          {contrast && <Tag>Destaque do dia</Tag>}
          <Tag>{type}</Tag>
        </TagContainer>
      </CardBanner>
      <CardAbout>
        <Title>
          {title}
          <Rating>
            {rating} <FaStar color={Colors.gold} size={19} />
          </Rating>
        </Title>
        <Description>{description}</Description>
        <Link to={`/perfil/${id}`}>
          <Button type="button">Saiba mais</Button>
        </Link>
      </CardAbout>
    </Container>
  )
}
