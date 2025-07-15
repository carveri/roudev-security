import React from 'react'
import { dataLenguaje } from '../frontend/utils/dataLenguaje'
import BadgeIniciar from '../[Components]/BadgeIniciar'
import { dataEntorno } from '../backend/utils/dataEntorno'
import { dataFrameworkFullStack } from '../frontend/utils/dataFrameworkFullStack'
import { dataLibreriaBack } from '../backend/utils/dataLibreriaBack'
import { dataTipoInfraestructura } from './utils/dataTipoInfraestructura'
import { dataCloudPrincipal } from './utils/dataCloudPrincipal'

const page = () => {
  return (
    <div className='w-[75%] h-full bg-white grid grid-cols-4 gap-x-2 mt-3'>
      <section className={`grid grid-rows-${dataTipoInfraestructura.length} border border-gray-100 items-start h-[250px]`}>
        <header className='w-full h-12 grid place-content-center bg-white' >
          Tipo de Infraestructura
        </header>
        {dataTipoInfraestructura.map((el)=>{
          return <BadgeIniciar
            el={el}
            key={el.id}
          />
        })}
      </section>
      <section className={`grid grid-rows-${dataCloudPrincipal.length} border border-gray-100 items-start h-[310px]`}>
        <header className='w-full h-12 grid place-content-center'>
          Cloud Principal
        </header>
        {dataCloudPrincipal.map((el)=>{
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