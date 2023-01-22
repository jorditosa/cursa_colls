import Hero from '../assets/hero.jpg'
import SortidaImg from '../assets/sortida.jpg'
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
        <header className="w-full h-screen bg-fixed pt-12 flex flex-col items-start justify-start font-Poppins" style={{backgroundImage: `url(${SortidaImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className='w-full h-screen text-center font-semibold text-light px-2 py-20 lg:py-10 bg-gradient-to-r from-dark/25 to-secondary/25 shadow-lg'>
            <span className='block text-3xl lg:text-3xl mt-6'>IV Edició</span>
            <h1 className='w-full text-4xl lg:text-8xl mt-6'>La Cursa dels Colls &copy;</h1>
            <h3 className='text-3xl lg:text-4xl mt-6'>09 d'abril del <span>2023</span> </h3>
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