import { useParams } from 'react-router-dom'
import { useGetRestaurantQuery } from '../../services/api'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import MenuList from '../../components/MenuList'

export default function RestaurantDetail() {
  const { id } = useParams()
  const { data: restaurant, isLoading } = useGetRestaurantQuery(id!)

  if (isLoading) {
    return (
      <div className="loader-container">
        <h3>Carregando...</h3>
      </div>
    )
  }

  if (!restaurant) return null

  return (
    <>
      <Header />
      <Banner
        title={restaurant.titulo}
        type={restaurant.tipo}
        image={restaurant.capa}
      />
      <MenuList items={restaurant.cardapio} />
    </>
  )
}
