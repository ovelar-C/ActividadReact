import { Link, useNavigate } from "react-router-dom"
import '../pantallascss/listado.css'
import { useContext, useEffect, useState } from "react";
import useRunGet from "../componentes/useRunGet";
import { DatosContextAuth } from "../contexto/AuthContext";

export default function Listado() {
    const {datos, cargando} = useRunGet();
    const [pelicula, setPelicula] = useState(datos);
    const {datosUser} = useContext(DatosContextAuth);
    console.log(datosUser)
    useEffect(()=>{
        setPelicula(datos);
    },[datos])
    return (
        <>
            <section className="listado">
                <h1 className="titulo">Lista de Películas</h1>
                {cargando && (
                    <div>
                        <h3>cargando datos...</h3>
                    </div>
                )}
                {!cargando &&
                    <div className="listadoDatos">
                        {datos?.map((dato)=>(
                            <ul key={dato.id}>
                                <li>
                                    <div className="listadoDatos">
                                    <span>{dato.id}</span>
                                    <span>• {dato.titulo}</span>
                                    </div>

                                    {datosUser?.rol === "admin" && 
                                        <Link to={`/editar/${dato.id}`}>
                                            ver más
                                        </Link>
                                    }
                                </li>
                            </ul>
                        ))}
                    </div>
                }
            </section>
        </>
    )
}