'use client'

import {useEffect, useState} from 'react'
import { useIdProyectoPro, useIdResponsableTarea, useIdTareaSelecccionado } from '../../../../../[stores]/homeStore'
import { getDataCompleja } from '../../../../../../React/Fetch/getDataCompleja'
import { useRouter } from "next/navigation";
import Link from 'next/link';

const ComTablero = ({session, abrirModalTareas, setAbrirModalTareas, traerBooleano, acepColaborador, setabrirModalAceptar}) => {

    const router = useRouter()
    console.log('session en tablero:', session);

    const [vacioTablero, setVacioTablero] = useState(false)

    // ESTADOS DESDE ZUSTAND
          const idProyy = useIdProyectoPro((state) => state.idProyecto)
          const proyectoId = idProyy

          // ESTADOS DESDE ZUSTAND
                const idTareaSeleccioando = useIdTareaSelecccionado((state) => state.updateTareaSeleccionadoId)
                //const tareaSeleccionadaId = idTareaSeleccioando
          
                // zustand
                  const idResponsableTarea = useIdResponsableTarea((state) => state.updateIdResponsableTarea)

           const [tareasActivas, setTareasActivas] = useState([])
            const [tareasFinalizadas, setTareasFinalizadas] = useState([])
            const [abrirModalTareaStates, setAbrirModalTareaStates] = useState(false)


            

    // FUNCION PARA TRAER LAS TAREAS ACTIVAS Y FINALIZADAS
          const getTareas =async(status:string, set)=>{
                  const ruta = 'tarea'
                  const elem1 = 'proyectoId'
                  const param1 = proyectoId
                  const elem2 = 'userId'
                  const param2 = session?.user?.id
                  const elem3 = 'status'
                  const param3 = status
      
                  const res = await getDataCompleja({ruta, elem1, param1, elem2, param2, elem3, param3})
                  set(res)
                  }
    
    
            useEffect(()=>{
                    getTareas('Activa' , setTareasActivas)
                    getTareas('Finalizada', setTareasFinalizadas)
                    
                }, [idProyy])

        

        const abrirModalTarea =(id, responsable)=>{
            idTareaSeleccioando(id)
            idResponsableTarea(responsable)
            acepColaborador(false)
            traerBooleano(true)
            setabrirModalAceptar(false)
            //props.abrirModalTareaStatef(abrirModalTareaStates, setAbrirModalTareaStates)
        }


        
        
    
    
  return (
    <>
        

        <div className='w-full h-[100%] z-10 grid grid-cols-6 gap-x-3 px-2 text-(length:--tamañoLetraChica) '>
        <div className='w-full h-full'>
            <header className='w-full h-[8%] grid place-content-center font-semibold text-blue-600'>
                Product Backlog
            </header>
            <main className='w-full h-[90%] flex-col'>
                {tareasActivas?.map((el)=>{
                    if(el?.etapaTarea === 'Product Backlog'){
                        return <button key={el?.id} name={el?.id} onClick={()=>abrirModalTarea(el.id, el.responsableTarea)} className={`rounded w-full h-[65px] cursor-pointer mb-1  ${el.urgenciaTarea === 'Alta' ? 'border border-gray-200 hover:border-2 hover:border-red-500' : el.urgenciaTarea === 'Media' ? 'border border-gray-200  hover:border-2 hover:border-yellow-500' : el.urgenciaTarea === 'Baja' ? 'border border-gray-200  hover:border-2 hover:border-green-500' : ''}`}>
                        <div className='  text-tamañoLetraChica'> 
                            <article className='flex text-gray-600'>
                                <div className='w-[92%] pl-5 capitalize'>
                                    {el?.nombreTarea.length > 20 ? el?.nombreTarea.slice(0,20) + '...' : el?.nombreTarea}
                                </div>
                                <div className='w-[8%] mr-1 mt-1'>
                                    <div className={`rounded-full w-3 h-3 border border-gray-300  ${el.urgenciaTarea === 'Alta' ? 'bg-red-500' : el.urgenciaTarea === 'Media' ? 'bg-yellow-500' : el.urgenciaTarea === 'Baja' ? 'bg-green-500' : ''}`}>
                                    </div>    
                                </div>
                            </article>
                            <article className=' text-gray-600  text-[11px]'>
                                {el?.statusTarea}
                            </article>
                            <article className='font-semibold text-gray-500 '>
                                {el?.fechaInicio} - {el?.fechaTermino}
                            </article>
                        </div>
                       
                    </button>
                    }
                    
                })}
            </main>
        </div>
        <div className='w-full h-full'>
            <header className='w-full h-[8%] grid place-content-center font-semibold text-blue-600'>
                Diseño UX / UI
            </header>
            <main className='w-full h-[90%] flex-col'>
                {tareasActivas?.map((el)=>{
                    if(el?.etapaTarea === 'Diseño'){
                        return <button key={el?.id} name={el?.id} onClick={()=>abrirModalTarea(el.id, el.responsableTarea)} className={`rounded w-full h-[65px] cursor-pointer mb-1  ${el.urgenciaTarea === 'Alta' ? 'border border-gray-200 hover:border-2 hover:border-red-500' : el.urgenciaTarea === 'Media' ? 'border border-gray-200  hover:border-2 hover:border-yellow-500' : el.urgenciaTarea === 'Baja' ? 'border border-gray-200  hover:border-2 hover:border-green-500' : ''}`}>
                        <div className='  text-tamañoLetraChica'> 
                            <article className='flex text-gray-600'>
                                <div className='w-[92%] pl-5 capitalize'>
                                    {el?.nombreTarea.length > 20 ? el?.nombreTarea.slice(0,20) + '...' : el?.nombreTarea}
                                </div>
                                <div className='w-[8%] mr-1 mt-1'>
                                    <div className={`rounded-full w-3 h-3 border border-gray-300  ${el.urgenciaTarea === 'Alta' ? 'bg-red-500' : el.urgenciaTarea === 'Media' ? 'bg-yellow-500' : el.urgenciaTarea === 'Baja' ? 'bg-green-500' : ''}`}>
                                    </div>    
                                </div>
                            </article>
                            <article className=' text-gray-600  text-[11px]'>
                                {el?.statusTarea}
                            </article>
                            <article className='font-semibold text-gray-500 '>
                                {el?.fechaInicio} - {el?.fechaTermino}
                            </article>
                        </div>
                       
                    </button>
                    }
                    
                })}
            </main>
        </div>
        <div className='w-full h-full'>
            <header className='w-full h-[8%] grid place-content-center font-semibold text-blue-600'>
                Desarrollo
            </header>
            <main className='w-full h-[90%] flex-col'>
                {tareasActivas?.map((el)=>{
                    if(el?.etapaTarea === 'Desarrollo'){
                        return <button key={el?.id} name={el?.id} onClick={()=>abrirModalTarea(el.id, el.responsableTarea)} className={`rounded w-full h-[65px] cursor-pointer mb-1  ${el.urgenciaTarea === 'Alta' ? 'border border-gray-200 hover:border-2 hover:border-red-500' : el.urgenciaTarea === 'Media' ? 'border border-gray-200  hover:border-2 hover:border-yellow-500' : el.urgenciaTarea === 'Baja' ? 'border border-gray-200  hover:border-2 hover:border-green-500' : ''}`}>
                        <div className='  text-tamañoLetraChica'> 
                            <article className='flex text-gray-600'>
                                <div className='w-[92%] pl-5 capitalize'>
                                    {el?.nombreTarea.length > 20 ? el?.nombreTarea.slice(0,20) + '...' : el?.nombreTarea}
                                </div>
                                <div className='w-[8%] mr-1 mt-1'>
                                    <div className={`rounded-full w-3 h-3 border border-gray-300  ${el.urgenciaTarea === 'Alta' ? 'bg-red-500' : el.urgenciaTarea === 'Media' ? 'bg-yellow-500' : el.urgenciaTarea === 'Baja' ? 'bg-green-500' : ''}`}>
                                    </div>    
                                </div>
                            </article>
                            <article className=' text-gray-600  text-[11px]'>
                                {el?.statusTarea}
                            </article>
                            <article className='font-semibold text-gray-500 '>
                                {el?.fechaInicio} - {el?.fechaTermino}
                            </article>
                        </div>
                       
                    </button>
                    }
                    
                })}
            </main>
        </div>
        <div className='w-full h-full'>
            <header className='w-full h-[8%] grid place-content-center font-semibold text-blue-600'>
                Quality Assurance
            </header>
            <main className='w-full h-[90%] flex-col'>
                {tareasActivas?.map((el)=>{
                    if(el?.etapaTarea === 'QA'){
                        return <button key={el?.id} name={el?.id} onClick={()=>abrirModalTarea(el.id, el.responsableTarea)} className={`rounded w-full h-[65px] cursor-pointer mb-1  ${el.urgenciaTarea === 'Alta' ? 'border border-gray-200 hover:border-2 hover:border-red-500' : el.urgenciaTarea === 'Media' ? 'border border-gray-200  hover:border-2 hover:border-yellow-500' : el.urgenciaTarea === 'Baja' ? 'border border-gray-200  hover:border-2 hover:border-green-500' : ''}`}>
                        <div className='  text-tamañoLetraChica'> 
                            <article className='flex text-gray-600'>
                                <div className='w-[92%] pl-5 capitalize'>
                                    {el?.nombreTarea.length > 20 ? el?.nombreTarea.slice(0,20) + '...' : el?.nombreTarea}
                                </div>
                                <div className='w-[8%] mr-1 mt-1'>
                                    <div className={`rounded-full w-3 h-3 border border-gray-300  ${el.urgenciaTarea === 'Alta' ? 'bg-red-500' : el.urgenciaTarea === 'Media' ? 'bg-yellow-500' : el.urgenciaTarea === 'Baja' ? 'bg-green-500' : ''}`}>
                                    </div>    
                                </div>
                            </article>
                            <article className=' text-gray-600  text-[11px]'>
                                {el?.statusTarea}
                            </article>
                            <article className='font-semibold text-gray-500 '>
                                {el?.fechaInicio} - {el?.fechaTermino}
                            </article>
                        </div>
                       
                    </button>
                    }
                    
                })}
            </main>
        </div>
        <div className='w-full h-full'>
            <header className='w-full h-[8%] grid place-content-center font-semibold text-blue-600'>
                Debugger
            </header>
            <main className='w-full h-[90%] flex-col'>
                {tareasActivas?.map((el)=>{
                    if(el?.etapaTarea === 'Debugger'){
                        return <button key={el?.id} name={el?.id} onClick={()=>abrirModalTarea(el.id, el.responsableTarea)} className={`rounded w-full h-[65px] cursor-pointer mb-1  ${el.urgenciaTarea === 'Alta' ? 'border border-gray-200 hover:border-2 hover:border-red-500' : el.urgenciaTarea === 'Media' ? 'border border-gray-200  hover:border-2 hover:border-yellow-500' : el.urgenciaTarea === 'Baja' ? 'border border-gray-200  hover:border-2 hover:border-green-500' : ''}`}>
                        <div className='  text-tamañoLetraChica'> 
                            <article className='flex text-gray-600'>
                                <div className='w-[92%] pl-5 capitalize'>
                                    {el?.nombreTarea.length > 20 ? el?.nombreTarea.slice(0,20) + '...' : el?.nombreTarea}
                                </div>
                                <div className='w-[8%] mr-1 mt-1'>
                                    <div className={`rounded-full w-3 h-3 border border-gray-300  ${el.urgenciaTarea === 'Alta' ? 'bg-red-500' : el.urgenciaTarea === 'Media' ? 'bg-yellow-500' : el.urgenciaTarea === 'Baja' ? 'bg-green-500' : ''}`}>
                                    </div>    
                                </div>
                            </article>
                            <article className=' text-gray-600  text-[11px]'>
                                {el?.statusTarea}
                            </article>
                            <article className='font-semibold text-gray-500 '>
                                {el?.fechaInicio} - {el?.fechaTermino}
                            </article>
                        </div>
                       
                    </button>
                    }
                    
                })}
            </main>
        </div>
        <div className='w-full h-full'>
            <header className='w-full h-[8%] grid place-content-center font-semibold text-blue-600'>
                Producción
            </header>
            <main className='w-full h-[90%] flex-col'>
                {tareasActivas?.map((el)=>{
                    if(el?.etapaTarea === 'Produccion'){
                        return <button key={el?.id} name={el?.id} onClick={()=>abrirModalTarea(el.id, el.responsableTarea)} className={`rounded w-full h-[65px] cursor-pointer mb-1  ${el.urgenciaTarea === 'Alta' ? 'border border-gray-200 hover:border-2 hover:border-red-500' : el.urgenciaTarea === 'Media' ? 'border border-gray-200  hover:border-2 hover:border-yellow-500' : el.urgenciaTarea === 'Baja' ? 'border border-gray-200  hover:border-2 hover:border-green-500' : ''}`}>
                        <div className='  text-tamañoLetraChica'> 
                            <article className='flex text-gray-600'>
                                <div className='w-[92%] pl-5 capitalize'>
                                    {el?.nombreTarea.length > 20 ? el?.nombreTarea.slice(0,20) + '...' : el?.nombreTarea}
                                </div>
                                <div className='w-[8%] mr-1 mt-1'>
                                    <div className={`rounded-full w-3 h-3 border border-gray-300  ${el.urgenciaTarea === 'Alta' ? 'bg-red-500' : el.urgenciaTarea === 'Media' ? 'bg-yellow-500' : el.urgenciaTarea === 'Baja' ? 'bg-green-500' : ''}`}>
                                    </div>    
                                </div>
                            </article>
                            <article className=' text-gray-600  text-[11px]'>
                                {el?.statusTarea}
                            </article>
                            <article className='font-semibold text-gray-500 '>
                                {el?.fechaInicio} - {el?.fechaTermino}
                            </article>
                        </div>
                       
                    </button>
                    }
                    
                })}
            </main>
        </div>

        
        
    </div>
    
    
    </>
    
  )
}

export default ComTablero