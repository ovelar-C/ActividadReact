import axios from 'axios'

export default async function RunPost(formDatos){
        try {
            const respuesta = await axios.post(`http://localhost:3000/api/peliculas`, formDatos);

            console.log("status :" ,respuesta.status);
            console.log("data", respuesta.data);

            return{
                ok : true,
                status : respuesta.status,
                data : respuesta.data
            }

        } catch (error) {
            console.error("error al crear post", error);
            return{
                ok : false ,
                status : error.respuesta?.status,
                data : error.respuesta?.data
            }
        }
}