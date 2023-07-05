import React from "react";
import './style.css'

export default function Banner() {
    return(
        <section className="banner">

            <div className="container-img">
                <img className="img-banner"/>
            </div>

            <div className="texto-banner">
                <p>Branding / UI / UX / Tecnologia</p>
                <h1>Agência de Branding <strong>e design digital</strong></h1>
            </div>
        </section>
    )
}