import { useState } from "react"
import Footer from "../components/Footer"
import VoluntarisImg from '../assets/voluntaris.jpg'
import VoluntarisImgStaff from '../assets/voluntaris_staff.jpg'
import Title from "../components/Title";
import Error from "../components/Error";


function Voluntariat() {

  
  const [nombre, setNombre ] = useState('');
  const [email, setEmail ] = useState('');
  const [telefono, setTelefono ] = useState('');
  const [ error , setError ] = useState(false);
  
  const handleSubmit= (e) => {

    if([nombre, email, telefono].includes('')) {
      e.preventDefault()
      setError(true);
      return error;
    }
    setError(false)
  }

  return (
    <>
      <section className="pt-20 md:pt-24 font-Poppins">
        <Title>
        La grandesa de la Cursa, <br/> els voluntaris/es  
        </Title>

        <div className="w-full lg:max-w-[1000px] mx-auto p-3 pt-5 font-Poppins">
          <p className="py-2">
          Com sempre, sense la familia de voluntaris, organitzar un esdeveniment així seria impossible fer-ho una realitat. Avui ajudem aqui per demà anar a córrer allà :).
          </p>
          <p>
          Tothom qe ha vingut a donar-nos un cop de mà alguna vegada ha sortit ben content, ja sigui aportant el seu granet de sorra a la zona del Molí de Mar, pel recorregut, avituallaments, guarda-roba, bbq o a la barra mateix. Tot i que el recorregut el marquem a consciència, sempre necessitem ajuda per tenir controlats els punts conflictius i poder gaudir entre tots/es d'una competició perfecte.
          </p>
          <p className="py-2">
          És per això, que us volem animar a ajudar-nos amb la vostre col·laboració, ho diem honestament que ens ho passem igual de bé organitzant que corrent! i a més a més...us paguem un bon esmorzar amb beguda inclosa! i us donarme un petit obsequi.
          </p>
        </div>

        <Title>
          Fes-te voluntari i vine a compartir i gaudir d'una jornada perfecte!
        </Title>

        {error && <Error>Tots els camps són obligatoris</Error>}
        <form 
        method="POST"
        action="https://getform.io/f/d877dc2c-a761-43aa-b305-5fc9341f84a1"
        className="flex flex-col w-full lg:w-1/2 mx-auto px-3 py-10"
        onSubmit={handleSubmit}
        >
          <input 
          type="text" 
          name="name" 
          placeholder="El teu nom"
          value={nombre}
          className="p-2 my-5 bg-transparent border-4 border-secondary rounded-md focus:outline-none" 
          onChange={(e) => setNombre(e.target.value)}
          />
          <input 
          type="email" 
          name="email" 
          placeholder="El teu email"
          value={email}
          className="p-2 my-5 bg-transparent border-4 border-secondary rounded-md focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
          />
          <input 
          type="tel" 
          name="phone" 
          placeholder="El teu telèfon de contacte"
          value={telefono}
          className="p-2 my-5 bg-transparent border-4 border-secondary rounded-md focus:outline-none" 
          onChange={(e) => setTelefono(e.target.value)}
          />
          <input name="_gotcha" className="hidden"/>
          
          <button 
          type="submit"
          className="my-5 bg-primary border-2 border-secondary text-light text-xl first-letter: block px-8 py-3 w-full font-semibold rounded-md"
          >
            M'apunto!
          </button>
        </form>

        <div className="flex flex-col lg:flex-row">
            <img className="w-full lg:w-1/2 shadow-lg" src={VoluntarisImg} alt="imatge voluntariat"/>
            <img className="w-full lg:w-1/2 shadow-lg" src={VoluntarisImgStaff} alt="imatge voluntariat"/>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default Voluntariat