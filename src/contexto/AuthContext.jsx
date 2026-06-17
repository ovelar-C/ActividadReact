import { createContext, useState } from "react"
import {useNavigate } from "react-router-dom";


export const DatosContextAuth = createContext();


export default function AuthProvider({children}){
const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")) || null);
const navigate = useNavigate();

function login(usuario,password){
    if(usuario === "admin" && password === "1234"){
        localStorage.setItem("usuario", JSON.stringify(usuario))
        setUsuario(usuario);
        navigate('/listado');
    }
}

function logout(){
    setUsuario(null);
    localStorage.removeItem("usuario");
}
    return(
        <>
            <DatosContextAuth.Provider value={{usuario,login,logout}}>
                {children}
            </DatosContextAuth.Provider>
        </>
    )
}