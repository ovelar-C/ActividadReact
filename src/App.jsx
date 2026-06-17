import { useState } from 'react'
import './App.css'
import { Outlet, Route, Routes, Link } from 'react-router-dom'
import Home from './pantallas/Home'
import Listado from './pantallas/Listado'
import Detalle from './pantallas/Detalle'
import MiLista from './componentes/Milista'
import evangelionmp3 from './assets/evangelion.mp3'
import NavBarra from './componentes/NavBarra'
import Login from './pantallas/Login'
import RutaPrivada from './rutas/RutaPrivada'

function Layout() {
  return (
    <>
      <NavBarra />
      <main>
        <Outlet />
      </main>

      {/*
        <audio autoPlay loop src= {evangelionmp3}/>
      */}
    </>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route element={<Layout />}>
          <Route element={<RutaPrivada />}>
            <Route index element={<Home />} />
            <Route path='editar/:id' element={<Detalle />} />
            <Route path='favoritos' element={<MiLista />} />
          </Route>


        <Route path='listado' element={<Listado />} />
        <Route path='*' element={<h1>error</h1>} />
        </Route>

      </Routes>
    </>
  )
}

export default App
