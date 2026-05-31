import { useEffect, useState } from "react";
import '../pantallascss/formulario.css'

// acá tenemos el form con los datos que le pasamos y la funcion.
// cuando hacemos onsubmit le mandamos los datos que obtengamos del input del form
// eso hace que mandemos parametros a la funcion que anteriormente habiamos mandando(onSubmit)
export default function Formulario({ datoInicial, onSubmit, funcionEliminar, modo, editando }) {
    const [editar, setEditar] = useState(editando);

    const [formDatos, setFormDatos] = useState(
        datoInicial ||
        {
            titulo: "",
            fechaEstreno: "",
            director: "",
            ganadorOscar: false,
            generos: "",
            costoInicial: "",
            recaudacion: "",
            rentable: false,
            sinopsis: "",
            duracionMinutos: "",
            paisOrigen: "",
            idiomaOriginal: "",
            actores: "",
        });

    useEffect(() => {
        if (!datoInicial) return;

        setFormDatos(datoInicial);
    }, [datoInicial]);

    async function prepararDatos(e) {
        e.preventDefault();
        //preparamos lo campos y lo convertimos al tipo de dato que debe ser
        const datosParaEnviar = {
            ...formDatos,
            //esto es porque la api devuelve array, si fuera string se haría split
            generos: Array.isArray(formDatos.generos)
                ? formDatos.generos
                : formDatos.generos.split(',').map(g => g.trim()),

            actores: Array.isArray(formDatos.actores)
                ? formDatos.actores
                : formDatos.actores.split(',').map(a => a.trim()),

            fechaEstreno: Number(formDatos.fechaEstreno),
            costoInicial: Number(formDatos.costoInicial),
            recaudacion: Number(formDatos.recaudacion),
            duracionMinutos: Number(formDatos.duracionMinutos),
            rentable: false,
        }
        onSubmit(datosParaEnviar);
    }
    function handleChange(e) {
        const { id, value } = e.target;
        setFormDatos({
            ...formDatos,
            [id]: value
        });
    }
    return (
        <>
            <section className="contenedor">
                <form onSubmit={prepararDatos} className="formulario">
                    <div className="contenedorForm">
                        <div className="divForm">
                            <label htmlFor="titulo">Titulo :</label>
                            <input type="text" id="titulo" value={formDatos.titulo} onChange={handleChange} required disabled={!editar} />
                            <label htmlFor="fechaEstreno">fecha de Estreno :</label>
                            <input type="number" id="fechaEstreno" value={formDatos.fechaEstreno} onChange={handleChange} required disabled={!editar} />
                            <label htmlFor="director">Director :</label>
                            <input type="text" id="director" value={formDatos.director} onChange={handleChange} required disabled={!editar} />

                            <label htmlFor="ganadorOscar">ganador del Oscar :</label>
                            <input type="checkbox" id="ganadorOscar" checked={formDatos.ganadorOscar}
                                onChange={(e) => setFormDatos({
                                    ...formDatos,
                                    ganadorOscar: e.target.checked
                                })} disabled={!editar} />

                            <label htmlFor="generos">Generos :</label>
                            <input type="text" id="generos" value={formDatos.generos} onChange={handleChange} required disabled={!editar} />
                            <label htmlFor="costoInicial">costoInicial Inicial :</label>
                            <input type="number" id="costoInicial" value={formDatos.costoInicial} onChange={handleChange} required disabled={!editar} />
                        </div>
                        <div className="divForm">
                            <label htmlFor="recaudacion">Recaudacion :</label>
                            <input type="number" id="recaudacion" value={formDatos.recaudacion} onChange={handleChange} required disabled={!editar} />
                            <label htmlFor="sinopsis">sinopsis :</label>
                            <input type="text" id="sinopsis" value={formDatos.sinopsis} onChange={handleChange} required disabled={!editar} />
                            <label htmlFor="duracionMinutos">Duración en Minutos :</label>
                            <input type="number" id="duracionMinutos" value={formDatos.duracionMinutos} onChange={handleChange} required disabled={!editar} />
                            <label htmlFor="paisOrigen">País de Origen :</label>
                            <input type="text" id="paisOrigen" value={formDatos.paisOrigen} onChange={handleChange} required disabled={!editar} />
                            <label htmlFor="idiomaOriginal">idioma original :</label>
                            <input type="text" id="idiomaOriginal" value={formDatos.idiomaOriginal} onChange={handleChange} required disabled={!editar} />
                            <label htmlFor="actores">Actores :</label>
                            <input type="text" id="actores" value={formDatos.actores} onChange={handleChange} required disabled={!editar} />
                        </div>
                    </div >

                    {modo === "crear" ? (
                        <button type="submit"
                            className="botonesAll">
                            Guardar película
                        </button>
                    ) : (
                        <div className="botones">
                            <button type="button"
                                className="botonesAll"
                                id="editar"
                                onClick={() => setEditar(true)}
                            >
                                Editar
                            </button>

                            {editar &&
                                <button type="submit"
                                    className="botonesAll"
                                    id="guardar"
                                >
                                    Guardar cambios
                                </button>}

                            <button type="button"
                                className="botonesAll"
                                id="eliminar"
                                onClick={() => funcionEliminar(formDatos.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    )}
                </form >
            </section>
        </>
    )
}