import Hero from '../assets/hero.jpg'
import SortidaImg from '../assets/sortida.jpg'
import Patrocinadors from './Patrocinadors'
import Footer from '../components/Footer'
import { FaListOl, FaRunning, FaPhotoVideo, FaMedal } from 'react-icons/fa'
import  LogoCursa  from '../assets/logo-bgwhite.png'
import { Link } from 'react-router-dom'

function Inici() {

  return (
    <>
      <div className='h-screen'>
        <header className="w-full h-screen bg-fixed pt-12 flex flex-col items-start justify-start font-Poppins" style={{backgroundImage: `url(${SortidaImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className='w-full h-auto text-center font-semibold text-light px-2 py-20 lg:py-10 bg-gradient-to-r from-dark/75 to-secondary/75 shadow-lg shadow-light'>
            <span className='block text-3xl lg:text-3xl mt-6'>IV Edició</span>
            <h1 className='w-full text-4xl lg:text-8xl mt-6'>La Cursa dels Colls &copy;</h1>
            <h3 className='text-3xl lg:text-4xl mt-6'>09 d'abril del <span>2023</span> </h3>
          </div>
        </header>       
      </div>

      <section className="max-w-[1000px] mx-auto lg:py-20 divide-y-4 divide-secondary">
        <div className="bg-light h-[300px] shadow-lg shadow-primary/50 rounded-t-lg flex flex-col lg:flex-row items-center justify-center">
          <FaListOl size={60} className='w-1/5 text-primary hover:text-primary/50'/>
          <div className="w-4/5 lg:p-5">
            <h3 className="text-center font-bold py-3 lg:text-start text-dark text-3xl pb-2">
              Classificacions
            </h3>
            <p className="text-dark font-medium text-lg">Desde aquest enllaç podeu accedir directament a <a target='_blank' className='text-primary' href="">consulta les classificacions</a> oficials de les últimes edicions. 
            </p>
          </div>
        </div>

        <div className="bg-light h-[300px] shadow-lg shadow-primary/50 flex flex-col lg:flex-row items-center justify-center">
          <FaRunning size={60} className='w-1/5 text-primary hover:text-primary/50'/>
          <div className="w-4/5 lg:p-5">
            <h3 className="text-center font-bold py-3 lg:text-start text-dark text-3xl pb-2">
              La Cursa
            </h3>
            <p className="text-dark font-medium text-lg">Us deixem una breu explicació de que és la Cursa dels Colls i com vàrem començar a liar-nos per preparar-vos una marevallosa prova esportiva al nostre entorn dels Colls Mirapleix. 
            </p>
          </div>
        </div>

        <div className="bg-light h-[300px] shadow-lg shadow-primary/50 flex flex-col lg:flex-row items-center justify-center">
          <FaPhotoVideo size={60} className='w-1/5 text-primary hover:text-primary/50'/>
          <div className="w-4/5 lg:p-5">
            <h3 className="text-center font-bold py-3 lg:text-start text-dark text-3xl pb-2">
              Fotogaleria
            </h3>
            <p className="text-dark font-medium text-lg">No pot faltar la secció que tot bon trail runner necessita tenir, i son totes les fotos on segurament surtiu estupendos/as i amb cara de anar super bé!.. 
            </p>
          </div>
        </div>

        <div className="bg-light h-[300px] shadow-lg shadow-primary/50 flex flex-col lg:flex-row items-center justify-center rounded-b-lg">
          <FaMedal size={60} className='w-1/5 text-primary hover:text-primary/50'/>
          <div className="w-4/5 lg:p-5">
            <h3 className="text-center font-bold py-3 lg:text-start text-dark text-3xl pb-2">
              Patrocinadors/es
            </h3>
            <p className="text-dark font-medium text-lg">I especial menció als nostres patrocinadors i col·laboradors, sense ells no podrieu gaudir d'una autèntica Cursa en un paratge natural com els dels Colls Miralpeix. 
            </p>
          </div>
        </div>
      </section>
        
      <section className='relative overflow-x-auto shadow-md bg-primary text-light py-20'>
        <h3 className="text-center text-3xl">Inscripcions</h3>
        <div className="flex flex-col justify-center items-center max-w-[1000px] mx-auto">
          <div className="w-full py-5">
            <div className="overflow-hidden">
              <table className="w-full text-center">
                <thead className="border-b bg-light text-primary">
                  <tr>
                    <th scope="col" className="text-2xl font-medium px-6 py-4">
                      # la Curta
                    </th>
                    <th scope="col" className="text-2xl font-medium px-6 py-4">
                    # la Llarga
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="text-3xl font-medium px-6 py-4">
                      12 €
                    </td>
                    <td className="text-3xl font-medium px-6 py-4">
                      15 €
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td colSpan="2" className="text-xl px-6 py-4 text-center">
                      Periode d'inscripcions: Del 01 de febrer al 6 d'abril del 2023
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
      </section>

      <Patrocinadors />

      <Footer />
    </>
  )
}

export default Inici