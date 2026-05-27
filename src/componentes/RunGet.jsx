import axios from "axios";
import { useEffect, useState } from "react";

export default function useRunGet ( ){
    const [datos, setDatos] = useState([]);
    const [cargando,setCargando] = useState(true);

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/peliculas`)
        .then((respuesta)=>{
        setDatos(respuesta.data);
        setCargando(false);
    })
    .catch((error)=>{
        console.log(error);
    })
},[]);
    return {datos, cargando};
}