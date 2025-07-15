'use client'

import React from 'react'
import { dataContactosStartUps } from '../utils/dataContactosStartUps'
import BadgeContactoStartUp from '../[Components]/BadgeContactoStartUp'

const page = () => {
  return (
    <div className='w-[100%]  h-[1730px]   grid grid-cols-5 grid-rows-5 gap-y-2 gap-x-6  px-7 '>
      {dataContactosStartUps.map((el)=>{
        return <BadgeContactoStartUp
          key={el.id}
          id={el.id}
          avatar={el.avatar}
          nombre={el.nombre}
          apellido={el.apellido}
          cargo={el.cargo}
          trabajando={el.trabajando}
          email={el.email}
          tipoTrabajo={el.tipoTrabajo}
          experiencia={el.experiencia}
          fechaDisponibilidad={el.fechaDisponibilidad}
          siguiendo={el.siguiendo}
          tipoEmpresa={el.tipoEmpresa}
          tipoEmpleo={el.tipoTrabajo}
          salario={el.salario}
        />
      })}
      
    </div>
  )
}

export default page