import React from 'react'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import { useGetRestaurantsQuery } from '../../services/api'

export default function Categories() {
  const { data: restaurantes, isLoading } = useGetRestaurantsQuery()

  if (isLoading) {
    return (
      <div className="loader-container">
        <h3>Carregando...</h3>
      </div>
    )
  }

  if (!restaurantes) return null

  return (
    <>
      <Header />
      <ProductsList
        restaurants={restaurantes}
        title="Pratos Especiais"
        background="salmon"
      />
      <ProductsList
        restaurants={restaurantes}
        title="Promoções Especiais"
        background="black"
      />
    </>
  )
}
