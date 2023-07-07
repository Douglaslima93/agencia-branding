import React from "react";
import './style.css'
import Card from "../Card";

export default function ExperienciasDeTrabalho(props) {
    return(
        <section id={props.AlterarTema? 'container-experiencias-escuro' : 'container-experiencias-claro'} className="container-experiencias">
            <div className="texto-experiencias">
            <h2 id={props.AlterarTema? 'sub-titulo-escuro' : 'sub-titulo-claro'}>Experiências De Trabalho</h2>
            <p id={props.AlterarTema? 'paragrafo-escuro' : 'paragrafo-claro'}>Há mais de 10 anos no mercado de Branding, Design Gráficos, Criação de Sites e Marketing Digital, 
                nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.
            </p>
            </div>

            <div className="container-card">
            <Card AlterarTema={props.AlterarTema}
            data="JUNHO 2012 - 2016"
            titulo="Web Designer"
            empresa="Pied Piper StarUp."
            paragrafo="Criação de Landing Pages, sites institucionais e E-commerces completamente personalizados e 
            otimizados para buscadores."/>
            

            <Card AlterarTema={props.AlterarTema}
            data="AGOSTO 2016 - 2019"
            titulo="Product Designer"
            empresa="E Corp."
            paragrafo="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada
            de compra."/>

            <Card AlterarTema={props.AlterarTema}
            data="FEVEREIRO 2019 - 2021"
            titulo="Digital Consulting"
            empresa="Arasaka Inc."
            paragrafo="Consultoria em estratégias digital para todas as etapas do ciclo de projeto, desde a definição 
            inicial até a execução."/>

            </div>

        </section>
    )
}