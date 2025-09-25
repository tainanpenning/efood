import { Hero } from '../../components/Hero'
import { RestaurantsList } from '../../components/RestaurantsList'
import { Perfil } from '../../models'
import japaneseRestaurantImg from '../../assets/images/japanese-restaurant.png'
import italianRestaurantImg from '../../assets/images/italian-restaurant.png'

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
    title: 'La Dolce Vita Trattoria',
    rating: 4.7,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    food: 'Italiana',
    contrast: 'Destaque da Semana',
    image: `${italianRestaurantImg}`
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    rating: 4.7,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    food: 'Italiana',
    contrast: 'Destaque da Semana',
    image: `${italianRestaurantImg}`
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    rating: 4.7,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    food: 'Italiana',
    contrast: 'Destaque da Semana',
    image: `${italianRestaurantImg}`
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    rating: 4.7,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    food: 'Italiana',
    contrast: 'Destaque da Semana',
    image: `${italianRestaurantImg}`
  }
]

export const Home = () => (
  <>
    <Hero />
    <RestaurantsList perfils={restaurants} />
  </>
)
