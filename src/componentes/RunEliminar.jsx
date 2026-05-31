import axios from "axios";

export default async function RunEliminar(id){
    console.log("en eliminaar",id);
    try {
        const respuesta = await axios.delete(`http://localhost:3000/api/peliculas/${id}`)
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