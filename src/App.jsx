import { useState } from 'react'
import './App.css'
import { Outlet, Route, Routes, Link } from 'react-router-dom'
import Home from './pantallas/Home'
import Listado from './pantallas/Listado'
import Detalle from './pantallas/Detalle'

import evangelionmp3 from './assets/evangelion.mp3'
import NavBarra from './componentes/NavBarra'


function Layout() {


  return (
    <>
      <NavBarra/>
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
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='listado' element={<Listado />} />
          <Route path='editar/:id' element={<Detalle />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
