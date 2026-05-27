import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Outlet, Route, Routes, Link } from 'react-router-dom'
import FormPost from './pantallas/Home'
import Listado from './pantallas/Listado'
import EditarBorrar from './pantallas/Detalle'


function Layout(){
  return (
    <>
    <nav className='nav'>
      <Link to="/"  className='post'>post</Link>
      <Link to="/listado" className='listado'>get</Link>
      <Link to="/editar/1" className='editar'>patch and delete</Link>
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
        <Route index element = {<FormPost/>}/>
        <Route path='listado' element = {<Listado/>}/>
        <Route path='editar/:id' element = {<EditarBorrar/>}/> 
      </Route>
    </Routes>

    </>
  )
}

export default App
