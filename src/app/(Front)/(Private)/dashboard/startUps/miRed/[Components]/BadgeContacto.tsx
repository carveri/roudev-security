'use client'

import React from 'react'

const BadgeContacto = ({id, avatar, nombre, apellido, cargo, trabajando, email, empresa, siguiendo, proyectos}) => {
  return (
    <div className='w-full h-full flex shadow-md py-1'>
      <header className='w-[20%] flex items-center justify-center'>
        <img src={avatar} className='w-10 h-10' alt="d" />
      </header>
      <main className='w-[40%] grid items-center py-1'>
        <div>
          {nombre} {apellido}
        </div>
        <div>
          {cargo}
        </div>
        
        <div>
          {empresa}
        </div>
        <div className='text-blue-600'>
          {email}
        </div>
      </main>
      <div className='w-[40%] h-full py-4 px-2'>
        
        <div className='flex h-[50%] items-center justify-center gap-x-2 px-5 mb-1'>
          <button className=' text-gray-600 w-full h-[20%] flex items-center justify-center cursor-pointer hover:bg-gray-300'>
            <img className='w-6 h-6' src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png" alt="d" />
          </button>
          <button className=' text-gray-600 w-full h-[20%] flex items-center justify-center cursor-pointer hover:bg-gray-300'>
            <img className='w-6 h-6' src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png" alt="d" />
          </button>
        </div>
        <button className='flex text-tamañoLetraChica  items-center justify-center bg-gray-50 border border-gray-300 text-gray-600 w-full h-[40%] mb-2  rounded-md'>
          {proyectos.length <= 0? 'Agregar a un Proyecto':`N° Proyectos Activo: ${proyectos.length}`} <img className='w-2 h-2 ml-2' src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default BadgeContacto