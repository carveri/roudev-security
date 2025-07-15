'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { dataProyectosPortada } from '../utils/dataProyectosPortada'

const TablaProyectos = () => {

    const router = useRouter()
    
        const ruta = false

    const anchoCasilla = 10
    const anchoCasilla2 = 100


  return (
    <table className={`border border-gray-200 w-[100%] text-tamañoLetraChica  `}>
                <thead className=' w-full'>
                  <tr className='h-11 bg-gray-100 w-[100%]'>
                    <td className={`w-[${anchoCasilla}%] text-center`}>Numero</td>
                    <td className={`w-[${anchoCasilla}%] text-center`}>Proyectos Activos</td>
                    <td className={`w-[${anchoCasilla}%] text-center`}>Tareas en Producción</td>
                    <td className={`w-[${anchoCasilla}%] text-center`}>Tareas Rechazadas</td>
                    <td className={`w-[${anchoCasilla}%] text-center`}>Tareas En Product Backlog</td>
                    <td className={`w-[${anchoCasilla}%] text-center`}>Fecha Inicio</td> 
                    <td className={`w-[${anchoCasilla}%] text-center`}>Fecha Termino</td>
                   
                  </tr>
                </thead>
                <tbody className=' '>
                  {dataProyectosPortada.map((el, items)=>{
                      return <tr onClick={()=>{ruta ? router.push('/dashboard/iniciar'):''} 
                       }  key={el.id} className={`${ruta ? 'cursor-pointer hover:bg-gray-100': ''} border border-gray-200 h-10  `}>
                        <td  className={`w-[${anchoCasilla2}px] text-center `}>
                          {items + 1}
                        </td>
                        <td className={`w-[${anchoCasilla2}px] text-center`}>
                          {el.nombre}
                        </td>
                        <td className={`w-[${anchoCasilla2}px] text-center`}>
                          {el.tareasEnProduccion}
                        </td>
                        <td className={`w-[120px] text-center `}>
                          {el.tareasRechazadas}
                        </td>
                        <td className={`w-[${anchoCasilla2}px] text-center `}>
                          {el.tareasEnPB}
                        </td>
                        <td className={`w-[120px] text-center `}>
                          {el.fechaInicio}
                        </td>
                        <td className={`w-[${anchoCasilla2}px] text-center `}>
                          {el.fechaTermino}
                        </td>
                        
    
                      </tr>
                    })}
                </tbody>
            </table>
  )
}

export default TablaProyectos