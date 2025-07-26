'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { dataEquiposProyecto1 } from './utils/dataEquiposProyecto1'
import { useIdProyectoProUpdated, useProyectoUpdate, useUsersOnProyectos } from '../../../../[stores]/homeStore'
import ModalEliminar from '../../../[Components]/ModalEliminar'
import TablaCargoUsuario from '../[Components]/TablaCargoUsuario'

const page = () => {

  const idProyectoZustand = useIdProyectoProUpdated((state) => state.idProyectoUpdated)

  const {proyecto, getProyecto} = useProyectoUpdate() 
  const {usersOnProyectos, getUsersOnProyectos} = useUsersOnProyectos()

  // abrir la modal de eliminar
  const [abrirModal, setAbrirModal] = useState(false)

  

  const router = useRouter()

  // const handleClickEliminarProyecto =()=>{
  //     const ruta = 'proyecto'
  //     const url = idProyectoZustand
  //     setAbrirModal(!abrirModal)
  //     //deleteData({ruta, url})
  //     //console.log('id del proy que voy a aeliminar;', idProyectoZustand);
  // }

useEffect(()=>{
    getProyecto(idProyectoZustand)
    getUsersOnProyectos(idProyectoZustand)
  }, [])
 //console.log('prororo;', proyecto);
  



//  console.log('id del proye:', idProyectoZustand);
 
 

  return (
    <>
      <header className='w-[75%] h-[10%] flex items-center  pl-8 font-semibold text-gray-700 '>
        <div>
          Detalles del Proyecto -
        </div> 
        <div className='text-blue-500 capitalize ml-1'>
          {proyecto[0]?.nombreProyecto}
        </div>
      </header>
      <div className='w-[75%] h-[75%] flex gap-x-3 text-(length:--tamañoLetraChica) pl-8 mt-3'>
        <div className='w-[30%] h-full grid grid-rows-9 items-center pl-2'>
          {/* <section className='w-full  flex gap-x-3 '>
            <div className='w-[50%]'>
              Nombre del Proyecto:
            </div>
            <div className='w-[50%] capitalize '>
              {proyecto[0]?.nombreProyecto}
            </div>
          </section> */}
        <section className='w-full  flex gap-x-3'>
          <div className='w-[70%]'>
            Icono del Proyecto:
          </div>
          <div className='w-[30%]'>
            <img className='w-4 h-4' src={`${!proyecto[0]?.iconoProyecto ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/nextjs.png': proyecto[0]?.iconoProyecto}`} alt="sd" />
          </div>
        </section>
        <section className='w-full  flex gap-x-3'>
          <div className='w-[70%]'>
            Estado del Proyecto:
          </div>
          <div className='w-[30%] text-green-500'>
            {proyecto[0]?.statusProyecto}
          </div>
        </section>
        <section className='w-full  flex gap-x-3'>
          <div className='w-[70%]'>
            Fecha de Creacion del Proyecto:
          </div>
          <div className='w-[30%]'>
            {proyecto[0]?.fechaInicio}
          </div>
        </section>
        <section className='w-full  flex gap-x-3'>
          <div className='w-[70%]'>
            Fecha Ultima actulizacion del Proyecto:
          </div>
          <div className='w-[30%]'>
            {!proyecto[0]?.fechaActualizacion ? '-': proyecto[0]?.fechaActualizacion}
          </div>
        </section>
        <section className='w-full  flex gap-x-3'>
          <div className='w-[70%]'>
            Fecha Termino del Proyecto:
          </div>
          <div className='w-[30%]'>
            {proyecto[0]?.fechaTermino}
          </div>
        </section>
        <section className='w-full  flex gap-x-3'>
          <div className='w-[70%] '>
            N° Equipos en el Proyecto:
          </div>
          <div className='w-[30%]'>
            {proyecto[0]?.equipos.length}
          </div>
        </section>
        <section className='w-full  flex gap-x-3'>
          <div className='w-[70%]'>
            N° Integrantes  del Proyecto:
          </div>
          <div className='w-[30%] '>
            30
          </div>
        </section>
      </div>





      <div className='w-[70%] '>
        <header className='w-full h-12 grid place-content-center font-semibold text-gray-600'>
          Modificar el Cargo del Usuario
        </header>
        <TablaCargoUsuario
          usersOnProyectos={usersOnProyectos}
        />
      </div>

     

      


      
    </div>
    <div className='w-[75%] h-[6%] flex items-end justify-end '>
      <div className='w-[19%] h-[80%] flex items-center justify-end gap-x-2 '>
        <button onClick={()=>router.back()} className='cursor-pointer w-[80%] font-semibold h-[100%] bg-violet-300 hover:bg-violet-500 text-white text-[11px] rounded'>
          Volver
        </button>
        {/* <button onClick={()=>router.back()} className='cursor-pointer w-[80%] font-semibold h-[100%] bg-blue-500 hover:bg-blue-600 text-white text-[11px] rounded'>
          Guardar Cambios
        </button> */}
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