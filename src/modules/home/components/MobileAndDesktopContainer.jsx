import desktopAndMobile from '../../../assets/images/desktopAndMobile.png'

export const MobileAndDesktopHomeContainer = ({Imageorientation,title,li}) => {
    return (
      <div className='mt-8 relative grid grid-cols-2 grid-rows-2 custom-flex-wrap-first-title:grid-cols-1 custom-flex-wrap-first-title:grid-rows-3'>
        <h2 className={`text-responsive-h2 inline-block ${Imageorientation == 'left' ? 'col-start-2 col-end-3' : 'col-start-1 col-end-2'} row-start-1 row-end-2 custom-flex-wrap-first-title:row-start-1 custom-flex-wrap-first-title:row-end-2 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-2 custom-flex-wrap-first-title:pt-96 custom-flex-wrap-little-devices:pt-16`}>{title}</h2>
        <div className={`flex justify-center items-center${Imageorientation == 'left' ? 'col-start-1 col-end-2' : 'col-start-2 col-end-3'} row-start-1 row-end-3 custom-flex-wrap-first-title:row-start-2 custom-flex-wrap-first-title:row-end-3 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-2 custom-flex-wrap-little-devices:-mt-14`}>
          <div className='bg-carne rounded-full p-9 '>
            <img className='h-responsive-height-first-image' src={desktopAndMobile} alt='Desktop and mobile view'></img>
          </div>
        </div>
        <div className={`-m-24 flex justify-center ${Imageorientation == 'left' ? 'col-start-2 col-end-3' : 'col-start-1 col-end-2'} row-start-2 row-end-3 custom-flex-wrap-first-title:row-start-3 custom-flex-wrap-first-title:row-end-4 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-2 custom-flex-wrap-first-title:mt-6`}>
          <ul className={`text-responsive-ul ${Imageorientation == 'left' ? 'text-start' : 'text-end'} custom-flex-wrap-first-title:text-center`}>
            {li}
          </ul>
        </div>
      </div>
    )
  }