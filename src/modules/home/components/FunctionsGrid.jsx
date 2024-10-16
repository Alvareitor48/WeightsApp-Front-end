import buscarRutina from '../../../assets/images/buscarRutina.png'
export const FunctionsGrid = ()=>{
    return(
      <div className='mt-8 pl-28 pr-28 relative grid grid-cols-3 grid-rows-3 custom-flex-wrap-first-title:grid-cols-2 custom-flex-wrap-first-title:grid-rows-4 custom-flex-wrap-first-title:pl-14 custom-flex-wrap-first-title:pr-14 custom-flex-wrap-little-devices:pl-2 custom-flex-wrap-little-devices:pr-2'>
              <div className='m-2 p-16 rounded-xl bg-custom-gradient3 col-start-1 col-end-3 row-start-1 row-end-2 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-3 custom-flex-wrap-first-title:row-start-1 custom-flex-wrap-first-title:row-end-2'>
              <h2 className='text-responsive-h2 inline-block'>Crea tu rutina</h2>
              </div>
              <div className='m-2 p-2 rounded-xl bg-custom-gradient4 col-start-1 col-end-2 row-start-2 row-end-3 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-2 custom-flex-wrap-first-title:row-start-2 custom-flex-wrap-first-title:row-end-3'>
              <h2 className='text-responsive-h2 inline-block'>1RM</h2>
              </div>
              <div className='m-2 p-2 rounded-xl bg-custom-gradient5 col-start-2 col-end-3 row-start-2 row-end-3 custom-flex-wrap-first-title:col-start-2 custom-flex-wrap-first-title:col-end-3 custom-flex-wrap-first-title:row-start-2 custom-flex-wrap-first-title:row-end-3'>
              <h2 className='text-responsive-h2 inline-block'>Calorias</h2>
              </div>
              <div className='relative m-2 rounded-xl bg-custom-gradient4 col-start-3 col-end-4 row-start-1 row-end-3 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-3 custom-flex-wrap-first-title:row-start-3 custom-flex-wrap-first-title:row-end-4'>
              <h2 className='text-azulFondo text-shadow-md absolute right-0 w-[100%] text-responsive-h2 inline-block z-10'>Busca la rutina perfecta</h2>
              <img className='h-[100%] m-auto' src={buscarRutina} alt='Buscar rutina'></img>
              </div>
              <div className='m-2 p-2 rounded-xl bg-custom-gradient3 col-start-1 col-end-4 row-start-3 row-end-4 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-3 custom-flex-wrap-first-title:row-start-4 custom-flex-wrap-first-title:row-end-5'>
              <h2 className='text-responsive-h2 inline-block'>Tutorial de ejercicios</h2>
              </div>
            </div>
    )
}