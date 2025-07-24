'use client'

import {useEffect, useState} from 'react'
import { dataStatus } from '../utils/dataStatus'
import Tabla from '../../[Components]/Tabla'
import ModalCrearProyecto from '../../../[Components]/ModalCrearProyecto'
import { IFiltrosMisProyectos } from "../../../../../../Interfaces/IHome";
import ModalAgregarUsuarios from './ModalAgregarUsuarios'
import { useIdProyectoPro, useIdProyectoProUpdated, useProyectoPorUser } from '../../../../[stores]/homeStore'
import { getData } from '../../../../../React/Fetch/getData'
import { getDataLista } from '../../../../../React/Fetch/getDataLista'

const FiltrosMisProyectos = ({misProy, session}) => {



    const [abrirModal, setAbrirModal] = useState(false)
    const [abrirFiltrosStatus, setAbrirFiltrosStatus] = useState(false)

    const [status, setStatus] = useState('Activo')

    const [abrirAgregar, setAbrirAgregar] = useState(false)

    const [proyecto, setProyecto] = useState([])


    console.log('mis proo;', misProy);

    
  
    //const {proyectosUser, getProyectosUser} = useProyectoPorUser()
    const idProyy = useIdProyectoPro((state) => state.updateIdProyecto)



    

    

    const handleClickCrearProyecto =()=>{
    setAbrirModal(!abrirModal)
  }

  const handleClickAbrirFiltroFechaInicio =()=>{
    console.log('proyecto');
    
  }

  const handleClickAbrirFiltroStatus =()=>{
    //console.log('sdsd');
    setAbrirFiltrosStatus(!abrirFiltrosStatus)
  }

      // SELECT DEL FILTRO
  const handleClickSelectStatus =(e, id)=>{
    e.preventDefault()
    if(id==='1'){
      setStatus('Activo')
      setAbrirFiltrosStatus(false)
    }
    else if(id==='2'){
      setStatus('Suspendido')
      setAbrirFiltrosStatus(false)
    }
    else if(id==='3'){
      setStatus('Eliminado')
      setAbrirFiltrosStatus(false)
    }
    else if(id==='4'){
      setStatus('Activo')
      setAbrirFiltrosStatus(false)
    }
    else{
      console.log('todosss');
      setAbrirFiltrosStatus(false)
      
    }
  }

  const handleClickPincharAgregar =(e, id)=>{
    console.log('id del proyecto;', id);
    
    idProyy(id)
    setAbrirAgregar(!abrirAgregar)
  } 


  const traerProyecto = async()=>{
      const ruta = 'proyecto2'
      const url = idProyy
      const res = await getDataLista({ruta, url})
      setProyecto(res)
    }
    
    useEffect(()=>{
      traerProyecto()
    }, [])
  console.log('proyecto es un objeto:', proyecto);
  


  return (
    <>
    <div className={`${abrirModal && ' opacity-15'} h-[8%] w-[75%] flex items-end justify-end mb-3 -mt-5 `}>
          <button onClick={handleClickAbrirFiltroFechaInicio} className='w-24 px-1 h-7 cursor-pointer flex items-center justify-between text-(length:--tamañoLetraChica) border-b border-gray-200'>
            <div>
              Fecha Inicio
            </div>
            <div>
              <img className='w-3 h-3' src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png" alt="x" />
            </div>
          </button>
          
          <button onClick={handleClickAbrirFiltroStatus} className='cursor-pointer ml-4 w-24 px-1 h-7 flex items-center justify-between text-(length:--tamañoLetraChica) border-b border-gray-200'>
            <div>
              {status}
            </div>
            <div>
              <img className='w-3 h-3' src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png" alt="x" />
            </div>
          </button>
          <div>
            {abrirFiltrosStatus &&
            <div className='w-[5%] -ml-[97px] h-[90px] mt-[5px] z-50   absolute   max-h-[90px] overflow-auto bg-white'>
              {dataStatus.map((el)=>{
                return <div onClick={(e)=>handleClickSelectStatus(e, el.id)} className='text-(length:--tamañoLetraChica) py-[6px] pl-2 cursor-pointer hover:bg-gray-100' key={el.id}>
                  {el.status}
                </div>
              })}
            </div>
          }
          </div>
          <button onClick={handleClickCrearProyecto} className="ml-4 rounded px-1 flex h-[60%]  w-[10%] justify-between items-center border-b-2 hover:border-b hover:border-blue-500 border-blue-300  text-black text-(length:--tamañoLetraChica)">
            <div className="w-[9%] grid items-center">
              <img className="w-[100%] h-[100%]" src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png' width={15} height={15} alt="s"/> 
            </div>
            <div className="text-(length:--tamañoLetraChica) cursor-pointer w-[90%] grid items-center text-gray-800 ">
              Crear un Proyecto
            </div> 
          </button>
          </div>
          <div className={`${abrirModal && ' opacity-15'} w-[75%] h-full text-(length:--tamañoLetraChica)   z-40      max-h-[89%] overflow-auto`}>
            <Tabla
              ruta = {false}
              status={status}
              misProy={misProy}
              handleClickPincharAgregar={handleClickPincharAgregar}
            />
          </div>
          {abrirModal &&
            <div className="w-[100%] grid justify-items-center">
            <ModalCrearProyecto
                abrirModal={abrirModal} 
                setAbrirModal={setAbrirModal}
                posicion = ''
                session={session}
            />
            </div>
            }

            {abrirAgregar &&
          <div className='w-[100%] ml-3 flex justify-end '>
            <ModalAgregarUsuarios
            setAbrirAgregar={setAbrirAgregar}

            />
          </div>
        
        }
    </>
    
  )
}

export default FiltrosMisProyectos