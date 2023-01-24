import React from 'react'
import { FaListOl, FaRunning, FaPhotoVideo, FaMedal } from 'react-icons/fa'

function InfoCursa() {
  return (
    <section className="max-w-[1000px] mx-auto lg:py-20 divide-y-4 divide-secondary">
        <div className="bg-light h-full py-10 shadow-lg shadow-primary/50 rounded-t-lg flex flex-col lg:flex-row items-center justify-center">
          <FaListOl size={60} className='w-1/5 text-primary hover:text-primary/50'/>
          <div className="w-4/5 lg:p-5">
            <h3 className="text-center font-bold py-3 lg:text-start text-dark text-3xl pb-2">
              <a href="https://www.sportsform.net/classificacions/2022/Colls2022/" target="_blank" rel="noopener noreferrer" className='hover:text-primary/75'>
              Classificacions <small>VIII edició</small> 
              </a>
            </h3>
          </div>
        </div>

        <div className="bg-light h-full py-10 shadow-lg shadow-primary/50 flex flex-col lg:flex-row items-center justify-center">
          <FaRunning size={60} className='w-1/5 text-primary hover:text-primary/50'/>
          <div className="w-4/5 lg:p-5">
            <h3 className="text-center font-bold py-3 lg:text-start text-dark text-3xl pb-2">
              La Cursa
            </h3>
            <p className="text-dark font-medium text-lg">L'entorn natural dels Colls Miralpeix entre Vilanova i la Geltrú i Sant Pere de Ribes amaga un recorregut que permet gaudir del trail running tant per experts com pels qui s'estan iniciant en aquest esport. La pujada del Castell de Miralpeix des de les proximitats de Can Girona es troba a la meitat del circuit i ofereix un desnivell molt potent i dret, cosa que l'ha convertit en un dels símbols de la cursa. A banda, el recorregut presenta petites variacions respecte d'edicions anterior per fer-lo més entretingut als corredors i corredores.
            </p>
          </div>
        </div>

        <div className="bg-light h-full py-10 shadow-lg shadow-primary/50 flex flex-col lg:flex-row items-center justify-center">
          <FaPhotoVideo size={60} className='w-1/5 text-primary hover:text-primary/50'/>
          <div className="w-4/5 lg:p-5">
            <h3 className="text-center font-bold py-3 lg:text-start text-dark text-3xl pb-2">
              Fotografies
            </h3>
            <p className="text-dark font-medium text-lg">No pot faltar la secció que tot bon trail runner necessita tenir, i son totes les fotos on segurament sortiu estupends/as i amb cara de anar super bé!.. 
            Durant el recorregut trobareu fotografs que immortalitzaran el vostre moment de patiment/gaudiment. A la setmana següent a la competició us deixem la galeria d'imatges penjades ;).
            </p>
          </div>
        </div>

        <div className="bg-light h-full py-10 shadow-lg shadow-primary/50 flex flex-col lg:flex-row items-center justify-center rounded-b-lg">
          <FaMedal size={60} className='w-1/5 text-primary hover:text-primary/50'/>
          <div className="w-4/5 lg:p-5">
            <h3 className="text-center font-bold py-3 lg:text-start text-dark text-3xl pb-2">
              Patrocinadors/es
            </h3>
            <p className="text-dark font-medium text-lg">I especial menció als nostres patrocinadors i col·laboradors, sense ells no podrieu gaudir d'una autèntica Cursa en un paratge natural com els dels Colls Miralpeix. És molt important la seva ajuda, i volem admirar el seu suport i fer-lo visible, perque són els millors serveis i productes que trobareu per la nostre zona! ;)
            </p>
          </div>
        </div>
      </section>
  )
}

export default InfoCursa