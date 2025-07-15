'use client'

import React from 'react'
import { dataCabeceraFinanzas } from '../utils/dataCabeceraFinanzas'
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'

const CabeceraLayoutFinanzas = () => {

    const router = useRouter()

  //console.log('sdsd' , dataCabecera.length);
  
  
  const pathname = usePathname()

  return (
    <section className={`w-[42%] h-[4%] grid grid-cols-5 place-items-center  py-[12px] `}>
        {dataCabeceraFinanzas.map((el)=>{
          return <div onClick={()=>router.push(el.href)}   className={`cursor-pointer  h-[22px] hover:border-b hover:border-blue-300 flex gap-x-2 }
            ${pathname===el?.href || pathname===el?.href2 || pathname===el?.href3 ? `border-b border-blue-500  duration-75  text-black`: ``}
            `} key={el.id}>
            <div>
              {<img src={el.icono} width={16} height={16} alt='sd' />}
            </div>
            <div className="text-(length:--tamañoLetraChica)">
              {el.nombre}
            </div>
          </div>
        })}
    </section>
  )
}

export default CabeceraLayoutFinanzas