import React from "react";
import './style.css'

export default function Banner(props) {
    return(
        <section className="banner">

            <div id={props.AlterarTema? 'img-banner-escuro' : 'img-banner-claro'} className="img-banner"></div>

            <div className="texto-banner">
                <p>Branding / UI / UX / Tecnologia</p>
                <h1>Agência de Branding <strong>e Design digital</strong></h1>
            </div>
        </section>
    )
}