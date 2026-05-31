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
    

    /*
    const fetchData = () => {
        setCargando(true);

        axios.get("http://localhost:3000/api/peliculas")
            .then((res) => {
                setDatos(res.data);
                setCargando(false);
            })
            .catch(console.log);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { datos, cargando, refetch: fetchData };
    */
}