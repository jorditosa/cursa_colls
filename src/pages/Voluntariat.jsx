import { useState } from "react"
import Footer from "../components/Footer"
import VoluntarisImg from '../assets/voluntaris.jpg'
import VoluntarisImgStaff from '../assets/voluntaris_staff.jpg'

function Voluntariat() {

  const [nombre, setNombre ] = useState('');
  const [email, setEmail ] = useState('');
  const [telefono, setTelefono ] = useState('');

  const [ error, setError ] = useState(false)

  const handleSubmit= (e) => {

    if([nombre, email, telefono].includes('')) {
      setError(true)
      return
    }
    setError(false)
  }

  return (
    <>
      <section className="pt-20 md:pt-24 font-Poppins">
        <h2 className="text-center text-dark py-5 text-4xl bg-gradient-to-r from-light/5 to-secondary/75">
          Vols ser voluntari/a de la Cursa dels Colls?
        </h2>

        <div className="w-full lg:max-w-[1000px] mx-auto p-2 pt-5 font-Poppins">
          <p className="py-2">
          Com sempre, sense la familia de voluntaris un esdeveniment així seria impossible dur-lo a terme.
          </p>
          <p className="py-2">
          És per això, que si us animeu a ajudar-nos en aquesta propera edició, us facilitem un link cap a un formulari perque ens especifiqueu la vostre disponiblitat, nom i telèfon per contactar-vos.
          </p>
          <p className="py-2">
          Ja sabeu que us agraïm mil l'ajuda, i és per això que després de la feina feta tindreu un bon esmorzar i un petit obsequi.
          </p>
        </div>

        <h2 className="mt-10 text-center text-dark p-5 text-2xl bg-gradient-to-r from-light/5 to-secondary/75">
          Fes-te voluntari i vine a compartir i gaudir d'una jornada perfecte!
        </h2>
        <form 
        action="https://getform.io/f/8912888a-c33d-448c-8ab1-5ccc3c669793"
        method="POST"
        className="flex flex-col w-full lg:w-1/2 mx-auto py-5"
        onSubmit={handleSubmit}
        >
          {error && (
            <div><p className="text-error text-center text-2xl py-2">Tots els camps son obligatoris</p></div>
          ) }
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
          <div className="my-5">
            <input 
            type="checkbox" 
            name="validate" 
            id="validate"
            />
            <label htmlFor="validate" className="pl-5">
              Carinyu meu, digam que no ets un robot
            </label>
          </div>
          <button 
          type="submit"
          className="my-5 bg-gradient-to-r from-dark to-secondary hover:bg-gradient-to-l hover:from-dark hover:to-secondary transition-all duration-300 text-light text-xl first-letter: block px-8 py-3 w-full font-semibold rounded-md"
          disabled={error && 'true'}
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