import axios from "axios";
import { useEffect, useState } from "react";

export default function useRunGetId(id) {
    const [pelicula,setPelicula] = useState(null);
    const [cargando, setCargando] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/peliculas/${id}`)
            .then((respuesta) => {
                setCargando(false);
                console.log(respuesta.data);
                setPelicula(respuesta.data)
            })
            .catch((error) => {
                console.log(error);
                setCargando(false);
            })
    }, [id]);
    return {pelicula, cargando}
}