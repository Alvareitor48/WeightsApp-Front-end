import { useIconAnimation } from '../hooks/useIconAnimation';
import logo from '../../assets/images/Logo.png'
export const Header = () => {
    const { isActive, isActive2, iconAnime } = useIconAnimation();
    return (
      <header className='p-2 bg-lilaPrincipal relative flex justify-between'>
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