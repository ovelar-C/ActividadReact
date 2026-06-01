import { Link } from "react-router-dom";

export default function NavBarra(){
    return(
        <>
        <nav className='nav'>
        <Link to="/" className='post'>Agregar</Link>
        <Link to="/listado" className='listado'>Listado</Link>
        <Link to="/editar/1" className='editar'>Modificar</Link>
      </nav>
        </>
    )
}