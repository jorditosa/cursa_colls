import Hero from '../assets/hero.jpg'
import Inscripcions from './Inscripcions'
import InfoCursa from './InfoCursa'
import Patrocinadors from './Patrocinadors'
import Footer from '../components/Footer'
import  LogoCursa  from '../assets/logo-bgwhite.png'
import { Link } from 'react-router-dom'

function Inici() {

  return (
    <>
      <div className='h-screen'>
        <header className="w-full h-screen bg-fixed pt-12 flex flex-col items-start justify-start font-Poppins" style={{backgroundImage: `url(${Hero})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top'}}>
          <div className='w-full h-screen text-center font-semibold text-light px-2 py-40 lg:py-10 bg-gradient-to-r from-dark/25 to-secondary/50 shadow-lg'>
            <span className='block text-2xl lg:text-4xl mt-6'>IV Edició</span>
            <h1 className='w-full text-3xl lg:text-8xl mt-6'>La Cursa dels Colls <sup>&copy;</sup></h1>
            <h3 className='text-2xl lg:text-4xl mt-6'>02 d'abril del <span>2023</span> </h3>
          </div>
        </header>       
      </div>

      <Inscripcions />
        
      <InfoCursa />

      <Patrocinadors />

      <Footer />
    </>
  )
}

export default Inici