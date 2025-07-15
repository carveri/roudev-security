'use client'

import React from 'react'


const ComHome = ({el, idProyy}) => {


    //console.log('idproy:', idProyy);
    const proyectoId = idProyy

  return (
        <section className='w-full h-full rounded shadow-sm border border-gray-100 py-1  '>
            <article className='w-full h-full flex px-2 '>
                <div className='w-[25%] grid place-content-center'>
                    <img src={el.icono} width={23} height={23} alt={el.nombre}/>
                </div>
                <div className='w-[75%] grid items-center pl-4'>
                    <div className=''>
                        {el.nombre}
                    </div>
                    <div className='font-semibold text-blue-700 ml-[50px]'>
                        {el.numero}
                    </div>
                </div>
            </article>
            
        </section>
    
  )
}

export default ComHome