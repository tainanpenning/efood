import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartItem = {
  title: string
  image: string
  price: number
  id: number
}

type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1)
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addItem, clearCart, removeItem } = cartSlice.actions
export default cartSlice.reducer
