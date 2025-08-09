'use client'

import React from 'react'
import Image from "next/image";

import cruz from "../../React/Assets/Icons/cruz3.png";
import perfil from "../../React/Assets/Icons/adminClientes2.png";
import { dataCuerpoPerfil } from './utils/dataCuerpoPerfil';
import { useRouter } from "next/navigation";
import { dataSoporte } from './utils/dataSoporte';

const ModalSoporte = ({setActivar}) => {

    const router = useRouter()
    
        const handleClickCerrarSession =()=>{
            router.push('/')
        } 

  return (
    <div className='w-[15%] h-[40%] z-50 fixed top-10  mr-[115px] border border-gray-200 bg-white p-3 text-(length:--tamañoLetraChica)'>
        <section className='w-full h-[30%] '>
            <header className='w-full h-[30%] flex px-3'>
                <div className='w-[90%] grid items-center '>
                    Soporte al Cliente
                </div>
                <div onClick={()=>setActivar(false)} className='w-[10%] h-full grid place-items-center cursor-pointer p-1 hover:border-b border-gray-500'>
                    <img className='' src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz3.png' width={10} height={10} alt='as'/>
                </div>
            </header>
            <article className='w-full h-[70%]  flex py-1 '>
                <div className='w-[25%] h-full grid place-items-center'>
                    <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png' width={35} height={35} alt='as' />
                </div>
                <div className='w-[75%] h-full  grid  items-center py-3'>
                    <div className='font-semibold'>
                        Chipax
                    </div>
                    <div>
                        chipax.software@gmail.com
                    </div>
                </div>
            </article>
        </section>
        <section className='w-full h-[60%] '>
            <ul className='flex-col justify-start z-50  max-h-[79%] overflow-auto'>
                {dataSoporte.map((el)=>{
                    return <button className='cursor-pointer w-full hover:bg-gray-100 h-10 border border-gray-50 flex justify-start pl-2 items-center' key={el.id}>
                        <div className='mr-2'>
                            <img src={el.imagen} width={12} height={12} alt="sd" />
                        </div>
                        <div>
                            {el.nombre}
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

export default ModalSoporte