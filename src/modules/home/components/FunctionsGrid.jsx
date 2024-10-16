import { motion } from 'framer-motion'
import buscarRutina from '../../../assets/images/buscarRutina.png'
import rm from '../../../assets/images/rm.png'
import calorias from '../../../assets/images/calorias3.png'
import tutorialesGif from '../../../assets/images/tutorialesGif.gif'
import tutorialesImg from '../../../assets/images/tutorialesImg.png'
import { useState } from 'react'

export const FunctionsGrid = () => {
  const [isHover, setHover] = useState(false);
  return (
    <div className='mt-40 pl-28 pr-28 relative grid grid-cols-3 grid-rows-3 custom-flex-wrap-first-title:grid-cols-2 custom-flex-wrap-first-title:grid-rows-4 custom-flex-wrap-first-title:pl-14 custom-flex-wrap-first-title:pr-14 custom-flex-wrap-little-devices:pl-2 custom-flex-wrap-little-devices:pr-2'>
      <motion.div className='m-2 p-16 rounded-xl bg-custom-gradient3 col-start-1 col-end-3 row-start-1 row-end-2 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-3 custom-flex-wrap-first-title:row-start-1 custom-flex-wrap-first-title:row-end-2'
        whileHover={{ scale: 1.02, cursor: 'pointer' }}
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{
          margin: "-20px",
          once: true
        }}
      >
        <h2 className='text-responsive-h2 inline-block'>Crea tu rutina</h2>
      </motion.div>
      <motion.div className='m-2 p-2 rounded-xl col-start-1 col-end-2 row-start-2 row-end-3 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-2 custom-flex-wrap-first-title:row-start-2 custom-flex-wrap-first-title:row-end-3'
        style={{ backgroundImage: `url(${rm})`, backgroundSize: 'cover' }}
        whileHover={{ scale: 1.02, cursor: 'pointer' }}
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{
          margin: "-20px",
          once: true
        }}
      >
        <h2 className='text-responsive-h2 text-shadow-md inline-block'>1RM</h2>
      </motion.div>
      <motion.div className='m-2 p-2 rounded-xl bg-custom-gradient5 col-start-2 col-end-3 row-start-2 row-end-3 custom-flex-wrap-first-title:col-start-2 custom-flex-wrap-first-title:col-end-3 custom-flex-wrap-first-title:row-start-2 custom-flex-wrap-first-title:row-end-3'
        style={{ backgroundImage: `url(${calorias})`, backgroundSize: 'cover' }}
        whileHover={{ scale: 1.02, cursor: 'pointer' }}
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{
          margin: "-20px",
          once: true
        }}
      >
        <h2 className='text-responsive-h2 inline-block text-azulFondo text-shadow-md'>Calorias</h2>
      </motion.div>
      <motion.div className='relative m-2 rounded-xl bg-custom-gradient4 col-start-3 col-end-4 row-start-1 row-end-3 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-3 custom-flex-wrap-first-title:row-start-3 custom-flex-wrap-first-title:row-end-4'
        whileHover={{ scale: 1.02, cursor: 'pointer' }}
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{
          margin: "-20px",
          once: true
        }}
      >
        <h2 className='text-azulFondo text-shadow-md absolute right-0 w-[100%] text-responsive-h2 inline-block z-10'>Busca la rutina perfecta</h2>
        <img className='h-[100%] m-auto' src={buscarRutina} alt='Buscar rutina'></img>
      </motion.div>
      <motion.div className='overflow-hidden relative m-2 p-2 rounded-xl bg-custom-gradient3 col-start-1 col-end-4 row-start-3 row-end-4 custom-flex-wrap-first-title:col-start-1 custom-flex-wrap-first-title:col-end-3 custom-flex-wrap-first-title:row-start-4 custom-flex-wrap-first-title:row-end-5'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        whileHover={{ scale: 1.02, cursor: 'pointer' }}
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{
          margin: "-20px",
          once: true
        }}
      >
        <h2 className='text-shadow-md absolute right-0 w-[100%] text-responsive-h2 inline-block z-10'>Tutorial de ejercicios</h2>
        <motion.img className='h-[100%] m-auto'
          src={(isHover ? tutorialesGif : tutorialesImg)}
          alt='Buscar rutina'
          transition={{ duration: 0.3 }}
        ></motion.img>
      </motion.div>
    </div>
  )
}