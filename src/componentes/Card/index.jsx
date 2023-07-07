import React from "react";
import './style.css'

export default function Card(props) {
    return(
        <section id={props.AlterarTema? 'texto-experiencias-escuro' : 'texto-experiencias-claro'} className="container-card">

            <div id={props.AlterarTema? 'card-escuro' : 'card-claro'} className="card">
                <p>{props.data}</p>
                <h3>{props.titulo}</h3>
                <p>{props.empresa}</p>
                <span>{props.paragrafo}</span>
            </div>
        </section>
    )
}