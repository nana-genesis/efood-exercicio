import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type Product = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Product[]
}

type PurchasePayload = {
  products: {
    id: number
    price: number
  }[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood'
  }),
  endpoints: function (builder) {
    return {
      getRestaurants: builder.query<Restaurant[], void>({
        query: function () {
          return 'restaurantes'
        }
      }),
      getRestaurant: builder.query<Restaurant, string>({
        query: function (id) {
          return 'restaurantes/' + id
        }
      }),
      purchase: builder.mutation<any, PurchasePayload>({
        query: function (body) {
          return {
            url: 'checkout',
            method: 'POST',
            body: body
          }
        }
      })
    }
  }
})

export const {
  useGetRestaurantsQuery,
  useGetRestaurantQuery,
  usePurchaseMutation
} = api

export default api
