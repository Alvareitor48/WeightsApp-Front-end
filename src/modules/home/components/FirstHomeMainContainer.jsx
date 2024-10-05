import homeImage from '../../../assets/images/HomeImage.png'
export const FirstHomeMainContainer = ()=>{
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