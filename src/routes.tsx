import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Categories from './Pages/Categories'
import RestaurantDetail from './Pages/Restaurant'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/restaurant/:id" element={<RestaurantDetail />} />
  </Routes>
)

export default Rotas
