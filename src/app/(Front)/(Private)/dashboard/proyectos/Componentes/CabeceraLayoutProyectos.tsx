'use client'

import React from 'react'
import { dataCabecera } from '../utils/dataCabecera'
import { usePathname, useRouter } from 'next/navigation'

const CabeceraLayoutProyectos = () => {


    const router = useRouter()
  
    const pathname = usePathname()


  return (
    <section className={`w-[32%] h-[4%] py-[11px]  grid grid-cols-6 place-items-center `}>
      {dataCabecera.map((el)=>{
        return <button type='button' name={el.nombre} onClick={()=>router.push(el.href)}   className={`cursor-pointer h-[22px] hover:border-b hover:border-blue-300  flex gap-x-2 }
          ${pathname===el?.href? `border-b border-blue-500  duration-75   text-black`: ``}
            `} key={el.id}>
            <div>
              {<img src={el.icono} width={14} height={14} alt='sd' />}
            </div>
            <div className="text-(length:--tamañoLetraChica)">
              {el.nombre}
            </div>
          </button>
            })}
        </section>
  )
}

export default CabeceraLayoutProyectos