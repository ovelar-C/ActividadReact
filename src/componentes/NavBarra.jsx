import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DatosContext } from "../contexto/FavoritosContext";
import { DatosContextAuth } from "../contexto/AuthContext";
import Login from "../pantallas/Login";

export default function NavBarra() {
    const { favoritos } = useContext(DatosContext);
    const { usuario, logout, login } = useContext(DatosContextAuth);
    const navigate = useNavigate()

    function handlaw() {
        navigate("/login")
    }
    return (
        <>
            {usuario ? (
                <nav className='nav'>
                    <Link to="/" className='post'>Agregar</Link>
                    <Link to="/listado" className='listado'>Listado</Link>
                    <Link to="/editar/1" className='editar'>Modificar</Link>
                    <Link to="/favoritos" className='editar'>Favoritos</Link>
                    <h2>{favoritos.length}</h2>
                    <button className="botonesAll" onClick={logout}>cerrar sesion</button>
                </nav>
            ) : (
                <nav className="nav">
                    <button onClick={handlaw} >iniciar session</button>
                </nav>
            )}
        </>
    )
}