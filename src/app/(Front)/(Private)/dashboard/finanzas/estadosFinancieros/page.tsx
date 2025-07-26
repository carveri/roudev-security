'use client'

import React from 'react'
import { dataMisProyectosDummy } from '../../home/misProyectos/utils/dataMisProyectos'
import { useRouter } from "next/navigation";
import TablaFlujoDeCaja from './[Components]/TablaFlujoDeCaja';

const page = () => {

    const activarEliminar = false
    const ruta = false

    const router = useRouter()

  return (
    <div className='w-[75%] h-full text-(length:--tamañoLetraChica)'>
        <header className='w-full h-[7%] flex items-center justify-center '>
            Flujo de Caja
        </header>
        <main className='w-full h-[93%]  '>
          <div className='w-full h-7 flex justify-end'>
            <div className='w-32 h-full flex border-b border-gray-200 justify-between px-4 cursor-pointer'>
              <div>
                2025
              </div>
              <div className='pt-[3px]'>
                <img className='w-3 h-3' src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' alt="d" />
              </div>
            </div>
          </div>
        <TablaFlujoDeCaja
            dataMisProyectosDummy={dataMisProyectosDummy}
            ruta={ruta}
            activarEliminar={activarEliminar}
            //setActivarEliminar={setActivarEliminar}
        
        />
        </main>
    </div>
  )
}

export default page