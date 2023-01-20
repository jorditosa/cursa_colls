import  logoCursa  from '../assets/logo-bgwhite.png'
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-dark w-full h-full py-20 text-light font-Poppins">
        <div className='w-full md:w-[1000px] mx-auto flex flex-col items-center justify-between gap-5 md:flex-row'>
            <img className='w-[100px] rounded-md' src={logoCursa} alt="logo Cursa" />
            <div className='w-1/2 md:w-1/6 flex justify-around items-end'>
              <FaInstagram size={30} className='cursor-pointer text-light hover:text-secondary'/>
              <FaFacebook size={30} className='cursor-pointer text-light hover:text-secondary' />
              <FaYoutube size={30} className='cursor-pointer text-light hover:text-secondary' />
              <FaEnvelope size={30} className='cursor-pointer text-light hover:text-secondary' />
            </div>
        </div>
        <div className='w-full md:w-[1000px] mx-auto flex flex-col items-center justify-between md:flex-row border-t mt-5 py-3 text-lg'>
            <h2>La Cursa dels Colls &copy; { new Date().getFullYear() }, Vilanova i la Geltrú</h2>
            <p>Política privacitat</p>
            <p>Política cookies</p>
        </div>
    </footer>
  )
}

export default Footer

