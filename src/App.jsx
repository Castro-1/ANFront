import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Layout from './components/Layout'
import Biseccion from './pages/parte1/biseccion'
import Secante from './pages/parte1/secante'
import Newton from './pages/parte1/newton'
import ReglaFalsa from './pages/parte1/regla-falsa'
import PuntoFijo from './pages/parte1/punto-fijo'
import RaicesMultiples from './pages/parte1/raices-multiples'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='parte1/newton' element={<Newton/>}/>
        <Route path='parte1/secante' element={<Secante/>}/>
        <Route path='parte1/biseccion' element={<Biseccion/>}/>
        <Route path='parte1/punto-fijo' element={<PuntoFijo/>}/>
        <Route path='parte1/regla-falsa' element={<ReglaFalsa/>}/>
        <Route path='parte1/raices-multiples' element={<RaicesMultiples/>}/>
      </Route>
      
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
