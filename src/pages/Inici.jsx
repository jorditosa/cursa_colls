import Hero from '../assets/hero.jpg'

function Inici() {
  return (
    <>
      <div className="w-full h-screen py-60 bg-local flex flex-col items-center justify-center font-Lato text-light" style={{backgroundImage: `url(${Hero})`}}>
        <h1 className='text-6xl mt-5 border-secondary border-b-8 rounded-b-lg'>La Cursa dels Colls</h1>
        <span className='text-3xl mt-5'>9a Edició</span>
        <h3 className='text-3xl mt-5'>09 d'abril del <span>2023</span></h3>
      </div>
      <div className='bg-dark'>

      </div>
    </>
  )
}

export default Inici