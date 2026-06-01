import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: function (getDefaultMiddleware) {
    return getDefaultMiddleware().concat(api.middleware)
  }
})

export type RootState = ReturnType<typeof store.getState>
