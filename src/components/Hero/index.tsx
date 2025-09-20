import logo from '../../assets/images/logo.png'
import { HeroContainer, Logo, Title } from './styles'
import heroBackground from '../../assets/images/hero-background.png'

export const Hero = () => (
  <HeroContainer style={{ backgroundImage: `url(${heroBackground})` }}>
    <Logo src={logo} alt="efood" />
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </HeroContainer>
)
