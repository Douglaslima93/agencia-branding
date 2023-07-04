import React from "react";
import './style.css'

export default function Rodape() {
    return(
        <footer>
            <img src="./img/logo.png" alt="Logo"/>

            <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando 
                estratégias, ferramentas e tecnologias personalizadas.
            </p>

            <div>
                <a href=""><img src="./img/facebook.png" alt="facebook"/></a>
                <a href=""><img src="./img/twitter.png" alt="twitter"/></a>
                <a href=""><img src="./img/linkedin.png" alt="linkedin"/></a>
                <a href=""><img src="./img/behance.png" alt="behance"/></a>
                <a href=""><img src="./img/dribble.png" alt="dribble"/></a>
                <a href=""><img src="./img/google-plus.png" alt="google-plus"/></a>
            </div>

            <p>Copyright 2023 <span>Douglas Lima</span></p>
        </footer>
    )
}