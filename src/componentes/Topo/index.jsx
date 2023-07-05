import React from "react";
import './style.css'

export default function Topo() {
    return(
        <header className="topo">
            <img className="logo" src="./img/logo.png" alt="Logo"/>
            <button className="botao"><img src="./img/moon.png" alt="Moon"/></button>
        </header>
    )
}