import { Perfil } from '../../models'
import { Container } from '../../styles'
import { Restaurants } from '../Restaurants'
import { List } from './styles'

type Props = {
  perfils: Perfil[]
}

export const RestaurantsList = ({ perfils }: Props) => (
  <Container>
    <List>
      {perfils.map((perfil) => (
        <Restaurants
          perfilId={perfil.id}
          key={perfil.id}
          title={perfil.title}
          rating={perfil.rating}
          description={perfil.description}
          image={perfil.image}
          food={perfil.food}
          contrast={perfil.contrast}
          id={perfil.id}
        />
      ))}
    </List>
  </Container>
)
