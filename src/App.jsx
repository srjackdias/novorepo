import { useState } from 'react'

import './App.css'
import UsuarioLogado from './components/UsuarioLogado'
import AreaParaAdultos from './components/AreaParaAdultos'
import EfetueLogin from './components/EfetueLogin'

function App() {
  const [usuario, setUsuario] = useState(false)
  const [idade, setIdade] = useState(0)


//   function usuarioLogou(){

// // '   setUsuario(true);



//   }

  return (
    <>
    <div className='renderContainer'>
       {usuario &&   <UsuarioLogado/>}


      <button onClick={ () => {setUsuario(true)}}>Logar</button>
      <button onClick={ () => {setUsuario(false)}}>deslogar</button>

    </div>

    <div className='renderContainer'>
      <button onClick={() => (setIdade(idade-1))}>-</button>
      
      {idade}

      <button onClick={() => (setIdade(idade+1))}>+</button>
      {idade >= 18 && <AreaParaAdultos />}

      
    </div>


    <div  className='renderContainer'>
      {usuario ? <UsuarioLogado/> : <EfetueLogin/>}
    {/* If else */}

    </div>

     
    </>
  )
}

export default App
