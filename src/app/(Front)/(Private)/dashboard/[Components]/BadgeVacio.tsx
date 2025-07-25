'use client'

import {useState} from 'react'
import ModalCrearProyecto from './ModalCrearProyecto';

const BadgeVacio = ({session}) => {


    const [abrirModal, setAbrirModal] = useState(false)

  return (
    <div className='w-[30%] h-[38%] -mt-16 py-4'>
        <section className='grid place-items-center h-[50%]'>
            <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/infrestructura2.png' width={120} height={120} alt='vacio' />
        </section>
        <section className='h-[50%] grid place-items-center'>
            <div className='h-[10%] text-(length:--tamañoLetraChica) font-semibold text-gray-600'>
                Aún no tienes proyectos creados
            </div>
            <div className='w-full h-[90%] grid place-items-center'>
                <button onClick={()=>setAbrirModal(!abrirModal)}  className='bg-blue-500 rounded h-[75%] w-[45%] text-white font-semibold text-(length:--tamañoLetraChica)'>
                    Crear un Proyecto 
                </button>
            </div>
        </section>
        {abrirModal &&
            <div>
                <ModalCrearProyecto
                    abrirModal={abrirModal}
                    setAbrirModal = {setAbrirModal}
                    posicion = 'fidex'
                    session={session}
                />
            </div>
        }
    </div>
  )
}

export default BadgeVacio