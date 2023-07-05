import React from "react";
import './style.css'

export default function Card() {
    return(
        <section className="container-card">

            <div className="card">
                <p>JUNHO 2012 - 2016</p>
                <h3>Web Designer</h3>
                <p>Pied Piper StarUp.</p>
                <span>Criação de Landing Pages, sites institucionais e E-commerces completamente personalizados e 
                    otimizados para buscadores.
                </span>
            </div>

            <div className="card">
                <p>AGOSTO 2016 - 2019</p>
                <h3>Product Designer</h3>
                <p>E Corp.</p>
                <span>Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada
                    de compra.
                </span>
            </div>

            <div className="card">
                <p>FEVEREIRO 2019 - 2021</p>
                <h3>Digital Consulting</h3>
                <p>Arasaka Inc.</p>
                <span>Consultoria em estratégias digital para todas as etapas do ciclo de projeto, desde a definição 
                    inicial até a execução.
                </span>
            </div>
        </section>
    )
}