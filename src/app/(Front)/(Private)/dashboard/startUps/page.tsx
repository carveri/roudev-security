'use client'

import React from 'react'
import { dataContactosStartUps } from './utils/dataContactosStartUps'
import BadgeContactoStartUp from './[Components]/BadgeContactoStartUp'
//import BadgeContactoStartUp from './[Components]/BadgeContactoStartUp'

const page = () => {
  return (
    <div className='w-[100%]  h-[1730px]  grid grid-cols-5 grid-rows-5 gap-3 '>
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
          salario={el.salario}
          tipoEmpresa={el.tipoEmpresa}
          tipoEmpleo={el.tipoEmpleo}
          siguiendo={el.siguiendo}
          //proyectos={el.proyectos}
          
        />
      })}
      
    </div>
  )
}

export default page