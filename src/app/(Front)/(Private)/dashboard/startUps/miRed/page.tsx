'use client'

import React from 'react'
import { dataMisContactos } from './utils/dataMisContactos'
import BadgeContacto from './[Components]/BadgeContacto'

const page = () => {
  return (
    <div className='w-full h-[90%] grid grid-cols-3 grid-rows-4 gap-x-4 gap-y-9'>
      {dataMisContactos.map((el)=>{
        return <BadgeContacto
          key={el.id}
          id={el.id}
          avatar={el.avatar}
          cargo={el.cargo}
          nombre={el.nombre}
          apellido={el.apellido}
          trabajando={el.trabajando}
          email={el.email}
          empresa={el.empresa}
          siguiendo={el.siguiendo}
          proyectos={el.proyectos}
          
        />
      })}
    </div>
  )
}

export default page