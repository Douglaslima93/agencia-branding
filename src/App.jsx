import './App.css'
import Banner from './componentes/Banner'
import Rodape from './componentes/Rodape'
import Topo from './componentes/Topo'
import ExperienciasDeTrabalho from './componentes/ExperienciasDeTrabalho'
import { useState } from 'react'

function App() {

  const [AlterarTema, setAlterarTema] = useState(false)

  const BotaoTema = () => (
    setAlterarTema(!AlterarTema)
  )
  
  return (
    <div className='App'>
    <Topo BotaoTema={BotaoTema} AlterarTema={AlterarTema}/>
    <Banner AlterarTema={AlterarTema}/>
    <ExperienciasDeTrabalho AlterarTema={AlterarTema}/>
    <Rodape AlterarTema={AlterarTema}/>
    </div>
  )
}

export default App
