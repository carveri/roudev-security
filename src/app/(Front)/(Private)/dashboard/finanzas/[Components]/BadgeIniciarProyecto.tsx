'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { dataListaProyectos } from '../../home/utils/dataListaProyectos'



const BadgeIniciarProyecto = () => {
  
        const [activo, setActivo] = useState(false)
        const [proyectos, setProyectos] = useState('Pro1')
  
        const handleClickListaProyectos =()=>{
            setProyectos('sd')
            setActivo(false)
        }
    return (
    <header className='w-full h-[5%]  grid justify-items-end text-tamañoLetraChica '>
        <div onClick={()=>setActivo(!activo)} className='w-[30%]  h-[32px] border-b border-gray-300  flex items-center justify-between px-2 cursor-pointer'>
          <section className=' '>
            {proyectos}
          </section>
          <section>
            <Image src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png' width={16} height={16} alt='sd'/>
          </section>
        </div>
        {activo &&
            <ul className='w-[6%] h-[200px] mt-[38px] z-50 bg-yellow-500  absolute  ml-96 max-h-[96px] overflow-auto '>
            {dataListaProyectos.map((el)=>{
              return <li onClick={handleClickListaProyectos} value={el.nombre} key={el.id} className=' flex w-full h-[32px] cursor-pointer py-1'>
                {<><Image src={el.icono} width={20} height={10} alt='as' /> <div className='ml-2 grid place-items-center'>{el.nombre}</div></>}
                
              </li>
            })}
          </ul>
        }
        
      </header>
  )
}

export default BadgeIniciarProyecto