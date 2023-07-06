import React, { useState } from "react";
import './style.css'

export default function Topo() {

    const [AlterarTema , setAlterarTema] = useState(true)

    const BotaoTema = () => {
        setAlterarTema('')
    }

    return(
        <header className="topo">
            <img className="logo" src="./img/logo.png" alt="Logo"/>
            <button onClick={BotaoTema} className="botao botao-dark"><img src="./img/moon.png" alt="Moon"/></button>
        </header>
    )
}