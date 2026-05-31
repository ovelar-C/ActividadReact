import { use, useEffect, useState } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import '../pantallascss/detalle.css';
import RunGetId from "../componentes/useRunGetId";
import Formulario from "../componentes/Formulario";
import RunPatch from "../componentes/RunPatch";
import RunEliminar from "../componentes/RunEliminar";

export default function Detalle() {
    const { id } = useParams();
    //me trae con id y rentable
    const { pelicula, cargando } = RunGetId(id);

    //const [cargando, setCargando] = useState(true);
    //const [pelicula, setPelicula] = useState(null);
    const [dicotomia, setDicotomia] = useState(null);
    //form datos ahora tiene los datos de la peli
    const [formDatos, setFormDatos] = useState(pelicula);
    const [mensaje, setMensaje] = useState(null);
    const [editandoAhora, setEditandoAhora] = useState(false);
    const [peliActual, setPeliActual] = useState(null);

    const navigate = useNavigate();

    /*
        obtengo de Listado el id por useParams, y se lo paso a un hook getID,
        este hook me devuelve la peli y la muestro acá
    */
    //useEffect renderiza si cambia "pelicula"
    useEffect(()=>{
        setPeliActual(pelicula);
    },[pelicula]);

    async function editarPeli(dato) {

        const idPeli = dato.id;
        const { id, ...datoPreparado } = dato;

        console.log("holaaaaaaa en EditarPeli");

        const respuesta = await RunPatch(idPeli, datoPreparado);
        if (respuesta.ok) {
            setMensaje("Pelicula guardado con un exito del 100%");
            setTimeout(() => {
                setMensaje("");
                navigate("/listado");

            }, 2000);
            setFormDatos(respuesta.data);
        } else {
            setMensaje("Error al guardar los datos D:");
            setTimeout(() => {
                setMensaje("");
            }, 3000);
        }
    }

    async function eliminarfuncion(id) {
        if (window.confirm("¿Está usted completamente seguro de Eliminar la Siguiente Película?") && id) {
            console.log("en eliminarfuncion");
            const respuesta = await RunEliminar(id);
            if (respuesta.ok) {
                setFormDatos(null);
                setPeliActual(null)

                setMensaje("Pelicula eliminado con un exito del 100%");
                setTimeout(() => {
                    setMensaje("");
                    navigate("/listado");

                }, 2000);
            }
            else {
                setMensaje("Error al eliminar pelicula:");
                setTimeout(() => {
                    setMensaje("");
                    navigate("/listado");
                }, 3000);
            }
        } else {
            console.log("negativa de eliminar pelicula");

        }
    }
        /*
    if(!peliActual)
        return <h2>pelicula eliminada</h2>
    */
   
    return (
        <>
            <section className="detalle">

                {mensaje && (
                    <div className="alerta">
                        {mensaje}
                    </div>
                )}
                {cargando && (
                    <h3>cargando datos...</h3>
                )}

                <h1 className="titulo">Editar y Eliminar</h1>
               
                {peliActual ? (

                     <div className="datoId">
                        <h4>• ID {peliActual.id}</h4>
                    
                    <Formulario
                        datoInicial={peliActual}
                        onSubmit={editarPeli}
                        funcionEliminar={eliminarfuncion}
                        modo="editar"
                        editando={editandoAhora}
                    />
                    </div>
                ):(
                     <h3>sin datos</h3>
                )
                }
            </section>
        </>
    )
}