import React from 'react'
import { dataLenguaje } from '../frontend/utils/dataLenguaje'
import BadgeIniciar from '../[Components]/BadgeIniciar'
import { dataFrameworkFullStack } from '../frontend/utils/dataFrameworkFullStack'
import { dataLibreria } from '../frontend/utils/dataLibreria'
import { dataEntorno } from './utils/dataEntorno'
import { dataOrms } from './utils/dataOrms'
import { dataLibreriaBack } from './utils/dataLibreriaBack'

const page = () => {
  return (
    <div className='w-[75%] h-full bg-white grid grid-cols-4 gap-x-2 mt-3 '>
      <section className={`grid grid-rows-${dataLenguaje.length} border border-gray-100 items-start h-[310px]`}>
        <header className='w-full h-12 grid place-content-center bg-white' >
          Lenguaje de Programación
        </header>
        {dataLenguaje.map((el)=>{
          return <BadgeIniciar
            el={el}
            key={el.id}
          />
        })}
      </section>
      <section className={`grid grid-rows-${dataEntorno.length} border border-gray-100 items-start h-[250px]`}>
        <header className='w-full h-12 grid place-content-center'>
          Entorno de Desarrollo 
        </header>
        {dataEntorno.map((el)=>{
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
      <section className={`grid grid-rows-${dataLibreriaBack.length} border border-gray-100 items-start h-[380px]`}>
        <header className='w-full h-12 grid place-content-center'>
          Framework
        </header>
        {dataLibreriaBack.map((el)=>{
          return <BadgeIniciar
            el={el}
            key={el.id}
          />
        })}
        
      </section>
      
      
    </div>
  )
}

export default page