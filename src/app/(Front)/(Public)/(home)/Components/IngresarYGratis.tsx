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
    <article className='w-[100%] h-[15%] grid grid-cols-2 place-items-center gap-x-6 py-3 text-tamañoLetra'>
            <button name="ingresar" onClick={handleClickBotonesHome} className="bg-gradient-to-r from-green-400 to-[#01b307] cursor-pointer delay-150 transition-shadow hover:bg-green-400 w-full h-full text-white font-semibold rounded">
              Ingresar
            </button>
            <button name="prueba" onClick={handleClickBotonesHome} className="bg-gradient-to-r from-cyan-600 to-cyan-900 cursor-pointer delay-150 transition-shadow hover:bg-cyan-900 opacity-80 w-full h-full text-gray-100 font-semibold rounded">
              Prueba Gratuita 
            </button>
          </article>
  )
}


export default IngresarYGratis