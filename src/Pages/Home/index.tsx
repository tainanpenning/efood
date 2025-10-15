import { useEffect, useState } from 'react'
import { Hero } from '../../components/Hero'
import { RestaurantsList } from '../../components/RestaurantsList'
import { Restaurant } from '../../models'
import { Loading } from '../../styles'

export const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  if (restaurants.length === 0) return <Loading>Carregando...</Loading>

  return (
    <>
      <Hero />
      <RestaurantsList perfils={restaurants} />
    </>
  )
}
