'use client'

import Image from "next/image";

import logo from "../../../React/Assets/Icons/retrospectiveSm.png";
import lapiz from "../../../React/Assets/Icons/lapiz.png";
import eliminar from "../../../React/Assets/Icons/eliminar.png";
import { useRouter } from "next/navigation";
import { dataCabeceraIniciar } from "./utils/dataCabeceraIniciar";
import { useState } from "react";

import { usePathname } from 'next/navigation'
import ModalCrearProyecto from "../[Components]/ModalCrearProyecto";
import ModalEliminar from "../[Components]/ModalEliminar";

 
export default  function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  
  const router = useRouter()

  const activo = false
  let proyecto = []

  const [activarIniciar, setActivarIniciar] = useState(false)

  const pathname = usePathname()

  // activar modal eliminar
  const [activarModalEliminar, setActivarModalEliminar] = useState(false)


  return  <div className='w-full h-full  grid place-items-center'>
  <div className='w-[95%] h-[95%] '>
    <header className='w-full h-[5%] font-semibold text-gray-600 text-tamañoLetra '>
      Configuraciones Iniciales
    </header>
    
      <div className={`items-center flex justify-between   mr-2 w-[75%] bg-gray-100 text-gray-700 h-[5%] px-3 mb-1`}>
        <div className='flex items-center gap-x-2'>
          <img
            src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/retrospectiveSm.png'
            width={20}
            height={20}
            alt='as'
          />
          <div className="flex">
            <div className="mr-1 text-tamañoLetraChica">
              Chipax 
            </div>
            <div className="font-semibold text-blue-500 text-tamañoLetraChica">
              - Proyecto 1
            </div>
          </div>
        </div>
        
        <div className="flex gap-x-2">
          <div onClick={()=>setActivarModalEliminar(!activarModalEliminar)} className="cursor-pointer">
            <img
                src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/eliminar.png'
                width={15}
                height={15}
                alt='as'
              />
          </div>
          <div className="cursor-pointer">
          <img
                src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/lapiz.png'
                width={15}
                height={15}
                alt='as'
              />
          </div>
        </div>
      
      
    </div>
    
      <section className={`w-[66%] h-[4%]  grid grid-cols-9 place-items-center `}>
          {dataCabeceraIniciar.map((el)=>{
            return <div onClick={()=>router.push(el.href)}  className={`cursor-pointer hover:border-b h-[22px]  hover:border-blue-300 flex gap-x-2 }
                ${pathname===el?.href? `border-b border-blue-600  duration-75  text-black`: ``}
                `} key={el.id}>
              <div>
                {<img src={el.icono} width={18} height={18} alt='sd' />}
              </div>
              <div className="text-tamañoLetraChica">
                {el.nombre}
              </div>
            </div>
          })}
      </section>
    
    
    <main className="w-full h-[60%] mt-7 text-tamañoLetraChica">
      {children}
    </main>
    
      <div className="w-[75%] h-[4.5%]  flex justify-end">
        <button onClick={()=>router.back()} className="bg-gray-200  h-full w-[13%] rounded text-gray-500 font-semibold text-tamañoLetraChica mr-2">
          Volver a Seleccion
        </button>
        <button className="bg-blue-500 h-full w-[13%] rounded text-gray-100 font-semibold text-tamañoLetraChica">
          Guardar 1 / {dataCabeceraIniciar.length}
        </button>
      </div>
      {activarModalEliminar &&
          <div className='w-full flex justify-start ml-40 '>
            <ModalEliminar
              setActivarEliminar={setActivarModalEliminar}
            />
          </div>
        
        }
    
  </div>
</div>
}