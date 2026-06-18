import { useContext } from "react";
import { DatosContextAuth } from "../contexto/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Denegado from "../componentes/Denegado";
export default function RutaPrivada(){
    const {datosUser} = useContext(DatosContextAuth);
    console.log("ruta privada");
    if(!datosUser){
        return <Navigate to="/login" replace/>
    }
    if(datosUser.rol !== "admin"){
        return <Denegado/>
    }
    return <Outlet/>
}