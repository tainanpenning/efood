import { useState } from 'react'
import { Dish } from '../../models'
import { Container } from '../../styles'
import { Modal } from '../Modal'
import { Products } from '../Products'
import { Alert, List } from './styles'

type Props = {
  dishes: Dish[]
}

export const ProductsList = ({ dishes }: Props) => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)

  return (
    <Container>
      {dishes.length === 0 ? (
        <Alert>Nenhum produto neste perfil</Alert>
      ) : (
        <List>
          {dishes.map((d) => (
            <Products
              key={d.id}
              onOpen={() => setSelectedDish(d)}
              photo={d.foto}
              name={d.nome}
              description={d.descricao}
            />
          ))}
        </List>
      )}
      {selectedDish && (
        <Modal
          closeModal={() => setSelectedDish(null)}
          open={true}
          id={selectedDish.id}
          photo={selectedDish.foto}
          description={selectedDish.descricao}
          portion={selectedDish.porcao}
          price={selectedDish.preco}
          name={selectedDish.nome}
        />
      )}
    </Container>
  )
}
