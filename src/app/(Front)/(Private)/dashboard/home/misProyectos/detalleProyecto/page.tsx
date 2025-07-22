'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { dataEquiposProyecto1 } from './utils/dataEquiposProyecto1'
import { useIdProyectoProUpdated, useProyectoUpdate } from '../../../../[stores]/homeStore'
import ModalEliminar from '../../../[Components]/ModalEliminar'

const page = () => {

  const idProyectoZustand = useIdProyectoProUpdated((state) => state.idProyectoUpdated)

  const {proyecto, getProyecto} = useProyectoUpdate() 

  // abrir la modal de eliminar
  const [abrirModal, setAbrirModal] = useState(false)

  

  const router = useRouter()

  const handleClickEliminarProyecto =()=>{
      const ruta = 'proyecto'
      const url = idProyectoZustand
      setAbrirModal(!abrirModal)
      //deleteData({ruta, url})
      //console.log('id del proy que voy a aeliminar;', idProyectoZustand);
  }

useEffect(()=>{
    getProyecto(idProyectoZustand)
  }, [])
 console.log('prororo;', proyecto);
  

  return (
    <>
      <header className='w-[75%] h-[10%] flex items-center  pl-8 font-semibold text-gray-700'>
        <div>
          Detalles del Proyecto -
        </div> 
        <div className='text-blue-500 capitalize ml-1'>
          {proyecto[0]?.nombreProyecto}
        </div>
      </header>
      <div className='w-[77%] h-[45%] flex gap-x-3 text-(length:--tamañoLetraChica) pl-8'>
        <div className='w-[33%] h-full grid grid-rows-6 items-center pl-2'>
          <section className='w-full  flex gap-x-3 '>
            <div className='w-[50%]'>
              Nombre del Proyecto:
            </div>
            <div className='w-[50%] capitalize '>
              {proyecto[0]?.nombreProyecto}
            </div>
          </section>
        <section className='w-full  flex gap-x-3'>
          <div className='w-[50%]'>
            Icono del Proyecto:
          </div>
          <div className='w-[50%]'>
            <img className='w-4 h-4' src={`${!proyecto[0]?.iconoProyecto ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/nextjs.png': proyecto[0]?.iconoProyecto}`} alt="sd" />
          </div>
        </section>
        <section className='w-full  flex gap-x-3'>
          <div className='w-[50%]'>
            Estado del Proyecto:
          </div>
          <div className='w-[50%] text-green-500'>
            {proyecto[0]?.statusProyecto}
          </div>
        </section>
        <section className='w-full  flex gap-x-3'>
          <div className='w-[50%]'>
            Fecha de Creacion del Proyecto:
          </div>
          <div className='w-[50%]'>
            {proyecto[0]?.fechaInicio}
          </div>
        </section>
        <section className='w-full  flex gap-x-3'>
          <div className='w-[50%]'>
            Fecha Ultima actulizacion del Proyecto:
          </div>
          <div className='w-[50%]'>
            {!proyecto[0]?.fechaActualizacion ? '-': proyecto[0]?.fechaActualizacion}
          </div>
        </section>
        <section className='w-full  flex gap-x-3'>
          <div className='w-[50%]'>
            Fecha Termino del Proyecto:
          </div>
          <div className='w-[50%]'>
            {proyecto[0]?.fechaTermino}
          </div>
        </section>
      </div>







      <div className='w-[71%] h-[100%] flex gap-x-3 text-(length:--tamañoLetraChica) '>
        <div className='w-[100%] h-full grid   pl-2'>
        <section className='w-full h-[20%]  flex gap-x-3  mt-4'>
          <div className='w-[20%] '>
            N° Equipos en el Proyecto:
          </div>
          <div className='w-[80%]'>
            {proyecto[0]?.equipos.length}
          </div>
        </section>
        <section className='w-full  h-[75%] flex gap-x-3 mt-5 '>
          <div className='w-[20%]'>
            Equipos del Proyecto:
          </div>
          <div className='w-[70%] h-[90%] grid grid-cols-3 gap-2 max-h-[400px] overflow-auto '>
                {proyecto[0]?.equipos.map((el)=>{
                return <div key={el.id} className=' flex gap-x-2 z-50 py-2 hover:bg-gray-100 cursor-pointer'>
                  <div>
                    <img className='w-4 h-4' src={`${!el.iconoEquipo ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png': el?.iconoEquipo}`} alt="s" />
                  </div>
                  <div>
                    {el?.nombreEquipo.length > 25 ? el?.nombreEquipo.slice(0,25) + '...' : el?.nombreEquipo}
                  </div>
                </div>
              })}
          </div>
          
        </section>
        <section className='w-full h-[20%] flex gap-x-3 -mt-3'>
          <div className='w-[20%]'>
            N° Integrantes  del Proyecto:
          </div>
          <div className='w-[80%] '>
            30
          </div>
        </section>        
      </div>
      </div>

      


      
    </div>
    <div className='w-[75%] h-[40%] flex items-end justify-end '>
      <div className='w-[11%] h-[12%] flex items-center justify-end gap-x-2 '>
        <button onClick={()=>router.back()} className=' w-[80%] font-semibold h-[100%] bg-violet-400 hover:bg-violet-500 text-white text-[11px] rounded'>
          Volver
        </button>
        <button onClick={handleClickEliminarProyecto} className='border-b border-gray-300 hover:border-b hover:border-gray-800 w-[20%] h-[100%] flex items-center justify-center'>
          <img className='w-[14px] h-[14px]' src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/eliminar.png" alt="sd" />
        </button>
      </div>
    </div>
    {abrirModal &&
    
      <ModalEliminar
        setActivarEliminar={setAbrirModal}
        nombre= {proyecto[0]?.nombreProyecto}
        id= {idProyectoZustand}
      />
    }
    </>
  )
}

export default page