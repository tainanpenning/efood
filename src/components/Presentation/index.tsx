import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Container, Loading } from '../../styles'
import { Background, PresentationContainer, Title } from './styles'
import { Restaurant } from '../../models'

export const Presentation = () => {
  const { id } = useParams()
  const [perfil, setPerfil] = useState<Restaurant | null>(null)

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        const restaurant = res.find((r: any) => r.id === Number(id))
        setPerfil(restaurant)
      })
  }, [id])

  if (!perfil) return <Loading>Carregando...</Loading>

  return (
    <PresentationContainer style={{ backgroundImage: `url(${perfil?.capa})` }}>
      <Background>
        <Container>
          <Title>{perfil?.tipo}</Title>
          <Title>{perfil?.titulo}</Title>
        </Container>
      </Background>
    </PresentationContainer>
  )
}
