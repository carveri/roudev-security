'use client'
import { useState } from "react";

import { useRouter } from 'next/navigation'
import Image from 'next/image'


import Tabla from "../home/[Components]/Tabla";
import BadgeVacio from "../[Components]/BadgeVacio";
import ModalCrearProyecto from "../[Components]/ModalCrearProyecto";
import { dataMisProyectosDummy } from "../home/misProyectos/utils/dataMisProyectos";


const page = () => {

    const router = useRouter()
    const status = 'Activo'

    const [abrirModal, setAbrirModal] = useState(false)

  return (
    <div className="w-full h-full grid place-items-center">
      
      <div className="w-[95%] h-[95%] ">
      <header className='w-full h-[5%] font-semibold text-gray-600 text-tamañoLetra '>
          Selección del Proyecto
      </header>
  
    <div className={`items-center flex justify-between   mr-2 w-[75%] bg-gray-100 text-gray-700 h-[5%] px-3 mb-1`}>
      <div className='flex items-center gap-x-2'>
        <Image
          src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/comida.png'
          width={20}
          height={20}
          alt='as'
        />
        <div className="text-tamañoLetraChica">
        Chipax
        </div>
      </div>
      
      <div className="flex gap-x-2 ">
        <div className="cursor-pointer">
          <Image
              src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/comida.png'
              width={15}
              height={15}
              alt='as'
            />
        </div>
        <div className="cursor-pointer">
        <Image
              src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/comida.png'
              width={15}
              height={15}
              alt='as'
            />
        </div>
      </div>
    
    
  </div>        

  {dataMisProyectosDummy.length>0 ?
  <div className='w-[75%] h-[80%] grid  justify-items-center  '>
      <div className="w-[100%] h-[80%]  rounded  text-tamañoLetraChica">
          <header className="w-[100%] h-[12%] flex justify-end items-center my-[11px] ">
            <div  className="w-[30%] text-tamañoLetra  text-gray-700">
              Selecciona un proyecto
            </div>
            <div className="w-[23%] h-[74%]  flex justify-end mt-[73px]">
              <button onClick={()=>setAbrirModal(!abrirModal)} className=" rounded px-3 mb-1 flex h-[105%]] w-[55%] justify-between items-center border-b hover:border-b hover:border-blue-500 border-gray-300  text-black">
                <div className="w-[10%] grid items-center">
                  <Image className="w-[100%]" src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/comida.png' width={15} height={15} alt="s"/> 
                </div>
                <div className="w-[90%] flex justify-center text-tamañoLetraChica">
                  Crear un Proyecto
                </div> 
                
              </button>
            </div>
          </header>
        <div className="w-full h-[99%] mt-[38px]  z-50 max-h-[96.5%] overflow-auto">
          <Tabla
            dataMisProyectos={dataMisProyectosDummy}
            ruta = {true}
            status={status}
          />
        </div>
      </div>
      <div>
        <div>
        {abrirModal &&
          <ModalCrearProyecto
          abrirModal={abrirModal}
          setAbrirModal = {setAbrirModal} 
          posicion = ''
        />
        }
        </div>
        
      </div>
  </div>:
  <div className='w-full h-[80%] grid place-items-center mt-[61px]'>
    <BadgeVacio />
  </div>}
  </div>
    </div>
  )
}

export default page