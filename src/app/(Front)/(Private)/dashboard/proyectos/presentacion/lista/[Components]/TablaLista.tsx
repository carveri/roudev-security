'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import ModalEliminar from '../../../../[Components]/ModalEliminar'
import { useIdTareaSelecccionado } from '../../../../../[stores]/homeStore'

const TablaLista = ({abrirModalTareaLista, tareasActivas}) => {

  // const [equipoRes, setEquipoRes] = useState([])
  // const [abrirModalEliminar, setAbrirModalEliminar] = useState(false)

  const [activarEliminar, setActivarEliminar] = useState(false)

  const idTareaSeleccioando = useIdTareaSelecccionado((state) => state.updateTareaSeleccionadoId)

    const router = useRouter()

    const ruta = false

    const anchoCasilla = 6
    const anchoCasilla2 = 120


    console.log('TAREAAS ACTIVAS:', tareasActivas);

    

    // // traer equipo del responsable
    // const getEquipoDelResponsable = async()=>{
    //   const ruta = 'equipo'
    //   const url = ''
    //   const equipoResponsable = await getDataLista({ruta, url})
    //   setEquipoRes(equipoResponsable)
    // }

   const tareasActivas2 =[]


    const handleClickELimnarTarea =(id)=>{
      idTareaSeleccioando(id)
      setActivarEliminar(!activarEliminar)

    }
    

  return (
    <>
      <table className={`${activarEliminar && 'opacity-15'} border border-gray-200 w-[75%] text-tamañoLetraChica  `}>
            <thead className=' w-full'>
              <tr className='h-11 bg-gray-100 w-[100%]'>
                <td className={`w-[${anchoCasilla}%] text-center`}>Numero</td>
                <td className={`w-[${anchoCasilla}%] text-center`}>Nombre de la tarea</td>
                <td className={`w-[${anchoCasilla}%] text-center`}>Creador</td>
                <td className={`w-[${anchoCasilla}%] text-center`}>Responsable</td>
                <td className={`w-[${anchoCasilla}%] text-center`}>Equipo Responsable</td>
                <td className={`w-[${anchoCasilla}%] text-center`}>Colaboradores</td>
                <td className={`w-[${anchoCasilla}%] text-center`}>Urgencia</td>
                <td className={`w-[${anchoCasilla}%] text-center`}>Fecha Inicio</td>
                <td className={`w-[${anchoCasilla}%] text-center`}>Fecha Termino</td>
                <td className={`w-[${anchoCasilla}%] text-center`}>Etapa</td>
                <td className={`w-[${anchoCasilla}%] text-center`}></td>
              </tr>
            </thead>
            <tbody className='  w-[69%]  fixed  z-40 h-[482px] max-h-[482px] overflow-auto'>
              {tareasActivas?.map((el, items)=>{
                  return <tr onClick={()=>{ruta ? router.push('/dashboard/iniciar'):''} 
                   }  key={el.id} className={`${ruta ? 'cursor-pointer hover:bg-gray-100': ''} border border-gray-200 h-10  `}>
                    <td  className={`w-[${anchoCasilla2}px] text-center `}>
                      {items + 1}
                    </td>
                    
                    <td className={`w-[${anchoCasilla2}px] text-center capitalize`}>
                      {el?.nombreTarea.length > 17 ? el?.nombreTarea.slice(0,17) + '...' : el?.nombreTarea}
                    </td>
                    <td className={`w-[120px] text-center capitalize`}>
                      Juan Perez
                    </td>
                    <td className={`w-[${anchoCasilla2}px] text-center capitalize`}>
                      Romina Lopez
                    </td>
                    <td className={`w-[${anchoCasilla2}px] text-center `}>
                      Team 12
                    </td>
                    <td className={`w-[${anchoCasilla2}px] text-center `}>
                      <div onClick={()=>abrirModalTareaLista(el.id)} className='text-blue-500 hover:text-blue-700 cursor-pointer font-semibold'>{el?.aportantes.length}  Colaboradores</div>
                    </td>
                    <td className={`w-[${anchoCasilla2}px] flex justify-between  px-8`}>
                      <article className={`w-[${anchoCasilla2}px]  text-center pt-[10px] `}>
                        {el?.urgenciaTarea}
                      </article>
                      <article className='flex items-center'>
                        <article className={`rounded-full  w-2 h-2 ${el.urgenciaTarea ==='Alta' ? 'bg-red-500': el.urgenciaTarea ==='Media' ? 'bg-yellow-500': el.urgenciaTarea ==='Baja' ? 'bg-green-500': ''}`}>
                          
                        </article>
                      </article>
                    </td>
                    <td className={`w-[${anchoCasilla2}px] text-center `}>
                      {el?.fechaInicio}
                    </td>
                    <td className={`w-[${anchoCasilla2}px] text-center `}>
                      {el?.fechaTermino}
                    </td>
                    <td className={`w-[${anchoCasilla2}px] text-center `}>
                      {el?.etapaTarea}
                    </td>
                    <td onClick={()=>handleClickELimnarTarea(el.id)} className={`hover:border-b border-blue-500 py-3 flex justify-center font-semibold w-[100px] text-center  cursor-pointer text-blue-500 hover:underline`}>
                      <img className='w-3 h-3 ' src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/eliminar.png" alt="sd" />
                    </td>

                  </tr>
                })}
                
            </tbody>
        </table>
        {activarEliminar && 
              <ModalEliminar
                setActivarEliminar={setActivarEliminar}
                nombre = 'ds'
                id= ''
              
              />
            
            }
    </>
        
        

  )
}

export default TablaLista