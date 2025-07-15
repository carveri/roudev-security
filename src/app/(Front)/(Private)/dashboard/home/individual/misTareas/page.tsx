'use client'

import React from 'react'
//import { dataMisProyectos } from '../../misProyectos/utils/dataMisProyectos'
import { dataCabeceraIniciar } from '../../../iniciar/utils/dataCabeceraIniciar'
import BadgeEtapa from '../../[Components]/BadgeEtapa'
import BadgeVacio from '../../../[Components]/BadgeVacio'
import { dataMisProyectosDummy } from '../../misProyectos/utils/dataMisProyectos'

const page = () => {
  return (
    <>
      {dataMisProyectosDummy.length>0 ? 
        <div className='w-[75%] h-full text-tamañoLetraChica   z-50   -mt-3   max-h-[95%] overflow-auto'>
       
        <main className={`w-[100%] h-[90%] grid grid-cols-${dataCabeceraIniciar.length} mt-6`}>
          mis tareas
        </main>
      </div>:

      <div className='w-full h-full grid place-items-center -mt-[32px]'>
        <BadgeVacio />
      </div>
    }
    </>
  )
}

export default page