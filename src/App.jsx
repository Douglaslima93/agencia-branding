import './App.css'
import Banner from './componentes/Banner'
import Rodape from './componentes/Rodape'
import Topo from './componentes/Topo'
import ExperienciasDeTrabalho from './componentes/ExperienciasDeTrabalho'
import Card from './componentes/Card'

function App() {

  return (
    <div className='App'>
    <Topo/>
    <Banner/>
    <ExperienciasDeTrabalho/>
    <Card/>
    <Rodape/>
    </div>
  )
}

export default App
