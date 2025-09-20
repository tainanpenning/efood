import { Container } from '../../styles'
import { Background, PresentationContainer, Title } from './styles'
import { Perfil } from '../../models'
import { useLocation } from 'react-router'

export const Presentation = () => {
  const location = useLocation()
  const perfil = location.state as Perfil | undefined

  if (!perfil) return null

  return (
    <PresentationContainer style={{ backgroundImage: `url(${perfil.image})` }}>
      <Background>
        <Container>
          <Title>{perfil.food}</Title>
          <Title>{perfil.title}</Title>
        </Container>
      </Background>
    </PresentationContainer>
  )
}
