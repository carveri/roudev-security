'use client'

import {useState} from 'react'
import { dataEquipoProyectos } from '../misProyectos/utils/dataEquipoProyectos'
import { useRouter } from "next/navigation";
import Image from 'next/image';

//import { dataClientes } from '@/app/(Front)/React/Utils/dataClientes';
import ModalCrearEquipo from '../../[Components]/ModalCrearEquipo';
import { dataClientes } from '../../../../React/Utils/dataClientes';

const TablaEquipo = () => {

    const router = useRouter()
    const ruta = true


    const [ativar1, setAtivar1] = useState(false)
    


    

  return (
    <table className={`border border-gray-200   w-full `}>
            <thead className=''>
              <tr className='h-11 bg-gray-100 '>
                <td className='w-[6%] text-center'>Numero</td>
                <td className='w-[6%]  text-center'> Logo Equipo</td>
                <td className='w-[8%] text-center'>Nombre Equipo</td>
                <td className='w-[8%] text-center'>Proyecto</td>
                <td className='w-[8%] text-center'>N° Integrantes</td>
                <td className='w-[15%] text-center'>Integrantes</td>
                <td className='w-[8%] text-center'>Fecha Creación</td>
                <td className='w-[6%] text-center'></td>
              </tr>
            </thead>
            <tbody>
              {dataEquipoProyectos.map((el, items)=>{
                  return <tr  onClick={()=>{ruta ? router.push('/dashboard/iniciar'):''} 
                   }  key={el.id} className={`${ruta ? 'cursor-pointer hover:bg-gray-100': ''} border border-gray-200 h-11  `}>
                    <td  className='text-center '>
                      {items + 1}
                    </td>
                    <td className='w-full  grid place-content-center  h-11'>
                      {<img src={el?.iconoEquipo} width={15} height={15} alt='d' />}
                    </td>
                    <td className='text-center'>
                      {el.nombreEquipo}
                    </td>
                    <td className='text-center'>
                     Proyecto1
                    </td>
                    <td className='text-center'>
                      5
                    </td>
                    <td className='text-center grid grid-cols-12  grid-rows-2 gap-x-1'>
                      {dataClientes.map((el)=>{
                        return <div key={el.id} className='w-full h-4 flex  items-center justify-center'>
                          <img width={12} height={12} src={el.iconoUsuario} alt="as" />
                        </div>
                        
                      })}
                    </td>
                    <td className='text-center'>
                      22-03-2025
                    </td>
                    {ruta ? 
                      <td  className='flex justify-center  '>
                      <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/lapiz.png' width={15} height={15} alt='updated' />
                    </td>: 
                    <td onClick={()=>router.push('/dashboard/home/misProyectos/verProyecto')} className='text-center text-blue-500 cursor-pointer hover:underline font-semibold'>
                      Ver
                  </td>
                  
              }
                  </tr>
                })}
            </tbody>
            
        </table>
        
  )
}

export default TablaEquipo