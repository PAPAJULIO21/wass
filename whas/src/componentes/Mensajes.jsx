import React from "react";
import { useLocation, useNavigate } from 'react-router';


function Mensajes (){
    const location = useLocation();
    const navigate = useNavigate();
    const tiempo = location.state?.item;

    if (!tiempo) return "No hay datos del tiempo de esa ciudad";


    return(
        
        <>
        <h1>{tiempo.contacto}</h1>
        </>

    );
}

export default Mensajes;