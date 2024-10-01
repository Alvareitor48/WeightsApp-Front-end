import './App.css'
import logo from '../src/assets/images/Logo.png'
import { useState } from 'react';




function App() {
  const [isActive,setActive] = useState(false);
  const [isActive2,setActive2] = useState(false);
  function iconAnime() {
    setActive(true);
    setActive2(!isActive2);
};
  return (
    <>
      <div className='grid grid-rows-[auto,1fr,auto]'>
        <header className='p-2 bg-azulFondo relative flex justify-between'>
          <img className='h-11' src={logo} alt='Logo Weights Technology'></img>
          <div className='bg-lilaPrincipal rounded-full p-2 w-10 h-10'>
            <div className={`flex justify-center flex-row flex-wrap w-6 mt-0.5 anime ${isActive ? '' : 'stop-animation'} ${isActive2 ? 'active' : ''}`} onClick={iconAnime}>
              <div className="line1"> </div>
              <div className="line2"></div>
              <div className="line3"> </div>
            </div>
          </div>
        </header>
        <main className='p-2 bg-azulFondo'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sapiente! Quia laudantium nihil aut fugit. Reiciendis ullam deserunt libero, quod dolorem magnam aut blanditiis non amet iure minus repellendus maxime!
        </main>
        <footer className='p-2 bg-azulFondo'>

        </footer>
      </div>
    </>
  )
}

export default App
