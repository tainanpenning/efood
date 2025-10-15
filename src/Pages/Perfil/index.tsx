import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Header } from '../../components/Header'
import { Presentation } from '../../components/Presentation'
import { ProductsList } from '../../components/ProductsList'
import { SideBar } from '../../components/SideBar'
import { Dish, Restaurant } from '../../models'
import { Loading } from '../../styles'

export const Perfil = () => {
  const [openSideBar, setOpenSideBar] = useState(false)
  const [dish, setDish] = useState<Dish[]>([])

  const { id } = useParams()

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => {
        const select = res.find((r: Restaurant) => r.id === Number(id))
        setDish(select.cardapio)
      })
  }, [id])

  if (dish.length === 0) return <Loading>Carregando...</Loading>

  return (
    <>
      <Header openSideBar={() => setOpenSideBar(true)} />
      <SideBar open={openSideBar} closeSideBar={() => setOpenSideBar(false)} />
      <Presentation />
      <ProductsList dishes={dish} />
    </>
  )
}
