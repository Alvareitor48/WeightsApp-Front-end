import './App.css'
import { Footer } from './core/components/Footer';
import { Header } from './core/components/Header';
import { FirstHomeMainContainer } from './modules/home/components/FirstHomeMainContainer';
import { FunctionsGrid } from './modules/home/components/FunctionsGrid';
import { MobileAndDesktopHomeContainer } from './modules/home/components/MobileAndDesktopContainer';


function App() {
  return (
    <>
      <div className='grid grid-rows-[auto,1fr,auto]'>
        <Header></Header>
        <main className='p-2 bg-custom-gradient'>
          <FirstHomeMainContainer></FirstHomeMainContainer>
          <MobileAndDesktopHomeContainer
            Imageorientation={'left'}
            title={'Controla tus rutinas'}
            li={<><li>Registro de series y repes</li>
              <li>Control preciso del RIR</li>
              <li>Acceso rapido al historial</li>
              <li>Control de las cargas</li>
              <li>Monitoreo de descansos</li></>}>
          </MobileAndDesktopHomeContainer>
          <MobileAndDesktopHomeContainer
            Imageorientation={'right'}
            title={'Prioriza tus objetivos'}
            li={<><li>Calcula tu repeticion maxima</li>
              <li>Conoce tus calorias necesarias</li>
              <li>Busca tu objetivo</li>
              <li>Rutinas personalizadas</li>
              <li>Hechas por profesionales</li></>}>
          </MobileAndDesktopHomeContainer>
          <FunctionsGrid></FunctionsGrid>
          <button className='m-12 mt-42 p-36 pt-12 pb-12 rounded-xl bg-custom-gradient3'>
            <h2 className='text-responsive-h2 inline-block'>Empezar</h2>
          </button>
        </main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
