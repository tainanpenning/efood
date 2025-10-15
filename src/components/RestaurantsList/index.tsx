import { Restaurant } from '../../models'
import { Container } from '../../styles'
import { Restaurants } from '../Restaurants'
import { List } from './styles'

type Props = {
  perfils: Restaurant[]
}

export const RestaurantsList = ({ perfils }: Props) => (
  <Container>
    <List>
      {perfils
        .sort((a, b) =>
          a.destacado === b.destacado ? 0 : a.destacado ? -1 : 1
        )
        .map((perfil) => (
          <Restaurants
            key={perfil.id}
            title={perfil.titulo}
            rating={perfil.avaliacao}
            description={perfil.descricao}
            cover={perfil.capa}
            type={perfil.tipo}
            contrast={perfil.destacado}
            id={perfil.id}
          />
        ))}
    </List>
  </Container>
)
