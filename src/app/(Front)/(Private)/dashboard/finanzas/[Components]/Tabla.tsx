'use client'

import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import ModalEliminar from '../../[Components]/ModalEliminar';

const Tabla = ({dataMisProyectos, ruta}) => {

  const router = useRouter()

  // ACTIVAR MODAL DE ELIMINAR
  const [activarEliminar, setActivarEliminar] = useState(false)

  return (
    <>
      <table className={`${activarEliminar ? 'opacity-15': ''} border border-gray-200   w-full `}>
            <thead className=''>
              <tr className='h-11 bg-gray-100 '>
                <td className='w-[8%] text-center'>Numero</td>
                <td className='w-[8%]  text-center'> Logo del Proyecto</td>
                <td className='w-[10%] text-center'>Nombre del Proyecto</td>
                <td className='w-[10%] text-center'>Finalidad del Proyecto</td>
                <td className='w-[10%] text-center'>Tipo del Proyecto</td>
                <td className='w-[10%] text-center'>SubTipo del Proyecto</td>
                <td className='w-[8%] text-center'>N° Equipos</td>
                <td className='w-[10%] text-center'>Status</td>
                <td className='w-[8%] text-center'></td>
                <td className='w-[8%] text-center '></td>
              </tr>
            </thead>
            <tbody>
              {dataMisProyectos.map((el, items)=>{
                  return <tr  onClick={()=>{ruta ? router.push('/dashboard/iniciar'):''} 
                   }  key={el.id} className={`${ruta ? 'cursor-pointer hover:bg-gray-100': ''} border border-gray-200 h-11  `}>
                    <td  className='text-center '>
                      {items + 1}
                    </td>
                    <td className='w-full  grid place-content-center  h-11'>
                      {<img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png' width={20} height={20} alt='d' />}
                    </td>
                    <td className='text-center'>
                      {el.nombreProyecto}
                    </td>
                    <td className='text-center'>
                      {el.idFinalidadProyecto}
                    </td>
                    <td className='text-center'>
                      {el.idTipoProyecto}
                    </td>
                    <td className='text-center'>
                      {el.idSubTipoProyecto}
                    </td>
                    <td className='text-center'>
                      {el.numeroEquipos}
                    </td>
                    <td className='text-center'>
                      {el.estadoProyecto}
                    </td>
                    {ruta ? 
                      <td className='flex justify-center  '>
                        <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/lapiz.png' width={15} height={15} alt='updated' />
                      </td>:
                      <td onClick={()=>router.push('/dashboard/home/misProyectos/verProyecto')} className=' text-center text-[11px] text-blue-500 cursor-pointer hover:border-b hover:border-blue-500 font-bold'>
                        Ver
                      </td>
                    }
                    <td onClick={()=>setActivarEliminar(!activarEliminar)} className='flex py-[11px] h-full justify-center cursor-pointer hover:border-b hover:border-blue-500'>
                      <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/eliminar.png' width={13} height={13} alt='delete' />
                    </td>
                    
                  </tr>
                })}
            </tbody>
            
        </table>
        {activarEliminar &&
          <div className='w-full flex justify-center '>
            <ModalEliminar
              setActivarEliminar={setActivarEliminar}
            />
          </div>
        
        }
    </>
  )
}

export default Tabla