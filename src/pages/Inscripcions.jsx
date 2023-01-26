import React from 'react'
import Title from '../components/Title'

function Inscripcions() {
  return (
    <section className='relative overflow-x-auto shadow-md bg-gradient-to-l from-light/25 to-secondary text-dark pt-10 pb-20'>
        <Title>Inscripcions</Title>
        <div className="flex flex-col justify-center items-center max-w-[1000px] mx-auto">
          <div className="w-full py-5">
            <div className="overflow-hidden lg:rounded-t-lg">
              <table className="w-full text-center">
                <thead className="bg-light text-primary">
                  <tr>
                    <th scope="col" className="text-2xl font-medium px-6 py-4">
                      # la Curta
                    </th>
                    <th scope="col" className="text-2xl font-medium px-6 py-4">
                    # la Llarga
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b border-light">
                    <td className="text-3xl font-medium px-6 py-4">
                      12 €
                    </td>
                    <td className="text-3xl font-medium px-6 py-4">
                      15 €
                    </td>
                  </tr>
                  <tr className="bg-white border-b border-light">
                    <td colSpan="2" className="text-2xl px-6 py-4 text-center">
                      Període d'inscripcions:<br/>
                      De l'1 de febrer al 30 de març del 2023
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Inscripcions