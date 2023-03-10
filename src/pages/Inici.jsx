import Hero from '../assets/hero.jpg'
import Inscripcions from './Inscripcions'
import InfoCursa from './InfoCursa'
import Patrocinadors from './Patrocinadors'
import Footer from '../components/Footer'
import  LogoCursa  from '../assets/logo-bgwhite.png'


function Inici() {

  return (
    <>
      <div className='h-screen'>
        <header className="w-full h-screen bg-local pt-12 flex flex-col items-start justify-start font-Poppins" style={{backgroundImage: `url(${Hero})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'top'}}>
          <div className='w-full h-screen text-center font-bold text-light px-2 py-40 lg:py-5 bg-gradient-to-t from-light/5 to-dark/75 shadow-lg'>
            <span className='block text-5xl lg:text-8xl mt-6'>IX edició</span>
            <h1 className='w-full text-6xl lg:text-8xl mt-6'>Cursa dels Colls <sup>&copy;</sup></h1>
            <h3 className='text-4xl lg:text-6xl mt-6'>2 d'abril del <span>2023</span> </h3>
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