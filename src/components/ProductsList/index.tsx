import { useState } from 'react'
import { Dishes, Perfil } from '../../models'
import { Container } from '../../styles'
import { Modal } from '../Modal'
import { Products } from '../Products'
import { Alert, List } from './styles'
import { useParams } from 'react-router'

type Props = {
  dish: Dishes[]
  perfils: Perfil[]
}

export const ProductsList = ({ dish, perfils }: Props) => {
  const [selectedDish, setSelectedDish] = useState<Dishes | null>(null)

  const { id } = useParams()
  const perfilId = Number(id)

  const perfil = perfils.find((p) => p.id === perfilId)
  const filteredDishes = dish.filter((d) => d.perfilId === perfilId)

  if (!perfil) return null

  return (
    <Container>
      {filteredDishes.length === 0 ? (
        <Alert>Nenhum produto neste perfil</Alert>
      ) : (
        <List>
          {filteredDishes.map((d) => (
            <Products
              key={d.id}
              onOpen={() => setSelectedDish(d)}
              image={d.image}
              title={d.title}
              description={d.description}
            />
          ))}
        </List>
      )}
      {selectedDish && (
        <Modal
          closeModal={() => setSelectedDish(null)}
          open={true}
          id={selectedDish.id}
          image={selectedDish.image}
          description2={selectedDish.description2}
          descriptionAmount={selectedDish.descriptionAmount}
          price={selectedDish.price}
          title={selectedDish.title}
        />
      )}
    </Container>
  )
}
