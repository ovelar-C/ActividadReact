import { useState } from "react"
import '../pantallascss/home.css'
import { useNavigate } from "react-router-dom";
import RunPost from "../componentes/RunPost";
import Formulario from "../componentes/Formulario";


export default function Home() {
    const navigate = useNavigate();
    const [mensaje, setMensaje] = useState(null)
    const [resultado, setResultado] = useState(null);
    
    // aca en crearpeli se ejecuta desde el Formulario y aca es donde la pasamos los datos 
    // obtenidos por el form, y aca es tambien donde llamamos a la funcoin 
    // runpost y obtenemos la respuesta
    async function crearPeli(datos) {
        try {
            const response = await RunPost(datos);
            setResultado(response);

            if (response.ok) {
                setMensaje("Pelicula guardado con un exito del 100%");
                setTimeout(() => {
                    setMensaje("");
                    navigate("/listado");

                }, 2000);

            } else {
                setMensaje("Error al guardar los datos D:");
                setTimeout(() => {
                    setMensaje("");
                }, 3000);
            }

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            {mensaje && (
                <div className="alerta">
                    {mensaje}
                </div>
            )}
            <section className="post">
                <h1>Agregar Película</h1>

                {/*componente que le mandamos una funcion*/}
                <Formulario
                    datoInicial={null}
                    onSubmit={crearPeli}
                    modo="crear"
                    editando = {true}
                />
             
            </section>
        </>
    )
}