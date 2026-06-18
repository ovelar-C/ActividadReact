import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";

export const DatosContextAuth = createContext();

export default function AuthProvider({ children }) {
    const [datosUser, setDatosUser] = useState(JSON.parse(localStorage.getItem("usuario")) || null);
    const navigate = useNavigate();

    function autorizacion(usuario, password) {
        const nuevosDatos = {
            name : usuario,
            password : password,
            rol : usuario === "admin" && password === "1234"
                ? "admin"
                : "lector"
        };
        setDatosUser(nuevosDatos);
        localStorage.setItem("usuario", JSON.stringify(nuevosDatos));
        navigate('/listado');
    }


    function logout() {
        setDatosUser(null)
        localStorage.removeItem("usuario");
    }
    return (
        <>
            <DatosContextAuth.Provider value={{ datosUser, autorizacion, logout }}>
                {children}
            </DatosContextAuth.Provider>
        </>
    )
}