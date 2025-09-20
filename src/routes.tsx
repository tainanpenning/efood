import { Route, Routes } from 'react-router'
import { Home } from './Pages/Home'
import { Perfil } from './Pages/Perfil'

export const RoutesManager = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
  </Routes>
)
