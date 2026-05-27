import { Link, useNavigate } from "react-router-dom"
import '../pantallascss/listado.css'
import { useEffect, useState } from "react";
import useRunGet from "../componentes/RunGet";
export default function Listado() {
    const {datos, cargando} = useRunGet();

    return (
        <>
            <section className="listado">
                <h1>Lista de Películas</h1>
                {cargando && (
                    <div>
                        <h3>cargando datos...</h3>
                    </div>
                )}
                {!cargando &&
                    <div className="listadoDatos">
                        {datos.map((dato)=>(
                            <ul key={dato.id}>
                                <li>
                                    <span>{dato.titulo}</span>
                                    {
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