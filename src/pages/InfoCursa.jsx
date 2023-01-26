import React from 'react'
import { FaListOl, FaRunning, FaPhotoVideo, FaMedal } from 'react-icons/fa'

function InfoCursa() {
  return (
    <section className="max-w-[1000px] mx-auto lg:py-20 divide-y-4 divide-secondary">
        <div className="bg-light h-full py-10 shadow-lg shadow-primary/50 rounded-t-lg flex flex-col lg:flex-row items-center justify-center">
          <FaListOl size={60} className='w-1/5 text-primary hover:text-primary/50'/>
          <div className="w-4/5 lg:p-5">
            <h3 className="text-center font-bold py-3 lg:text-start text-dark text-2xl pb-2">
              <a href="https://www.sportsform.net/classificacions/2022/Colls2022/" target="_blank" rel="noopener noreferrer" className='hover:text-primary/75'>
              Classificacions <small>VIII edició</small> 
              </a>
            </h3>
          </div>
        </div>

        <div className="bg-light h-full py-10 shadow-lg shadow-primary/50 flex flex-col lg:flex-row items-center justify-center">
          <FaRunning size={60} className='w-1/5 text-primary hover:text-primary/50'/>
          <div className="w-4/5 lg:p-5">
            <h3 className="text-center font-bold py-3 lg:text-start text-dark text-2xl pb-2">
            La Cursa
            </h3>
            <p className="text-dark font-medium text-lg">L'entorn natural dels Colls Miralpeix entre Vilanova i la Geltrú i Sant Pere de Ribes amaga un recorregut que permet gaudir del trail running tant per experts com pels qui us esteu iniciant en aquest esport. La pujada del Castell de Miralpeix des de les proximitats de Can Girona es troba a la meitat del circuit i ofereix un desnivell molt potent i dret, cosa que l'ha convertit en un dels símbols de la cursa. A banda, el recorregut presenta petites variacions respecte d'edicions anteriors per fer-lo més entretingut aper a tots vosaltres.
            </p>
          </div>
        </div>

        <div className="bg-light h-full py-10 shadow-lg shadow-primary/50 flex flex-col lg:flex-row items-center justify-center">
          <FaPhotoVideo size={60} className='w-1/5 text-primary hover:text-primary/50'/>
          <div className="w-4/5 lg:p-5">
            <h3 className="text-center font-bold py-3 lg:text-start text-dark text-2xl pb-2">
              Fotografies
            </h3>
            <p className="text-dark font-medium text-lg">Per tal que us pugueu endur un bon record de la vostra participació a la cursa dels colls, al llarg
            del recorregut trobareu fotògrafs que immortalitzaran el vostre pas per les zones més emblemàtiques dels Colls-Miralpeix. Durant la setmana posterior a la competició les anirem penjant a la galeria d’imatges per tal que us les pugueu descarregar.
            </p>
          </div>
        </div>

        <div className="bg-light h-full py-10 shadow-lg shadow-primary/50 flex flex-col lg:flex-row items-center justify-center rounded-b-lg">
          <FaMedal size={60} className='w-1/5 text-primary hover:text-primary/50'/>
          <div className="w-4/5 lg:p-5">
            <h3 className="text-center font-bold py-3 lg:text-start text-dark text-2xl pb-2">
              Patrocinadors/es
            </h3>
            <p className="text-dark font-medium text-lg">Volem fer una menció especial a les empreses patrocinadores i col·laboradores. Sense elles no podríeu gaudir d’aquesta cursa tan autèntica en un paratge natural com el dels Colls Miralpeix. La seva ajuda es imprescindible i volem fer visible el seu suport i recomanar-vos els seus productes i serveis ja que son els millors que trobareu per la nostra zona.
            </p>
          </div>
        </div>
      </section>
  )
}

export default InfoCursa