'use client'

import React from 'react'
import { useRouter } from "next/navigation";

const IngresarYGratis = () => {

    const router = useRouter()

    const handleClickBotonesHome =(e:any)=>{
        if(e.currentTarget.name === 'ingresar'){
        router.push('/dashboard')
        }
        else if(e.currentTarget.name === 'prueba'){
        router.push('/dashboard')
        }
        else {
        console.log('as');
        }}

  return (
    <article className='w-[95%] h-[12%] grid grid-cols-2 place-items-center gap-x-6 py-3 text-tamañoLetra'>
            <button name="ingresar" onClick={handleClickBotonesHome} className="bg-green-500 delay-150 transition-shadow hover:bg-green-600 w-full h-full text-white font-semibold rounded">
              Ingresar
            </button>
            <button name="prueba" onClick={handleClickBotonesHome} className="bg-blue-600 delay-150 transition-shadow hover:bg-blue-900 opacity-80 w-full h-full text-gray-100 font-semibold rounded">
              Prueba Gratuita 
            </button>
          </article>
  )
}


export default IngresarYGratis