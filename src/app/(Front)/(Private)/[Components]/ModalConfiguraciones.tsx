'use client'

import React from 'react'

import { useRouter } from "next/navigation";
import { dataConfiguraciones } from './utils/dataConfiguraciones';

const ModalConfiguraciones = ({setActivar}) => {

  const router = useRouter()
      
          const handleClickCerrarSession =()=>{
              router.push('/')
          } 

  return (
    <div className='w-[15%] h-[40%] z-50 fixed top-10  mr-[64px] border  border-gray-200 bg-white p-3 text-(length:--tamañoLetraChica)'>
        <section className='w-full h-[20%] '>
            <header className='w-full h-[50%] flex  px-1 border-b border-gray-100'>
                <div className='w-[90%] h-full flex items-center gap-x-2 '>
                    <div>
                        <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/config2.png' width={15} height={15} alt='s'/>
                    </div>
                    <div>
                        Configuraciones
                    </div>
                </div>
                <div onClick={()=>setActivar(false)} className='w-[10%] h-full grid place-items-center cursor-pointer p-1 hover:border-b border-gray-500'>
                    <img className='' src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz3.png' width={10} height={10} alt='as'/>
                </div>
            </header>
            <article className='w-full h-[70%]  flex py-1 '>
                <div className='w-[25%] h-full grid place-items-center pt-3'>
                    <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/adminClientes2.png' width={35} height={35} alt='as' />
                </div>
                <div className='w-[75%] h-full  grid  items-center py-3'>
                    <div className='font-semibold'>
                        Juan Perez Lopez
                    </div>
                    <div>
                        juanperezl@gmail.com
                    </div>
                </div>
            </article>
            {/* <article className='my-4 pl-2 font-semibold mb-9'>
                Configuraciones de la cuenta
            </article> */}
        </section>
        <section className='w-full h-[59%] mt-10'>
            <ul className='flex-col justify-start z-50  max-h-[81%] overflow-auto'>
                {dataConfiguraciones.map((el)=>{
                    return <button className='cursor-pointer justify-between w-full hover:bg-gray-100 h-10 border border-gray-50 flex  pl-2 items-center' key={el.id}>
                        <div>
                            {el?.nombreConfiguracion}
                        </div>
                        <div className='mr-3'>
                            <img className='w-3 h-3' src={el?.iconoConfiguraciones} alt="df" />
                        </div>
                    </button>
                })}
            </ul>
        </section>
        <button onClick={()=>setActivar(false)} className='w-full py-3 cursor-pointer h-[12%] border-t border-gray-200 grid items-center pl-2 hover:bg-gray-50'>
            Salir
        </button>
    </div>
  )
}

export default ModalConfiguraciones