import { Link } from 'react-router-dom'
import logoCursa from '../assets/logos/logo_cursa.png'
import LogoDeporunners from '../assets/logos/L_deporunners.png'
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-dark w-full h-full py-20 text-light font-Poppins">
      <section className="bg-dark w-full mx-auto px-4">
        <div className="py-8 mx-auto w-full lg:max-w-[1000px] lg:py-16">
            <div className="mx-auto w-full text-center">
                <h2 className="mb-4 text-xl tracking-tight font-semibold sm:text-2xl">Subscriu-te per estar al dia de tota la informació de la Cursa i del club</h2>
                <form action="#">
                    <div className="items-center mx-auto mb-3 space-y-4 w-full md:w-1/2 sm:flex sm:space-y-0">
                        <div className="relative w-full">
                            <label htmlFor="email" className="hidden mb-2 text-sm font-medium dark:text-gray-300">El teu email</label>
                            <input className="block text-dark p-3 pl-12 w-full text-sm bg-gray-50 rounded-lg border-2 border-secondary sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Introdueix el teu email" type="email" id="email"/>
                        </div>
                        <div>
                            <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-light rounded-lg cursor-pointer bg-primary border-2 border-secondary sm:rounded-none sm:rounded-r-lg hover:bg-primary-800">Enviar</button>
                        </div>
                    </div>
                    <div className="mx-auto w-full lg:w-1/2 text-xs md:text-md text-left newsletter-form-footer">Tenim present la protecció i seguretat de les dades, i no en fem més ús que el simple enviament d'informació relacionada amb la Cursa dels Cols i el club Esportiu Deporunners, organitzadors de tal esdeveniment. <Link to="/politicapriv" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Llegeix la Política de Privacitat (ESP)</Link>.</div>
                </form>
            </div>
        </div>
      </section>

      <div className='w-full lg:w-[1000px] mx-auto flex flex-col items-center lg:items-end justify-between gap-5 lg:flex-row'>
        <div className='flex flex-col items-center lg:flex-row flex-1 gap-5'>
            <img className='w-[100px] rounded-md' src={logoCursa} alt="logo Cursa" />
            <a href="https://deporunners.cat/">
              <img className='bg-light w-[200px] rounded-md cursor-pointer' src={LogoDeporunners} alt="logo Deporunners" />
            </a>
        </div>
            <p>
            Segueix-nos a les nostres xarxes socials
            </p>
        </div>
        <div className='w-full lg:w-[1000px] mx-auto flex flex-col lg:flex-row gap-4 items-center justify-between border-t mt-6 py-3 text-lg text-center lg:text-start'>
            <h2>La Cursa dels Colls &copy; { new Date().getFullYear() },<br/> Vilanova i la Geltrú</h2>
            <div className='w-1/2 lg:w-1/6 flex justify-around items-end'>
              <FaInstagram size={35} className='cursor-pointer text-light hover:text-secondary'/>
              <FaFacebook size={35} className='cursor-pointer text-light hover:text-secondary' />
              <FaYoutube size={35} className='cursor-pointer text-light hover:text-secondary' />
              <FaEnvelope size={35} className='cursor-pointer text-light hover:text-secondary' />
            </div>
        </div>
    </footer>
  )
}

export default Footer

