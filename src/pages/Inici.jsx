import Hero from '../assets/hero.jpg'
import Patrocinadors from './Patrocinadors'
import Footer from '../components/Footer'
import { FaListOl, FaRunning, FaPhotoVideo, FaMedal } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Inici() {

  return (
    <>
      <div className='h-screen'>
        <header className="w-full h-screen bg-local flex flex-col items-center justify-center font-Lato" style={{backgroundImage: `url(${Hero})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className='w-full text-center font-bold text-light py-10 mt-20'>
            <h1 className='w-full text-4xl md:text-8xl mt-5 rounded-b-lg'>La Cursa dels Colls</h1>
            <span className='block text-xl md:text-3xl mt-5'>9a Edició</span>
            <h3 className='text-xl md:text-3xl mt-5'>09 d'abril del <span>2023</span></h3>
          </div>
        </header>       
      </div>

      <section className="max-w-[1000px] mx-auto grid md:grid-cols-2 justify-items-center gap-10 py-20">
        <div className="mx-5 bg-white bg-light shadow-lg shadow-primary/50 rounded-lg flex flex-col md:flex-row items-center">
          <FaListOl size={60} className='w-1/5 text-primary'/>
          <div className="w-4/5 p-5">
            <h3 className="text-dark text-3xl pb-2">
              Classificacions
            </h3>
            <p className="text-dark font-medium text-lg">Desde aquest enllaç podeu accedir directament a <a target='_blank' className='text-primary' href="">consulta les classificacions</a> oficials de les últimes edicions. 
            </p>
          </div>
        </div>

        <div className="mx-5 bg-white bg-light shadow-lg shadow-primary/50 rounded-lg flex flex-col md:flex-row items-center">
          <FaRunning size={60} className='w-1/5 text-primary'/>
          <div className="w-4/5 p-5">
            <h3 className="text-dark text-3xl pb-2">
              La Cursa
            </h3>
            <p className="text-dark font-medium text-lg">Us deixem una breu explicació de que és la Cursa dels Colls i com vàrem començar a liar-nos per preparar-vos una marevallosa prova esportiva al nostre entorn dels Colls Mirapleix. 
            </p>
          </div>
        </div>

        <div className="mx-5 bg-white bg-light shadow-lg shadow-primary/50 rounded-lg flex flex-col md:flex-row items-center">
          <FaPhotoVideo size={60} className='w-1/5 text-primary'/>
          <div className="w-4/5 p-5">
            <h3 className="text-dark text-3xl pb-2">
              Fotogaleria
            </h3>
            <p className="text-dark font-medium text-lg">No pot faltar la secció que tot bon trail runner necessita tenir, i son totes les fotos on segurament surtiu estupendos/as i amb cara de anar super bé!.. 
            </p>
          </div>
        </div>

        <div className="mx-5 bg-white bg-light shadow-lg shadow-primary/50 rounded-lg flex flex-col md:flex-row items-center">
          <FaMedal size={60} className='w-1/5 text-primary'/>
          <div className="w-4/5 p-5">
            <h3 className="text-dark text-3xl pb-2">
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