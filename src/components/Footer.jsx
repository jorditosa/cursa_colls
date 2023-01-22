import  logoCursa  from '../assets/logo-bgwhite.png'
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-dark w-full h-full py-20 text-light font-Poppins">
      <section className="bg-dark w-full mx-auto px-4">
        <div className="py-8 mx-auto w-full lg:max-w-[1000px] lg:py-16">
            <div className="mx-auto w-full text-center">
                <h2 className="mb-4 text-xl tracking-tight font-semibold sm:text-2xl">Subscriu-te per estar al dia de tota la informació de la Cursa i del club</h2>
                <form action="#">
                    <div className="items-center mx-auto mb-3 space-y-4 w-full md:max-w-[500px] sm:flex sm:space-y-0">
                        <div className="relative w-full">
                            <label for="email" className="hidden mb-2 text-sm font-medium dark:text-gray-300">El teu email</label>
                            <div className="flex absolute bg-primary inset-y-0 left-0 items-center px-2 pointer-events-none rounded-l-md">
                                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                            </div>
                            <input className="block text-dark p-3 pl-12 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Introdueix el teu email" type="email" id="email" required="" />
                        </div>
                        <div>
                            <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-light rounded-lg border cursor-pointer bg-primary sm:rounded-none sm:rounded-r-lg hover:bg-primary-800">Enviar</button>
                        </div>
                    </div>
                    <div className="mx-auto w-full lg:max-w-[1000px] text-sm md:text-md text-left newsletter-form-footer">Tenim present la protecció i seguretat de les dades, i no en fem més ús que el simple enviament d'informaciño relacionada amb la Cursa dels Cols i el club Esportiu Deporunners, organitzadors de tal esdeveniment. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Llegeix la Política de Privacitat</a>.</div>
                </form>
            </div>
        </div>
      </section>

      <div className='w-full lg:w-[1000px] mx-auto flex flex-col items-center justify-between gap-5 lg:flex-row'>
            <img className='w-[100px] rounded-md' src={logoCursa} alt="logo Cursa" />
            <div className='w-1/2 lg:w-1/6 flex justify-around items-end'>
              <FaInstagram size={30} className='cursor-pointer text-light hover:text-secondary'/>
              <FaFacebook size={30} className='cursor-pointer text-light hover:text-secondary' />
              <FaYoutube size={30} className='cursor-pointer text-light hover:text-secondary' />
              <FaEnvelope size={30} className='cursor-pointer text-light hover:text-secondary' />
            </div>
        </div>
        <div className='w-full lg:w-[1000px] mx-auto flex flex-col gap-4 items-center justify-between lg:flex-row border-t mt-6 py-3 text-lg text-center lg:text-start'>
            <h2>La Cursa dels Colls &copy; { new Date().getFullYear() },<br/> Vilanova i la Geltrú</h2>
        </div>
    </footer>
  )
}

export default Footer

