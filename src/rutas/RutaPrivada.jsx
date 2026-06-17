import { useContext } from "react";
import { DatosContextAuth } from "../contexto/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function RutaPrivada(){
    const {usuario} = useContext(DatosContextAuth);
    if(!usuario){
        return <Navigate to="/login" replace/>
    }
    return <Outlet/>
}