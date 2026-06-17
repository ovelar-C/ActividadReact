import { useContext, useDebugValue, useEffect, useState, useSyncExternalStore } from "react";
import { DatosContext } from "../contexto/FavoritosContext";
import '../pantallascss/milista.css'
export default function Milista() {
    const { favoritos } = useContext(DatosContext);
    const [busqueda, setBusqueda] = useState("");


    const encontrado = (favoritos.find((peli) => {
        return peli.titulo.toLowerCase() === busqueda.toLowerCase()
    }));


    function buscar(e) {
        setBusqueda(e.target.value)
    }
    return (
        <>
            <section className="milista">
                <h1 className="titulo">Favoritos</h1>
                <input placeholder="buscar peli" value={busqueda} onChange={(e) => buscar(e)} />

                {busqueda ? (
                    encontrado ? (
                        <h3>{encontrado.titulo}</h3>
                    ) : (
                        <h3>sin resultados</h3>
                    )
                ) : (
                    <div>
                        {favoritos?.map((peli) => (
                            <ul key={peli.id}>
                                <li>
                                    <span>{peli.titulo}</span>
                                </li>
                            </ul>
                        ))}
                    </div>
                )}

            </section>
        </>
    )
}