'use client'

import { useState } from 'react';
import BadgeVacio from '../../../[Components]/BadgeVacio';
import TablaEquipo from '../../[Components]/TablaEquipo';
import { dataMisProyectosDummy } from '../../misProyectos/utils/dataMisProyectos';
//import { dataMisProyectos } from '../../misProyectos/utils/dataMisProyectos';

const page = () => {


  // lapiz
  

  return (
    <>
      {dataMisProyectosDummy.length>0 ? 
        <div className='w-[75%] h-full text-tamañoLetraChica   z-50    -mt-3  max-h-[95%] overflow-auto'>
       
        
        <main className={`w-[100%] h-[90%]  mt-6`}>
          <TablaEquipo />
        </main>
        <div className='w-full flex justify-center'>
        {/* {activarModalUpdateEquipos &&
          <ModalCrearEquipo
          setActivoEquipo={setActivoEquipo}
        />
      } */}
        </div>
      </div>:

      <div className='w-full h-full grid place-items-center -mt-[32px]'>
        <BadgeVacio />
      </div>
      
    }
    </>
  )
}

export default page