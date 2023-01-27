import { useState , useEffect } from "react"
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

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, ['/voluntariat']);

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
          Sense cap mena de dubte, l’ajuda dels voluntaris que any rere any han col·laborat en el desenvolupament de les vuit edicions anteriors ens ha fet arribar fins on som ara. Organitzar una cursa d’aquestes característiques es complexa i sempre hi ha tasques imprescindibles pel bon funcionament d’aquesta: marcatge dels recorreguts, muntatge i desmuntatge al Molí de Mar, guarda roba, avituallaments, bbq i un llarg etcètera.
          </p>
          <p className="py-2">
          És per això que us volem animar a participar com a voluntaris, ja que gaudireu d’un molt bon
          ambient, podreu assaborir un bon esmorzar (amb beguda inclosa) i rebreu un petit obsequi
          com a agraïment.
          </p>
        </div>

        <Title>
          Fes-te voluntari i vine a compartir i gaudir d'una jornada perfecte!
        </Title>

        {error && <Error>Tots els camps són obligatoris</Error>}
        <form 
        method="POST"
        action="https://getform.io/f/8e441b50-ed16-429e-8d3a-af718a3d9453"
        className="flex flex-col w-full lg:w-1/2 mx-auto px-3 py-10"
        onSubmit={handleSubmit}
        >
          <input 
          type="text" 
          name="name" 
          placeholder="El teu nom"
          value={nombre}
          className="p-2 my-5 bg-transparent shadow-lg shadow-secondary rounded-md focus:outline-none" 
          onChange={(e) => setNombre(e.target.value)}
          />
          <input 
          type="email" 
          name="email" 
          placeholder="El teu email"
          value={email}
          className="p-2 my-5 bg-transparent shadow-lg shadow-secondary rounded-md focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
          />
          <input 
          type="tel" 
          name="phone" 
          placeholder="El teu telèfon de contacte"
          value={telefono}
          className="p-2 my-5 bg-transparent shadow-lg shadow-secondary rounded-md focus:outline-none" 
          onChange={(e) => setTelefono(e.target.value)}
          />
          <input name="_gotcha" className="hidden"/>
          
          <button 
          type="submit"
          className="my-5 bg-primary shadow-md shadow-secondary hover:bg-secondary/75 text-light text-xl block px-8 py-3 w-full font-semibold rounded-md"
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