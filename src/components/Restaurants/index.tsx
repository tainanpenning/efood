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
import { Link } from 'react-router'
import { useEffect, useState } from 'react'

type Props = {
  title: string
  rating: number
  description: string
  image: string
  food: string
  contrast?: string
  id: number
  perfilId: number
}

export const Restaurants = ({
  title,
  rating,
  description,
  image,
  food,
  contrast,
  id,
  perfilId
}: Props) => {
  const [showContrast, setShowContrast] = useState(false)

  useEffect(() => {
    if (rating >= 4.9) {
      setShowContrast(true)
    } else {
      setShowContrast(false)
    }
  }, [rating])

  return (
    <Container>
      <CardBanner>
        <Image style={{ backgroundImage: `url(${image})` }} />
        <TagContainer>
          {showContrast && <Tag>{contrast}</Tag>}
          <Tag>{food}</Tag>
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
        <Link to={`/perfil/${perfilId}`} state={{ food, title, image }}>
          <Button type="button">Saiba mais</Button>
        </Link>
      </CardAbout>
    </Container>
  )
}
