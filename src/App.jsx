import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Outlet, Route, Routes, Link } from 'react-router-dom'
import Home from './pantallas/Home'
import Listado from './pantallas/Listado'
import Detalle from './pantallas/Detalle'


function Layout(){
  return (
    <>
    <nav className='nav'>
      <Link to="/"  className='post'>Agregar</Link>
      <Link to="/listado" className='listado'>Listado</Link>
      <Link to="/editar/1" className='editar'>Modificar</Link>
    </nav>
    <main>
      <Outlet/>
    </main>
    </>
  )
}


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element = {<Home/>}/>
        <Route path='listado' element = {<Listado/>}/>
        <Route path='editar/:id' element = {<Detalle/>}/> 
      </Route>
    </Routes>

    </>
  )
}

export default App
