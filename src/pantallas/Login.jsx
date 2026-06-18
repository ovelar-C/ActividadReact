import { useContext, useState } from "react"
import { DatosContextAuth } from "../contexto/AuthContext";

export default function autorizacion(){
    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const {autorizacion} = useContext(DatosContextAuth);
    return(
        <>
        <h4>super autorizacion(solo para admin)</h4>
        <form onSubmit={()=>autorizacion(userName,password)}>
            <input placeholder="username" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
            <input placeholder="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

            <button type="onSubmit">botón</button>
        </form>
        <h3>{userName}</h3>
        <h3>{password}</h3>

        </>
    )
}