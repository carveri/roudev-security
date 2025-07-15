import React from 'react'
import { dataLenguaje } from './utils/dataLenguaje'
import BadgeIniciar from '../[Components]/BadgeIniciar'
import { dataFrameworkFullStack } from './utils/dataFrameworkFullStack'
import { dataLibreria } from './utils/dataLibreria'
import { dataLenguajeFront } from './utils/dataLenguajesFront'

const page = () => {
  return (
    <div className='w-[75%] h-full bg-white grid grid-cols-4 gap-x-2 mt-3'>
      <section className={`grid grid-rows-${dataLenguaje.length} border border-gray-100 items-start h-[240px]`}>
        <header className='w-full h-12 grid place-content-center bg-white' >
          Lenguaje de Programación
        </header>
        {dataLenguajeFront.map((el)=>{
          return <BadgeIniciar
            el={el}
            key={el.id}
          />
        })}
      </section>
      <section className={`grid grid-rows-${dataFrameworkFullStack.length} border border-gray-100 items-start h-[430px]`}>
        <header className='w-full h-12 grid place-content-center'>
          Framework FullStack 
        </header>
        {dataFrameworkFullStack.map((el)=>{
          return <BadgeIniciar
            el={el}
            key={el.id}
          />
        })}
      </section>
      <section className={`grid grid-rows-${dataLibreria.length} border border-gray-100 items-start h-[362px]`}>
        <header className='w-full h-12 grid place-content-center'>
          Framework o Libreria 
        </header>
        {dataLibreria.map((el)=>{
          return <BadgeIniciar
            el={el}
            key={el.id}
          />
        })}
      </section>
      <section className={`grid grid-rows-${dataLenguaje.length} border border-gray-100 items-start h-[310px]`}>
        <header className='w-full h-12 grid place-content-center'>
          Herramientas 
        </header>
        f
      </section>
    </div>
  )
}

export default page