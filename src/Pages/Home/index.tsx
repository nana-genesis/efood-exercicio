import { useState } from 'react'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useGetRestaurantsQuery } from '../../services/api'
import styled from 'styled-components'
import { cores } from '../../styles'

const SearchContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;

  input {
    width: 100%;
    max-width: 450px;
    padding: 12px;
    border: 2px solid ${cores.corSalmao};
    background-color: ${cores.begeClaro};
    color: ${cores.corSalmao};
    font-weight: bold;
    outline: none;
    border-radius: 8px;

    &::placeholder {
      color: ${cores.corSalmao};
      opacity: 0.6;
    }
  }
`

const Home = () => {
  const { data: restaurantes, isLoading } = useGetRestaurantsQuery()
  const [searchTerm, setSearchTerm] = useState('')

  if (isLoading) {
    return (
      <div className="loader-container">
        <h3>Carregando...</h3>
      </div>
    )
  }

  if (!restaurantes) return null

  const filteredRestaurants = restaurantes.filter((res) =>
    res.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Header />
      <Banner
        showHome
        image="https://raw.githubusercontent.com/gian-mario/efood/main/src/assets/images/fundo_home.png"
      />
      <div className="container">
        <SearchContainer>
          <input
            type="text"
            placeholder="Buscar restaurante..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        <ProductsList restaurants={filteredRestaurants} background="salmon" />
      </div>
    </>
  )
}

export default Home
