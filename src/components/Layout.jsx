import { useState, useEffect } from "react";
import {
  MobileNav,
  IconButton,
} from "@material-tailwind/react";
import { Outlet, Link } from "react-router-dom";
import logoCursa from '../assets/logos/logo_cursa.png'
import { FaFacebook, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa'
import { MenuOutline, CloseOutline } from '@styled-icons/evaicons-outline'
 
export default function Layout() {
  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="w-screen h-full lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-y-4 font-Poppins uppercase">
        <Link 
        className='text-lg lg:text-sm font-bold block py-5 text-primary hover:text-secondary' 
        to='/'
        onClick={() => setOpenNav(false)}
        >Inici
        </Link>
        <Link 
        className='text-lg lg:text-sm font-bold block py-5 text-primary hover:text-secondary' 
        to='/voluntariat'
        onClick={() => setOpenNav(false)}
        >Voluntaris
        </Link>
        <Link 
        className='text-lg lg:text-sm font-bold block py-5 text-primary hover:text-secondary' 
        to='/recorreguts'
        onClick={() => setOpenNav(false)}
        >Recorreguts
        </Link>
        <Link 
        className='text-lg lg:text-sm font-bold block py-5 text-primary hover:text-secondary' 
        to='/reglament'
        onClick={() => setOpenNav(false)}
        >Reglament
        </Link>
        <Link 
        className='text-lg lg:text-sm font-bold block py-5 text-primary hover:text-secondary' 
        to='/infoutil'
        onClick={() => setOpenNav(false)}
        >Info Útil
        </Link>
        <a 
        className='text-lg lg:text-sm font-bold block py-5 text-primary hover:text-secondary' 
        target='_blank' 
        href='https://www.sportsform.net/cursacolls/2022/'
        onClick={() => setOpenNav(false)}
        >Inscriu-te</a>
        <div className='w-1/2 lg:w-1/6 flex justify-around py-3'>
          <a target='_blank' href='https://www.instagram.com/cursadelscolls/?hl=es'>
            <FaInstagram size={25} className='cursor-pointer text-primary hover:text-secondary' />
          </a>
          <a target='_blank' href='https://es-es.facebook.com/cursadelscolls/'>
            <FaFacebook size={25} className='cursor-pointer text-primary hover:text-secondary' />
          </a>
          <a target='_blank' href='https://www.youtube.com/channel/UC6hBtUMOnOnqhnMSyvs8q1Q'>
            <FaYoutube size={25} className='cursor-pointer text-primary hover:text-secondary' />
          </a>
          <a target='_blank' href='mailto:cursadelscolls@gmail.com'>
            <FaEnvelope size={25} className='cursor-pointer text-primary hover:text-secondary' />
          </a>
        </div>
    </ul>
  );
 
  return (
    <>
      <nav className="w-screen fixed bg-light z-10 py-1 lg:py-0 shadow-lg shadow-primary">
        <div className="w-full flex items-center justify-between px-5">
          <div className="hidden lg:block">{navList}</div>
          <Link 
          to='/'
          onClick={() => setOpenNav(!openNav)}
          >
            <img className='w-[90px] rounded-sm' src={logoCursa} alt="Logo Cursa" />
          </Link>
          <button
            variant="text"
            className="text-primary block"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <CloseOutline size={50} />
            ) : (
              <MenuOutline size={50} />
            )}
          </button>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </nav>
      <Outlet />
    </>
  );
}