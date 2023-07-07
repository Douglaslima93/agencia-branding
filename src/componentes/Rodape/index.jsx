import React from "react";
import './style.css'

export default function Rodape(props) {
    return(
        <footer id={props.AlterarTema? 'container-rodape-escuro' : 'container-rodape-claro'} className="container-rodape">
            <img src="./img/logo.png" alt="Logo"/>

            <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando 
                estratégias, ferramentas e tecnologias personalizadas.
            </p>

            <div className="icones">
                <a href="https://www.facebook.com/"><img src="./img/facebook.png" alt="facebook"/></a>
                <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Dpt"><img src="./img/twitter.png" alt="twitter"/></a>
                <a href="https://www.linkedin.com/in/douglas-lima-95073aa2/"><img src="./img/linkedin.png" alt="linkedin"/></a>
                <a href="https://www.behance.net/"><img src="./img/behance.png" alt="behance"/></a>
                <a href="https://dribbble.com/tags/login"><img src="./img/dribble.png" alt="dribble"/></a>
                <a href=""><img src="./img/google-plus.png" alt="google-plus"/></a>
            </div>

            <p id="autor-escuro">Copyright 2023 &copy; <span>Douglas Lima</span></p>
        </footer>
    )
}