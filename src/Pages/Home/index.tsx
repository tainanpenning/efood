import { Hero } from '../../components/Hero'
import { RestaurantsList } from '../../components/RestaurantsList'
import { Perfil } from '../../models'
import japaneseRestaurantImg from '../../assets/images/japanese-restaurant.png'
import italianRestaurantImg from '../../assets/images/italian-restaurant.png'
import mexicanRestaurantImg from '../../assets/images/mexican-restaurant.jpg'
import arabicRestaurantImg from '../../assets/images/arabic-restaurant.jpg'

export const restaurants: Perfil[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    rating: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    food: 'Japonesa',
    contrast: 'Destaque da Semana',
    image: `${japaneseRestaurantImg}`
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    rating: 4.7,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    food: 'Italiana',
    contrast: 'Destaque da Semana',
    image: `${italianRestaurantImg}`
  },
  {
    id: 3,
    title: 'Chafarica',
    rating: 4.7,
    description:
      'As luzes com imagens divertidas que se veem da montra são logo o alerta para o que encontramos dentro do espaço. Muitas caveiras, cor e animação. Há pedaços do México e da sua tradição por todo o lado. A música ambiente, sempre nos ritmos mexicanos é outra das componentes que nos faz viajar até este país da América do Norte. As iguarias, essas, são de comer e chorar por mais.',
    food: 'Mexicana',
    contrast: 'Destaque da Semana',
    image: `${mexicanRestaurantImg}`
  },
  {
    id: 4,
    title: 'All Badawi',
    rating: 5.0,
    description:
      'O cardápio é um festival de sabores autênticos: desde o clássico homus cremoso e o frescor do tabule até os suculentos espetos de kafta e o tradicional cordeiro assado, preparado lentamente para preservar a maciez e o sabor marcante. Para acompanhar, pães sírios assados na hora e molhos delicadamente temperados.',
    food: 'Japonesa',
    contrast: 'Destaque da Semana',
    image: `${arabicRestaurantImg}`
  }
]

export const Home = () => (
  <>
    <Hero />
    <RestaurantsList perfils={restaurants} />
  </>
)
