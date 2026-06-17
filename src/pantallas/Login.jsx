import { useContext, useState } from "react"
import { DatosContextAuth } from "../contexto/AuthContext";

export default function Login(){
    const[userName, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const {login} = useContext(DatosContextAuth);
    return(
        <>
        <h4>super login(solo para admin)</h4>
        <form onSubmit={()=>login(userName,password)}>
            <input placeholder="username" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
            <input placeholder="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>

            <button type="onSubmit">botón</button>
        </form>
        <h3>{userName, password}</h3>
        </>
    )
}