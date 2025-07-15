'use client'

import React from 'react'
import { dataPlanes } from '../../React/Utils/dataPlanes'

const page = () => {
  return (
    <div className='w-full h-full text-tamañoLetraChica'>
      <div className='w-full h-14  pt-4 pl-32'>
        Home {'>'} Planes
      </div>
      <div className='grid justify-items-center w-full h-[800px] '>
        <section className='w-[85%] h-[85%]  grid grid-cols-3 place-items-center gap-x-11 mt-6'>
        {dataPlanes.map((el)=>{
          return <article key={el.id} className='w-full h-full border border-gray-200 py-8'>
            <header className='w-full h-20 text-xl grid place-content-center'>
              {el.nombre}
            </header>
            <main className='w-full h-2/6 px-10'>
              {el.descripcion}
            </main>
            <section className='w-full h-1/6 text-xl grid place-content-center text-colorTexto '>
              USD {el.valor}
            </section>
            <section className='w-full h-1/6 text-base grid place-content-center text-colorTexto '>
              {el.tipoPago}
            </section>
            <section className='w-full h-1/6 grid place-items-center'>
              <button className='bg-gray-700 w-60 h-14 rounded text-white font-bold'>
                Seleccionar
              </button>
            </section>
          </article>
        })}
          
        </section>
      </div>
    </div>
  )
}

export default page