import React from 'react'
import { dataLenguaje } from '../frontend/utils/dataLenguaje'
import BadgeIniciar from '../[Components]/BadgeIniciar'
import { dataEntorno } from '../backend/utils/dataEntorno'
import { dataOrms } from '../backend/utils/dataOrms'
import { dataLibreria } from '../frontend/utils/dataLibreria'
import { dataTipoDb } from './utils/dataTipoDb'
import { dataMotorDb } from './utils/dataMotorDb'

const page = () => {
  return (
    <div className='w-[75%] h-full bg-white grid grid-cols-4 gap-x-2 mt-3'>
      <section className={`grid grid-rows-${dataTipoDb.length} border border-gray-100 items-start h-[160px]`}>
        <header className='w-full h-12 grid place-content-center bg-white' >
          Tipo de Base de Datos
        </header>
        {dataTipoDb.map((el)=>{
          return <BadgeIniciar
            el={el}
            key={el.id}
          />
        })}
      </section>
      <section className={`grid grid-rows-${dataMotorDb.length} border border-gray-100 items-start h-[380px]`}>
        <header className='w-full h-12 grid place-content-center'>
          Motor de Base de datos
        </header>
        {dataMotorDb.map((el)=>{
          return <BadgeIniciar
            el={el}
            key={el.id}
          />
        })}
      </section>
      <section className={`grid grid-rows-${dataOrms.length} border border-gray-100 items-start h-[310px]`}>
        <header className='w-full h-12 grid place-content-center'>
          Orm
        </header>
        {dataOrms.map((el)=>{
          return <BadgeIniciar
            el={el}
            key={el.id}
          />
        })}
      </section>
      <section className={`grid grid-rows-${dataLibreria.length} border border-gray-100 items-start h-[380px]`}>
        <header className='w-full h-12 grid place-content-center'>
          Herramienta
        </header>
        {dataLibreria.map((el)=>{
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