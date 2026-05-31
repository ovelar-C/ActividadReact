import axios from "axios";

export default async function RunPatch(idPeli, datoPreparado){
    try {
        const respuesta = await axios.patch(`http://localhost:3000/api/peliculas/${idPeli}`,datoPreparado)
        return{
            ok : true,
            data : respuesta.data
        }
    } catch (error) {
        console.log(error);
        return{
            ok : false
        }
    }

}