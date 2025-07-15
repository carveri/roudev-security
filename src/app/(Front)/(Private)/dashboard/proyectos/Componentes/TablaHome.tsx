'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { dataTablaHome } from '../utils/dataTablaHome'

const TablaHome = () => {

    const router = useRouter()
    
        const ruta = false

    const anchoCasilla = 10
    const anchoCasilla2 = 100


  return (
    <table className={`border border-gray-200 w-[100%] text-tamañoLetraChica  `}>
                <thead className=' w-full'>
                  <tr className='h-9 bg-gray-100 w-[100%]'>
                    <td className={`w-[${anchoCasilla}%] text-center`}>Numero</td>
                    <td className={`w-[${anchoCasilla}%] text-center`}>Nombre de la tarea</td>
                    <td className={`w-[${anchoCasilla}%] text-center`}>Creador</td>
                    <td className={`w-[${anchoCasilla}%] text-center`}>Responsable</td>
                    <td className={`w-[${anchoCasilla}%] text-center`}>Equipo</td>
                    <td className={`w-[${anchoCasilla}%] text-center`}>Colaboradores</td>
                    <td className={`w-[${anchoCasilla}%] text-center`}>Urgencia</td>
                    <td className={`w-[${anchoCasilla}%] text-center`}>Fecha Inicio</td>
                    <td className={`w-[${anchoCasilla}%] text-center`}>Fecha Termino</td>
                    <td className={`w-[${anchoCasilla}%] text-center`}>Etapa</td>
                    <td className={`w-[${anchoCasilla}%] text-center`}></td>
                  </tr>
                </thead>
                <tbody className=' fixed  z-40 h-[482px] max-h-[482px] overflow-auto'>
                  {dataTablaHome.map((el, items)=>{
                      return <tr onClick={()=>{ruta ? router.push('/dashboard/iniciar'):''} 
                       }  key={el.id} className={`${ruta ? 'cursor-pointer hover:bg-gray-100': ''} border border-gray-200 h-8  `}>
                        <td  className={`w-[${anchoCasilla2}px] text-center `}>
                          {items + 1}
                        </td>
                        
                        <td className={`w-[${anchoCasilla2}px] text-center`}>
                          {el.nombrePendiente.length > 20 ? el.nombrePendiente.slice(0,20) + '...' : el.nombrePendiente}
                        </td>
                        <td className={`w-[120px] text-center `}>
                          {el.nombreCreador}
                        </td>
                        <td className={`w-[${anchoCasilla2}px] text-center `}>
                          {el.nombreResponsable}
                        </td>
                        <td className={`w-[${anchoCasilla2}px] text-center `}>
                          {el.nombreEquipo}
                        </td>
                        <td className={`w-[${anchoCasilla2}px] text-center `}>
                          <div  className='text-blue-500 hover:text-blue-700 cursor-pointer'>{el.colaboradores.length}  Colaboradores</div>
                        </td>
                        <td className={`w-[${anchoCasilla2}px] flex justify-between  `}>
                          <article className={`w-[${anchoCasilla2}px]  text-center pt-[10px]`}>
                            {el.urgencia}
                          </article>
                          <article className='flex items-center'>
                            <article className={`rounded-full  w-2 h-2 ${el.urgencia ==='Alta' ? 'bg-red-500': el.urgencia ==='Media' ? 'bg-yellow-500': el.urgencia ==='Baja' ? 'bg-green-500': ''}`}>
                              
                            </article>
                          </article>
                        </td>
                        <td className={`w-[${anchoCasilla2}px] text-center `}>
                          {el.fechaInicio}
                        </td>
                        <td className={`w-[${anchoCasilla2}px] text-center `}>
                          {el.fechaFin}
                        </td>
                        <td className={`w-[${anchoCasilla2}px] text-center `}>
                          {el.etapa}
                        </td>
                        <td onClick={()=>console.log('as')} className={`w-[${anchoCasilla2}px] text-center  cursor-pointer text-blue-500 hover:underline`}>
                          Ver
                        </td>
    
                      </tr>
                    })}
                </tbody>
            </table>
  )
}

export default TablaHome