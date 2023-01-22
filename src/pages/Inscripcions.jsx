import React from 'react'

function Inscripcions() {
  return (
    <section className='relative overflow-x-auto shadow-md bg-gradient-to-r from-dark/75 to-secondary text-light py-20'>
        <h3 className="text-center text-3xl">Inscripcions</h3>
        <div className="flex flex-col justify-center items-center max-w-[1000px] mx-auto">
          <div className="w-full py-5">
            <div className="overflow-hidden lg:rounded-t-lg">
              <table className="w-full text-center">
                <thead className="border-b bg-light text-primary">
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
                  <tr className="bg-white border-b">
                    <td className="text-3xl font-medium px-6 py-4">
                      12 €
                    </td>
                    <td className="text-3xl font-medium px-6 py-4">
                      15 €
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td colSpan="2" className="text-xl px-6 py-4 text-center">
                      Periode d'inscripcions: Del 01 de febrer al 6 d'abril del 2023
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