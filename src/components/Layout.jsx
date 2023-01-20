import { Outlet, Link } from 'react-router-dom';
import  logoCursa  from '../assets/logo-bgwhite.png'
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'

// Styled components

function Layout() {
  return (
    <div className='fixed w-full bg-secondary h-20 shadow-lg'>
      <nav className='h-full flex justify-between items-center mx-20 text-dark font-Lato'>
        <Link to='/'>
          <img className='w-[100px] rounded-md' src={logoCursa} alt="" />
        </Link>
        <Link className='text-lg font-bold block hover:opacity-75' to='/voluntariat'>Voluntaris</Link>
        <Link className='text-lg font-bold block hover:opacity-75' to='/voluntariat'>Recorreguts</Link>
        <Link className='text-lg font-bold block hover:opacity-75' to='/voluntariat'>Reglament</Link>
        <Link className='text-lg font-bold block hover:opacity-75' to='/voluntariat'>Info Útil</Link>
        <Link className='text-lg font-bold block hover:opacity-75' to='/voluntariat'>Inscriu-te</Link>
        <div className='w-1/6 flex justify-around'>
          <FaInstagram size={30} className='cursor-pointer hover:opacity-75'/>
          <FaFacebook size={30} className='cursor-pointer hover:opacity-75' />
          <FaYoutube size={30} className='cursor-pointer hover:opacity-75' />
          <FaEnvelope size={30} className='cursor-pointer hover:opacity-75' />
        </div>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout