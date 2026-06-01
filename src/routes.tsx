import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Categories from './Pages/Categories'
import RestaurantDetail from './Pages/Restaurant'

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/restaurant/:id" element={<RestaurantDetail />} />
    </Routes>
  )
}
