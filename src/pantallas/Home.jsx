import { useState } from "react"
import '../pantallascss/home.css'
import { useNavigate } from "react-router-dom";
import RunPost from "../componentes/RunPost";


export default function FormPost() {
    const navigate = useNavigate();
    const [mensaje, setMensaje] = useState(null)
    const [resultado, setResultado] = useState(null);
    const [formDatos, setFormDatos] = useState({
        titulo: "",
        fechaEstreno: "",
        director: "",
        ganadorOscar: false,
        generos: "",
        costoInicial: "",
        recaudacion: "",
        sinopsis: "",
        duracionMinutos: "",
        paisOrigen: "",
        idiomaOriginal: "",
        actores: "",
    });

    async function runPost(e) {
        e.preventDefault();

        //preparamos lo campos y lo convertimos al tipo de dato que debe ser
        const datosParaEnviar = {
        ...formDatos,
        generos: formDatos.generos.split(',').map(g => g.trim()),
        actores: formDatos.actores.split(',').map(a => a.trim()),
        fechaEstreno: Number(formDatos.fechaEstreno),
        costoInicial: Number(formDatos.costoInicial),
        recaudacion: Number(formDatos.recaudacion),
        duracionMinutos: Number(formDatos.duracionMinutos),
    }
        try {
            const response = await RunPost(datosParaEnviar);
            setResultado(response);

            if(response.ok){
                setMensaje("Pelicula guardado con un exito del 100%");
                setTimeout(()=>{
                    setMensaje("");
                    navigate("/listado");

                },2000);

            }else{
                setMensaje("Error al guardar los datos D:");
                setTimeout(()=>{
                    setMensaje("");
                },3000);
            }

        } catch (error) {
            console.log(error);
        }
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
            {mensaje && (
                <div className="alerta">
                    {mensaje}
                </div>
            )}
            <section className="post">
                <form onSubmit={runPost} className="contenedor-post">
                    <h1>Agregar Película</h1>
                    <div className="inputs-form">
                        <div>
                            <label htmlFor="titulo">Titulo :</label>
                            <input type="text" id="titulo" value={formDatos.titulo} onChange={handleChange} />
                            <label htmlFor="fechaEstreno">fecha de Estreno :</label>
                            <input type="number" id="fechaEstreno" value={formDatos.fechaEstreno} onChange={handleChange} />
                            <label htmlFor="director">Director :</label>
                            <input type="text" id="director" value={formDatos.director} onChange={handleChange} />

                            <label htmlFor="ganadorOscar">ganador del Oscar :</label>
                            <input type="checkbox" id="ganadorOscar" checked={formDatos.ganadorOscar} 
                            onChange={(e)=> setFormDatos({
                                ...formDatos,
                                ganadorOscar: e.target.checked
                            })} />

                            <label htmlFor="generos">Generos :</label>
                            <input type="text" id="generos" value={formDatos.generos} onChange={handleChange} />
                            <label htmlFor="costoInicial">costoInicial Inicial :</label>
                            <input type="number" id="costoInicial" value={formDatos.costoInicial} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="recaudacion">Recaudacion :</label>
                            <input type="number" id="recaudacion" value={formDatos.recaudacion} onChange={handleChange} />
                            <label htmlFor="sinopsis">sinopsis :</label>
                            <input type="text" id="sinopsis" value={formDatos.sinopsis} onChange={handleChange} />
                            <label htmlFor="duracionMinutos">Duración en Minutos :</label>
                            <input type="number" id="duracionMinutos" value={formDatos.duracionMinutos} onChange={handleChange} />
                            <label htmlFor="paisOrigen">País de Origen :</label>
                            <input type="text" id="paisOrigen" value={formDatos.paisOrigen} onChange={handleChange} />
                            <label htmlFor="idiomaOriginal">idioma original :</label>
                            <input type="text" id="idiomaOriginal" value={formDatos.idiomaOriginal} onChange={handleChange} />
                            <label htmlFor="actores">Actores :</label>
                            <input type="text" id="actores" value={formDatos.actores} onChange={handleChange} />
                        </div>
                    </div>

                    <button type="submit"
                        className="botonesAll">
                        guardar pelicula
                    </button>
                </form>
            </section>
        </>
    )
}