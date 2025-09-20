export class Perfil {
  title: string
  rating: number
  description: string
  image: string
  food: string
  contrast: string
  id: number

  constructor(
    title: string,
    rating: number,
    description: string,
    image: string,
    food: string,
    contrast: string,
    id: number
  ) {
    this.title = title
    this.rating = rating
    this.description = description
    this.image = image
    this.food = food
    this.contrast = contrast
    this.id = id
  }
}

export class Dishes {
  image: string
  title: string
  description: string
  description2: string
  descriptionAmount: string
  price: number
  id: number
  perfilId: number

  constructor(
    image: string,
    title: string,
    description: string,
    description2: string,
    descriptionAmount: string,
    price: number,
    id: number,
    perfilId: number
  ) {
    this.image = image
    this.title = title
    this.description = description
    this.description2 = description2
    this.descriptionAmount = descriptionAmount
    this.price = price
    this.id = id
    this.perfilId = perfilId
  }
}
