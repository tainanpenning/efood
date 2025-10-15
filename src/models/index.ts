export interface Restaurant {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Dish[]
}

export interface Dish {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}
