'use client'

import React from 'react'
import { dataFaq } from '../../React/Utils/dataFaq'
import Image from "next/image";

const page = () => {
  return (
    <div className='w-full h-full text-tamañoLetraChica'>
      <div className='w-full h-14  pt-4 pl-16'>
        Home {'>'} Preguntas Frecuentes
      </div>
      <div className='grid  justify-items-center w-full h-[800px] '>
          <section className='w-[90%] h-2/5  mt-8 '>
            <header className=' pb-6 text-xl font-semibold text-colorTextoTitulo1 text-blue-800'>
              Preguntas Frecuentes
            </header>
            <main>
              <ul>
                {dataFaq.map((el)=>{
                  return <li key={el.id} className='w-full h-14 flex justify-between  items-center cursor-pointer hover:underline'>
                    <p className='w-[700px]'>
                      {el.pregunta}
                    </p>
                    <article>
                    <img 
                      src={el.logo}
                      width={11}
                      height={11}
                      alt="Picture of the author"
                
                    />
                    </article>
                  </li>
                })}
              </ul>
            </main>
          </section>
      </div>
    </div>
  )
}

export default page