
'use client'

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

import { dataColaboradoresTarea } from "../utils/dataColaboradoresTarea"
import Link from "next/link"
import { useHistoriaAdmin, useIdTareaSelecccionado } from "../../../../../[stores]/homeStore"
import { getDataLista } from "../../../../../../React/Fetch/getDataLista"


const ModalTareaLista = ({setAbrirModalTareaState}) => {
  const router = useRouter()
  
      const [nombreProyecto, setNombreProyecto] = useState('')
      const [proyecto, setProyecto] = useState('Proyecto 1')
      const [subTipoProyecto, setSubTipoProyecto] = useState('Juan Perez')

      const [nombreResponsable, setNombreResponsable] = useState('')

    
      // ESTADOS PARA ABRIR Y CERRAR LA LISTA DE TIPOS Y SUBTIPOS
      const [abrirTipos, setAbrirTipos] = useState(false)
      const [abrirSubTipos, setAbrirSubTipos] = useState(false)
    
      // ESTADO ID DEL SELECT
      const [idTipoProyecto, setIdTipoProyecto] = useState('')
      const [idSubTipoProyecto, setIdSubTipoProyecto] = useState('')

      const [activoEquipo, setActivoEquipo] = useState(true)
    
      // CAPTURO LOS VALORES DE LOS INPUTS
      const handleChangeCrearProyecto = (e)=>{
        if(e.target.name === 'nombreProyecto'){
          setNombreProyecto(e.target.value)
        }
      }
    
      // CAPTURO EL ESTADO DEL FORMULARIO
      const handleClickModalCrearProyecto =(e)=>{
        e.preventDefault()
        if(e.target.name === 'tipoDelProyecto'){
          setAbrirTipos(!abrirTipos)
        }
        else if(e.target.name === 'subTipoDelProyecto'){
          setAbrirSubTipos(!abrirSubTipos)
        }
        else {
          console.log('sd');
        }
      }
    
      // BOTON SELECT TIPO Y SUBTIPO DE PROYECTO
      const handleClickSelectProyecto =(e, id, nombre)=>{
        e.preventDefault()
        if(e.target.name === 'selectTipoProyecto'){
          //console.log(id);
          setIdTipoProyecto(id)
          setProyecto(nombre)
          setAbrirTipos(false)
        }
        else if(e.target.name === 'selectSubTipoProyecto'){
          //console.log(id);
          setIdSubTipoProyecto(id)
          setSubTipoProyecto(nombre)
          setAbrirSubTipos(false)
        }
        else {
          console.log('ass');
          
        }
      }
    
    
      // ENVIO DEL FORMULARIO AL BACK
      const handleClickCrearEquipo =(e)=>{
        e.preventDefault()
        const data = {nombreProyecto, idTipoProyecto, idSubTipoProyecto}
        console.log(data);
        
        setActivoEquipo(false)
        router.push('/dashboard/home/misProyectos/verProyecto')
      }
  
      const handleClickVolverCrearEquipo=(e)=>{
          e.preventDefault()
          setAbrirModalTareaState(false)
          //router.push('/dashboard/home/misProyectos/verProyecto')
      }
  

      const idTareaSeleccioando = useIdTareaSelecccionado((state) => state.tareaSeleccionadoId)
              //const tareaSeleccionadaId = idTareaSeleccioando

              console.log('id de la tarea pinchada:', idTareaSeleccioando);
              
      // TRAER LAS TAREAS DESDE ZUSTAND
              const {tareas, getTareas} = useHistoriaAdmin() 
              
               useEffect(()=>{
                getTareas(idTareaSeleccioando)
              }, [idTareaSeleccioando])
        
              console.log('tareas desde zut para TARAE COLABORADORES:', tareas);

              const listaAportantes = tareas[0]?.aportantes

              console.log('lista APORTANTES:', listaAportantes);
              
  
        const traerResponsableTarea = async()=>{
          const ruta = 'user'
          const url = '801cf9c1-d248-40e9-98f6-b598b03af616'
          const res = await getDataLista({ruta, url})
          setNombreResponsable(res)
        }

        // const traerColaboradores = async()=>{


        //   getDataLista()
        // }

        useEffect(()=>{
          traerResponsableTarea()
        }, [])
  
        console.log('nombreresponsable;', nombreResponsable);
        console.log('TAEASS:', tareas);
        
        
    
      return (
        <div>
            <form  className={`w-[23%] h-[80%] py-4 px-10  rounded-md mt-20  fixed top-14 ml-[1350px]   text-tamañoLetraChica`}>
                  <header className='capitalize w-full h-[10%]  grid place-content-center  text-gray-600 font-semibold text-tamañoLetra '>
                    {tareas[0]?.nombreTarea} 
                  </header>
                  <main className='h-[75%] grid grid-rows-7 mt-5'>
                    
                    <div className=' '>
                      <label className=' text-gray-600 h-1 ' htmlFor="">Responsable de la Tarea</label>
                          <Link href={'/dashboard/perfil/perfilLaboral'} className=" flex mt-1 py-3  pl-1 hover:bg-gray-100 items-center">
                              <img className="w-5 h-5" width={10} height={10} src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png' alt="sd" />
                              <span className="ml-2 capitalize">{nombreResponsable?.primerNombre} {nombreResponsable?.apellidoPaterno}</span>
                          </Link>
                      </div>
                       <div className=' mt-2'>
                      <label className=' text-gray-600 h-1 ' htmlFor="">Equipo responsable de la Tarea</label>
                          <Link href={'/dashboard/perfil/perfilLaboral'} className=" flex mt-1 py-3  pl-1 hover:bg-gray-100 items-center">
                              <img className="w-5 h-5" width={10} height={10} src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png' alt="sd" />
                              <span className="ml-2 capitalize">{tareas[0]?.equipo?.nombreEquipo} </span>
                          </Link>
                      </div>
                    
                    <div className='mt-2'>
                      <label className='h-1 text-gray-600 ' >Colaboradores</label>
                      <ul className="z-50 mt-2  max-h-[185px] overflow-auto ">
                        {dataColaboradoresTarea.map((el)=>{
                          return <Link className="" href={'/dashboard/perfil/perfilLaboral'} key={el.id}>
                            <div className=" flex  pl-1 hover:bg-gray-100 py-3">
                              <img width={20} height={20} src={el.avatar} alt="sd" />
                              <span className="ml-2 capitalize">{el.nombre}</span>
                            </div>
                          </Link>
                        })}
                      </ul>
                    </div>
                    <div className=' mt-40'>
                      <label className='h-1 text-gray-600 ' htmlFor="">Descripción de la Tarea</label>
                      <div className=" flex capitalize items-center pl-1 mt-2">{tareas[0]?.descripcionDeTarea}</div>
                    </div>
                    
                    
                  </main>
                  <div className='h-[10%] w-full flex justify-end items-end gap-x-2'>
                    
                    <button onClick={handleClickVolverCrearEquipo}  className='h-[50%] w-[20%]  rounded cursor-pointer bg-colorBotonCerrar hover:bg-hoverColorBotonCerrar  hover:duration-300  text-white font-bold text-tamañoLetraChica'>
                      Cerrar
                    </button>
                  </div>
                  
              </form>
        </div>
      )
}

export default ModalTareaLista