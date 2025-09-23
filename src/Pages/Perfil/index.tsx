import { Header } from '../../components/Header'
import { Presentation } from '../../components/Presentation'
import { ProductsList } from '../../components/ProductsList'
import { Dishes } from '../../models'

import italianFoodImg1 from '../../assets/images/risoto.jpg'
import italianFoodImg2 from '../../assets/images/lasanha.jpg'
import italianFoodImg3 from '../../assets/images/bruschetta.jpg'
import japaneseFoodImg1 from '../../assets/images/sushi.jpg'
import japaneseFoodImg2 from '../../assets/images/shimeji.jpg'
import japaneseFoodImg3 from '../../assets/images/temaki-salmao.jpg'
import { useState } from 'react'
import { SideBar } from '../../components/SideBar'
import { restaurants } from '../Home'

const restaurant: Dishes[] = [
  {
    id: 1,
    perfilId: 1,
    image: `${japaneseFoodImg1}`,
    description:
      'O sushi é uma ótima opção de comida japonesa para iniciantes, já que está disponível em versões com ou sem peixe cru.',
    description2:
      'O sushi é uma ótima opção de comida japonesa para iniciantes, já que está disponível em versões com ou sem peixe cru. Fresco e saboroso, o prato prepara o paladar da pessoa para outras experiências e pode induzi-la a experimentar, por exemplo, sashimi.',
    descriptionAmount: 'Serve: 2 pessoas',
    price: 35.99,
    title: 'Sushi'
  },
  {
    id: 2,
    perfilId: 1,
    image: `${japaneseFoodImg2}`,
    description:
      'Uma das entradas mais famosas do Djapa é o shimeji, que pode ser servido como entrada ou como acompanhamento.',
    description2:
      'Uma das entradas mais famosas do Djapa é o shimeji, que pode ser servido como entrada ou como acompanhamento. Quente, o prato é regado com molho shoyu e cebolinha, que conferem muito mais sabor à refeição.',
    descriptionAmount: 'Serve: de 2 a 3 pessoas',
    price: 70.99,
    title: 'Shimeji'
  },
  {
    id: 3,
    perfilId: 1,
    image: `${japaneseFoodImg3}`,
    description:
      'Considerado um dos pratos mais tradicionais da culinária japonesa, o temaki é uma refeição rápida, que consiste em um cone de folhas de algas com recheio de arroz e peixe.',
    description2:
      'Considerado um dos pratos mais tradicionais da culinária japonesa, o temaki é uma refeição rápida, que consiste em um cone de folhas de algas com recheio de arroz e peixe. Peça-chave no rodízio japonês do Djapa, o prato está disponível em diferentes versões. Tem até temaki vegano e vegetariano.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 22.99,
    title: 'Temaki'
  },
  {
    id: 4,
    perfilId: 2,
    image: `${italianFoodImg1}`,
    description:
      'O risoto (arrozinho, traduzindo do Italiano) é uma importante refeição que compõem os pratos típicos da Itália. Surgiu no norte da Itália, mais especificamente na Lombardia.',
    description2:
      'Ao longo do tempo, foram incrementados vários outros ingredientes, como legumes, carnes e frutos-do-mar que criaram várias variações do prato. Existem várias lendas a respeito.  A tradição diz que o risoto surgiu quando um aprendiz de cozinheiro resolveu colocar açafrão no arroz durante um casamento. Nós brasileiros, por exemplo, consumimos muito o prato no Brasil.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 57.99,
    title: 'Risoto'
  },
  {
    id: 5,
    perfilId: 2,
    image: `${italianFoodImg2}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 6,
    perfilId: 2,
    image: `${italianFoodImg3}`,
    description:
      'Essa comida típica da Itália, diferente das citadas, é menos conhecida pelos brasileiros, no entanto, saboreada em toda a Itália.',
    description2:
      'A receita original é composta por torrada, azeite, sal, pimenta e alho. Mas ao mesmo tempo criou umas variações, com diversos recheios na torrada. A mais popular leva tomate e manjericão.',
    descriptionAmount: 'Serve: 2 pessoas',
    price: 76.99,
    title: 'Bruschetta'
  }
]

export const Perfil = () => {
  const [openSideBar, setOpenSideBar] = useState(false)

  return (
    <>
      <Header openSideBar={() => setOpenSideBar(true)} />
      <SideBar open={openSideBar} closeSideBar={() => setOpenSideBar(false)} />
      <Presentation />
      <ProductsList perfils={restaurants} dish={restaurant} />
    </>
  )
}
