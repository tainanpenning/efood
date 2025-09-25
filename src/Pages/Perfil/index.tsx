import { Header } from '../../components/Header'
import { Presentation } from '../../components/Presentation'
import { ProductsList } from '../../components/ProductsList'
import { Dishes } from '../../models'

import italianFoodImg from '../../assets/images/lasanha.jpg'
import japaneseFoodImg from '../../assets/images/sushi.jpg'
import { useState } from 'react'
import { SideBar } from '../../components/SideBar'
import { restaurants } from '../Home'

const restaurant: Dishes[] = [
  {
    id: 1,
    perfilId: 1,
    image: `${japaneseFoodImg}`,
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
    image: `${japaneseFoodImg}`,
    description:
      'O sushi é uma ótima opção de comida japonesa para iniciantes, já que está disponível em versões com ou sem peixe cru.',
    description2:
      'O sushi é uma ótima opção de comida japonesa para iniciantes, já que está disponível em versões com ou sem peixe cru. Fresco e saboroso, o prato prepara o paladar da pessoa para outras experiências e pode induzi-la a experimentar, por exemplo, sashimi.',
    descriptionAmount: 'Serve: 2 pessoas',
    price: 35.99,
    title: 'Sushi'
  },
  {
    id: 3,
    perfilId: 1,
    image: `${japaneseFoodImg}`,
    description:
      'O sushi é uma ótima opção de comida japonesa para iniciantes, já que está disponível em versões com ou sem peixe cru.',
    description2:
      'O sushi é uma ótima opção de comida japonesa para iniciantes, já que está disponível em versões com ou sem peixe cru. Fresco e saboroso, o prato prepara o paladar da pessoa para outras experiências e pode induzi-la a experimentar, por exemplo, sashimi.',
    descriptionAmount: 'Serve: 2 pessoas',
    price: 35.99,
    title: 'Sushi'
  },
  {
    id: 4,
    perfilId: 1,
    image: `${japaneseFoodImg}`,
    description:
      'O sushi é uma ótima opção de comida japonesa para iniciantes, já que está disponível em versões com ou sem peixe cru.',
    description2:
      'O sushi é uma ótima opção de comida japonesa para iniciantes, já que está disponível em versões com ou sem peixe cru. Fresco e saboroso, o prato prepara o paladar da pessoa para outras experiências e pode induzi-la a experimentar, por exemplo, sashimi.',
    descriptionAmount: 'Serve: 2 pessoas',
    price: 35.99,
    title: 'Sushi'
  },
  {
    id: 5,
    perfilId: 1,
    image: `${japaneseFoodImg}`,
    description:
      'O sushi é uma ótima opção de comida japonesa para iniciantes, já que está disponível em versões com ou sem peixe cru.',
    description2:
      'O sushi é uma ótima opção de comida japonesa para iniciantes, já que está disponível em versões com ou sem peixe cru. Fresco e saboroso, o prato prepara o paladar da pessoa para outras experiências e pode induzi-la a experimentar, por exemplo, sashimi.',
    descriptionAmount: 'Serve: 2 pessoas',
    price: 35.99,
    title: 'Sushi'
  },
  {
    id: 6,
    perfilId: 1,
    image: `${japaneseFoodImg}`,
    description:
      'O sushi é uma ótima opção de comida japonesa para iniciantes, já que está disponível em versões com ou sem peixe cru.',
    description2:
      'O sushi é uma ótima opção de comida japonesa para iniciantes, já que está disponível em versões com ou sem peixe cru. Fresco e saboroso, o prato prepara o paladar da pessoa para outras experiências e pode induzi-la a experimentar, por exemplo, sashimi.',
    descriptionAmount: 'Serve: 2 pessoas',
    price: 35.99,
    title: 'Sushi'
  },
  {
    id: 7,
    perfilId: 2,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 8,
    perfilId: 2,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 9,
    perfilId: 2,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 10,
    perfilId: 2,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 11,
    perfilId: 2,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 12,
    perfilId: 2,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 13,
    perfilId: 3,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 14,
    perfilId: 3,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 15,
    perfilId: 3,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 13,
    perfilId: 3,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 14,
    perfilId: 3,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 16,
    perfilId: 3,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 17,
    perfilId: 4,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 18,
    perfilId: 4,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 19,
    perfilId: 4,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 20,
    perfilId: 4,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 21,
    perfilId: 4,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 22,
    perfilId: 4,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 23,
    perfilId: 5,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 24,
    perfilId: 5,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 25,
    perfilId: 5,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 26,
    perfilId: 5,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 27,
    perfilId: 5,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 28,
    perfilId: 5,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 29,
    perfilId: 6,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 30,
    perfilId: 6,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 31,
    perfilId: 6,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 32,
    perfilId: 6,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 33,
    perfilId: 6,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
  },
  {
    id: 34,
    perfilId: 6,
    image: `${italianFoodImg}`,
    description:
      'Não poderíamos falar de pratos típicos italianos em 7 delícias e deixar de lado a Lasanha. O prato é uma massa em folhas venerada nos quatro cantos do mundo.',
    description2:
      'Apesar de criado na Itália, a Lasanha conquistou o paladar de muitas nações ao redor do mundo. As receitas e tradições de preparo podem variar de local para local. Muitas receitas usam diferentes queijos queijo, mas na Itália os preferidos são parmesão ou ricota. A clássica Lasanha bolonhesa usa o queijo Parmigiano e molho bechamel.',
    descriptionAmount: 'Serve: 1 pessoa',
    price: 46.99,
    title: 'Lasanha'
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
