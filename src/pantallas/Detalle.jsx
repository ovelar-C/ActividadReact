import axios from "axios";
import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../pantallascss/detalle.css';

export default function EditarBorrar() {
    const { id } = useParams();
    const [cargando, setCargando] = useState(true);
    const [pelicula, setPelicula] = useState(null);
    const [editar, setEditar] = useState(false);
    const [formDatos, setFormDatos] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/api/peliculas/${id}`)
            .then((respuesta) => {
                setCargando(false);
                console.log(respuesta.data);
                setPelicula(respuesta.data)
            })
            .catch((error) => {
                console.log(error);
                setCargando(true);
            })
    }, [id]);

    function editarPeli(e){
        e.preventDefault();
    }

    if (cargando)
        return <h2>cargando...</h2>
    return (
        <>
            <section className="detalle">
                <h1>Editar y Eliminar</h1>
                <ul>
                    {pelicula &&

                        Object.entries(pelicula).map(([key, value]) => (
                            <li key={key}>
                                {key}:
                                {String(value)}
                            </li>
                        ))}
                </ul>
                <h4>• ID {pelicula.id}</h4>
                <form onSubmit={editarPeli} className="formulario">
                    <div className="contenedorForm">
                        <div className="divform">
                            <label>Titulo</label>
                            <input type="text" value={pelicula.titulo} disabled={!editar} />
                            <label>Fecha de Estreno</label>
                            <input type="number" value={pelicula.fechaEstreno} disabled={!editar} />
                            <label>Director</label>
                            <input type="text" value={pelicula.director} disabled={!editar} />
                            <label>Ganador del Oscar</label>
                            <input type="checkbox" checked={pelicula.ganadorOscar} disabled={!editar}
                                onChange={(e) => setFormDatos({
                                    ...formDatos,
                                    ganadorOscar: e.target.checked
                                })}
                            />
                            <label>Generos</label>
                            <input type="text" value={pelicula.generos} disabled={!editar} />
                            <label>Costo Inicial</label>
                            <input type="number" value={pelicula.costoInicial} disabled={!editar} />
                        </div>
                        <div className="divform">
                            <label>Recaudación</label>
                            <input type="number" value={pelicula.recaudacion} disabled={!editar} />
                            <label>sinopsis</label>
                            <input type="text" value={pelicula.sinopsis} disabled={!editar} />
                            <label>Duración</label>
                            <input type="number" value={pelicula.duracionMinutos} disabled={!editar} />
                            <label>País de Origen</label>
                            <input type="text" value={pelicula.paisOrigen} disabled={!editar} />
                            <label>Idioma</label>
                            <input type="text" value={pelicula.idiomaOriginal} disabled={!editar} />
                            <label>Actores</label>
                            <input type="text" value={pelicula.actores} disabled={!editar} />
                        </div>
                    </div>
                    <div className="botones">
                        <button className="botonesAll" type="button" onClick={()=>setEditar(true)}>Editar</button>
                        <button className="botonesAll" type="button" id="eliminar">Eliminar</button>
                        <button className="botonesAll" type="submit" id="guardar">Guardar</button>
                    </div>
                </form>
            </section>
        </>
    )
}