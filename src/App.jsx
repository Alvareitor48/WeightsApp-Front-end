import './App.css'
import logo from '../src/assets/images/Logo.png'
import homeImage from '../src/assets/images/HomeImage.png'
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
        <header className='p-2 rounded-xl bg-lilaPrincipal relative flex justify-between'>
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
          <div className='mt-8 relative flex flex-wrap justify-around'>

            <div className='w-responsive-width text-start custom-flex-wrap-first-title:text-center'>
              <h1 className='text-responsive-h1 inline-block leading-tight'>La web que mejora tus entrenamientos</h1>
              <h4 className='text-responsive-h4 inline-block pt-8'>Maneja tu estilo de vida de la forma correcta con ayuda de expertos en el fitness</h4>
            </div>

            <div className='relative pt-8 pb-8 w-responsive-width'>
              <img className='h-responsive-height-first-image rounded-full m-auto' src={homeImage} alt='Gente haciendo ejercicio'></img>
              <button className='bg-lilaPrincipal pb-1 mt-10 w-responsive-first-button-width h-responsive-first-button-height text-responsive-h4 rounded-xl absolute top -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4'>Empezar</button>
            </div>
            
          </div>
        </main>
        <footer className='p-2 bg-azulFondo'>

        </footer>
      </div>
    </>
  )
}

export default App
