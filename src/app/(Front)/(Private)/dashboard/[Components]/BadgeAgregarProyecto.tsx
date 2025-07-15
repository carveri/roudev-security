'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../../../React/Assets/Icons/logoPrincipal.png";
import ModalSeleccionarProyecto from './ModalSeleccionarProyecto';

const BadgeAgregarProyecto = () => {

    const [abrirModal, setAbrirModal] = useState(false)

  return (
    <div className='w-[30%] h-[40%] mt-16'>
        <section className='grid place-items-center h-[50%]'>
            <Image src={logo} width={100} height={100} alt='vacio' />
        </section>
        <section className='h-[50%] grid place-items-center'>
            <div className='text-tamañoLetra font-semibold text-gray-600'>
                Selecciona el Proyecto
            </div>
            <button onClick={()=>setAbrirModal(!abrirModal)} className='bg-blue-500 rounded h-[70%] w-[50%] text-white font-semibold text-tamañoLetraChica'>
                Seleccionar
            </button>
        </section>
        {abrirModal &&
            <div>
                <ModalSeleccionarProyecto
                    
                />
            </div>
        }
        
    </div>
  )
}

export default BadgeAgregarProyecto