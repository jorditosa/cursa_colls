import React from 'react'
import { FaListOl, FaRunning, FaPhotoVideo, FaMedal } from 'react-icons/fa'

function InfoCursa() {
  return (
    <section className="max-w-[1000px] mx-auto lg:py-20 divide-y-4 divide-secondary">
        <div className="bg-light h-[300px] shadow-lg shadow-primary/50 rounded-t-lg flex flex-col lg:flex-row items-center justify-center">
          <FaListOl size={60} className='w-1/5 text-primary hover:text-primary/50'/>
          <div className="w-4/5 lg:p-5">
            <h3 className="text-center font-bold py-3 lg:text-start text-dark text-3xl pb-2">
              Classificacions
            </h3>
            <p className="text-dark font-medium text-lg">Desde aquest enllaç podeu accedir directament a <a target='_blank' className='text-primary' href="">consulta les classificacions</a> oficials de les últimes edicions. 
            </p>
          </div>
        </div>

        <div className="bg-light h-[300px] shadow-lg shadow-primary/50 flex flex-col lg:flex-row items-center justify-center">
          <FaRunning size={60} className='w-1/5 text-primary hover:text-primary/50'/>
          <div className="w-4/5 lg:p-5">
            <h3 className="text-center font-bold py-3 lg:text-start text-dark text-3xl pb-2">
              La Cursa
            </h3>
            <p className="text-dark font-medium text-lg">Us deixem una breu explicació de que és la Cursa dels Colls i com vàrem començar a liar-nos per preparar-vos una marevallosa prova esportiva al nostre entorn dels Colls Mirapleix. 
            </p>
          </div>
        </div>

        <div className="bg-light h-[300px] shadow-lg shadow-primary/50 flex flex-col lg:flex-row items-center justify-center">
          <FaPhotoVideo size={60} className='w-1/5 text-primary hover:text-primary/50'/>
          <div className="w-4/5 lg:p-5">
            <h3 className="text-center font-bold py-3 lg:text-start text-dark text-3xl pb-2">
              Fotogaleria
            </h3>
            <p className="text-dark font-medium text-lg">No pot faltar la secció que tot bon trail runner necessita tenir, i son totes les fotos on segurament surtiu estupendos/as i amb cara de anar super bé!.. 
            </p>
          </div>
        </div>

        <div className="bg-light h-[300px] shadow-lg shadow-primary/50 flex flex-col lg:flex-row items-center justify-center rounded-b-lg">
          <FaMedal size={60} className='w-1/5 text-primary hover:text-primary/50'/>
          <div className="w-4/5 lg:p-5">
            <h3 className="text-center font-bold py-3 lg:text-start text-dark text-3xl pb-2">
              Patrocinadors/es
            </h3>
            <p className="text-dark font-medium text-lg">I especial menció als nostres patrocinadors i col·laboradors, sense ells no podrieu gaudir d'una autèntica Cursa en un paratge natural com els dels Colls Miralpeix. 
            </p>
          </div>
        </div>
      </section>
  )
}

export default InfoCursa