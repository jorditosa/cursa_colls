import { Outlet, Link } from 'react-router-dom';
import  logoCursa  from '../assets/logo-bgwhite.png'
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'


// Styled components

function Layout() {
  return (
    <div className='w-full'>
      <nav className='w-screen fixed z-10 h-auto py-2 md:px-20 bg-light flex flex-col md:flex-row justify-between items-center text-dark font-Lato shadow-lg'>
        <Link to='/'>
          <img className='w-[100px] rounded-md' src={logoCursa} alt="" />
        </Link>
        <Link className='text-lg font-bold block text-primary hover:text-secondary' to='/voluntariat'>Voluntaris</Link>
        <Link className='text-lg font-bold block text-primary hover:text-secondary' to='/voluntariat'>Recorreguts</Link>
        <Link className='text-lg font-bold block text-primary hover:text-secondary' to='/voluntariat'>Reglament</Link>
        <Link className='text-lg font-bold block text-primary hover:text-secondary' to='/voluntariat'>Info Útil</Link>
        <Link className='text-lg font-bold block text-primary hover:text-secondary' to='/voluntariat'>Inscriu-te</Link>
        <div className='w-1/6 flex justify-around'>
          <FaInstagram size={30} className='cursor-pointer text-primary hover:text-secondary'/>
          <FaFacebook size={30} className='cursor-pointer text-primary hover:text-secondary' />
          <FaYoutube size={30} className='cursor-pointer text-primary hover:text-secondary' />
          <FaEnvelope size={30} className='cursor-pointer text-primary hover:text-secondary' />
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout