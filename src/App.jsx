import './App.css'
import logo from '../src/assets/images/Logo.png'
import homeImage from '../src/assets/images/HomeImage.png'
import desktopAndMobile from '../src/assets/images/desktopAndMobile.png'
import { useState } from 'react';

const useIconAnimation = () => {
  const [isActive, setActive] = useState(false);
  const [isActive2, setActive2] = useState(false);
  const iconAnime = () => {
    setActive(true);
    setActive2(!isActive2);
  };
  return { isActive, isActive2, iconAnime }
}
const Header = () => {
  const { isActive, isActive2, iconAnime } = useIconAnimation();
  return (
    <header className='p-2 rounded-xl bg-lilaPrincipal relative flex justify-between'>
      <img className='h-11' src={logo} alt='Weights Technology Logo'></img>
      <div className='bg-lilaPrincipal rounded-full p-2 w-10 h-10'>
        <div className={`flex justify-center flex-row flex-wrap w-6 mt-0.5 anime ${isActive ? '' : 'stop-animation'} ${isActive2 ? 'active' : ''}`} onClick={iconAnime}>
          <div className="line1"> </div>
          <div className="line2"></div>
          <div className="line3"> </div>
        </div>
      </div>
    </header>
  )
}

const FirstHomeMainContainer = ()=>{
  return (
    <div className='mt-8 relative flex flex-wrap justify-around'>
      <div className='w-responsive-width text-start custom-flex-wrap-first-title:text-center'>
        <h1 className='text-responsive-h1 inline-block leading-tight'>La web que mejora tus entrenamientos</h1>
        <h4 className='text-responsive-h4 inline-block pt-8'>Maneja tu estilo de vida de la forma correcta con ayuda de expertos en el fitness</h4>
      </div>
      <div className='relative pt-8 pb-8 w-responsive-width'>
        <img className='h-responsive-height-first-image rounded-full m-auto' src={homeImage} alt='People doing exercise'></img>
        <button className='bg-lilaPrincipal pb-1 mt-10 w-responsive-first-button-width h-responsive-first-button-height text-responsive-h4 rounded-xl absolute top -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4'>Empezar</button>
      </div>
    </div>
  )
}

const MobileAndDesktopHomeContainer = () => {
  return (
    <div className='mt-8 relative grid grid-cols-2 grid-rows-2 custom-flex-wrap-first-title:grid-cols-1 custom-flex-wrap-first-title:grid-rows-3'>
      <h2 className='text-responsive-h2 inline-block col-start-2 col-end-3 row-start-1 row-end-2 custom-flex-wrap-first-title:row-start-1 custom-flex-wrap-first-title:row-end-2 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-2 custom-flex-wrap-first-title:pt-96 custom-flex-wrap-little-devices:pt-16'>Controla tus rutinas</h2>
      <div className='flex justify-center items-center col-start-1 col-end-2 row-start-1 row-end-3 custom-flex-wrap-first-title:row-start-2 custom-flex-wrap-first-title:row-end-3 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-2 custom-flex-wrap-little-devices:-mt-14'>
        <div className='bg-carne rounded-full p-9 '>
          <img className='h-responsive-height-first-image' src={desktopAndMobile} alt='Desktop and mobile view'></img>
        </div>
      </div>
      <div className='-m-24 flex justify-center col-start-2 col-end-3 row-start-2 row-end-3 custom-flex-wrap-first-title:row-start-3 custom-flex-wrap-first-title:row-end-4 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-2 custom-flex-wrap-first-title:mt-6'>
        <ul className='text-responsive-ul text-start custom-flex-wrap-first-title:text-center'>
          <li>Registro de series y repes</li>
          <li>Control preciso del RIR</li>
          <li>Acceso rapido al historial</li>
          <li>Control de las cargas</li>
          <li>Monitoreo de descansos</li>
        </ul>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <div className='grid grid-rows-[auto,1fr,auto]'>
        <Header></Header>
        <main className='p-2 bg-azulFondo'>
          <FirstHomeMainContainer></FirstHomeMainContainer>
          <MobileAndDesktopHomeContainer></MobileAndDesktopHomeContainer>
        </main>
        <footer className='p-2 bg-azulFondo'>

        </footer>
      </div>
    </>
  )
}

export default App
