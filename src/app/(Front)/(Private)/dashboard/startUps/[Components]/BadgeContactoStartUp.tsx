'use client'


import React, { useState } from 'react'

const BadgeContactoStartUp = ({id, tipoEmpresa, tipoEmpleo, salario, siguiendo, avatar, cargo, nombre, apellido, trabajando, email, tipoTrabajo, experiencia, fechaDisponibilidad}) => {
  

    const [activarProyectosStartUps, setActivarProyectosStartUps] = useState(false)
  
    return (
    <div className='w-full h-full shadow-lg px-4 pt-4 pb-1'>
        <figure className='w-full h-[17%] flex items-center justify-center'>
            <img className='w-12 h-12' src={avatar} alt="a" />
        </figure>
        <main className='w-full h-[60%] pt-2'>
                    <div className='text-tamañoLetraChica font-semibold text-gray-600'>
                        {nombre} {apellido}
                    </div>
                    <div className='text-tamañoLetraChica font-semibold text-gray-600'>
                        {cargo}
                    </div>
                    <div className='text-tamañoLetraChica font-semibold text-blue-600'>
                        {email}
                    </div>
                    <div className='text-tamañoLetraChica font-semibold text-gray-600'>
                        {experiencia}
                    </div>
                     <div className='text-tamañoLetraChica font-semibold text-gray-600'>
                        {tipoTrabajo}
                    </div>
                    <div className='text-tamañoLetraChica font-semibold text-gray-600'>
                        {trabajando ? 'Trabajando' : 'Buscando trabajo'}
                    </div>
                    <div className='text-tamañoLetraChica font-semibold text-gray-600'>
                        {trabajando ? '-' : `Tipo de trabajo: ${tipoTrabajo}`}
                    </div>
                    <div className='text-tamañoLetraChica font-semibold text-gray-600'>
                        {trabajando ? '-' : `Tipo de Empresa: ${tipoEmpresa}`}
                    </div>
                    <div className='text-tamañoLetraChica font-semibold text-gray-600'>
                        {trabajando ? '-' : `Salario: ${salario}`}
                    </div>
                    <div className='text-tamañoLetraChica font-semibold text-gray-600'>
                        {trabajando ? '-' : `Disponible desde: ${fechaDisponibilidad}`}
                    </div>
        </main>
        <div className='w-full h-[10%] flex items-center justify-center gap-x-2 text-tamañoLetraChica mt-5'>
            <button className='w-[20%] h-full bg-gray-100 hover:bg-gray-200 text-white grid place-items-center'>
                <img className='w-[14px] h-[14px]' src={`${!siguiendo ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png':'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/check2.png'}`} alt="s" />
            </button>
            <button onClick={()=>setActivarProyectosStartUps(!activarProyectosStartUps)} className={` px-1 flex justify-between items-center w-[80%] h-full bg-gray-50 hover:bg-gray-100 text-black`}>
                <div>
                    Invitar al Proyecto
                </div>
                <div>
                    <img className='w-2 h-2' src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' alt="s" />
                </div>
            </button>
            {activarProyectosStartUps &&
                <div>
                    sdsd
                </div>
            }
        </div>
    </div>
)

}

export default BadgeContactoStartUp