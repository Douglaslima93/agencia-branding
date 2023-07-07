import React from 'react'
import './style.css'
import Sun from '../../../public/img/sun.png'
import Moon from '../../../public/img/moon.png'
 
export default function Topo(props) {

    return(
        <header id={props.AlterarTema? 'topo-escuro' : 'topo-claro'} className="topo" >
            <img className="logo" src="./img/logo.png" alt="Logo"/>
            <button onClick={props.BotaoTema} id={props.AlterarTema? 'botao-escuro' : 'botao-claro'} className="botao"><img src={props.AlterarTema? Sun : Moon} alt=""/></button>
        </header>
    )
}