import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../services/api'

type CartState = {
  items: Product[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: function (state, action: PayloadAction<Product>) {
      const item = state.items.find(function (i) {
        return i.id === action.payload.id
      })
      if (!item) {
        state.items.push(action.payload)
      } else {
        alert('O item já está no carrinho')
      }
    },
    remove: function (state, action: PayloadAction<number>) {
      state.items = state.items.filter(function (item) {
        return item.id !== action.payload
      })
    },
    open: function (state) {
      state.isOpen = true
    },
    close: function (state) {
      state.isOpen = false
    },
    clear: function (state) {
      state.items = []
    }
  }
})

export const { add, remove, open, close, clear } = cartSlice.actions
export default cartSlice.reducer
