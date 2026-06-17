import { createContext, useEffect, useState } from "react";

export const DatosContext = createContext();

export function FavoritosProvider({children}){
    //usestate inicializar como funcion return (()=>{}) esto hace no se actualize en cada render sino una sola vez al levantar el componente
    const [favoritos, setFavoritos] = useState(
        JSON.parse(localStorage.getItem("local")) || []
    );

    //si fav cambia lo guardamos
    useEffect(()=>{
        localStorage.setItem("local", JSON.stringify(favoritos));
    },[favoritos])

    function agregarFavorito(pelicula){
        //aca recibimos un objeto y lo agregamos al arreglo
        console.log("en agregar peli");
        setFavoritos([...favoritos, pelicula]);
    }

    function quitarFavorito(id){
        //aca recibimos un id y filtramos el arreglo
        setFavoritos(favoritos.filter(p => p.id !== id));
    }

    return(
        <>
            <DatosContext.Provider value={{favoritos, setFavoritos, agregarFavorito, quitarFavorito}}>
                {children}
            </DatosContext.Provider>
        </>
    )
}