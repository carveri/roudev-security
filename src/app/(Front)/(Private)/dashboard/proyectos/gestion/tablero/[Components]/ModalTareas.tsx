
'use client'

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useHistoriaAdmin, useIdProyectoPro, useIdResponsableTarea, useIdTareaSelecccionado } from "../../../../../[stores]/homeStore"
import { getDataLista } from "../../../../../../React/Fetch/getDataLista"


const ModalTareas = ({setAbrirModalTareas, acepColaborador, session}) => {
  
  // ESTADOS DESDE ZUSTAND
        const idProyy = useIdProyectoPro((state) => state.idProyecto)
        const idTareaSeleccioando = useIdTareaSelecccionado((state) => state.tareaSeleccionadoId)
        const tareaSeleccionadaId = idTareaSeleccioando
        const idResponsableTarea = useIdResponsableTarea((state) => state.updateIdResponsableTarea)

        // TRAER LAS TAREAS DESDE ZUSTAND
        const {tareas, getTareas} = useHistoriaAdmin() 
        
         useEffect(()=>{
          getTareas(tareaSeleccionadaId)
        }, [idTareaSeleccioando])
  
        console.log('tareas desde zusss:', tareas);
        
    
      // VALOR DEL CHECKBOX
      const [activarCheck, setActivarCheck] = useState(false)

      const [tareaSelecc, setTareaSelecc] = useState([])
      const [userId, setUserId] = useState([])

      const [abrirModalTareaState, setAbrirModalTareaState] = useState(false)
      const [aceptarColaborador, setAceptarColaborador] = useState(false)

      const [reponId, setReponId] = useState('')

      //const [mostrarEnviar, setMostrarEnviar] = useState(false)
    
  
        
      const handleClickVolverCrearEquipo=(e)=>{
          e.preventDefault()
          setAbrirModalTareas(false)
          //router.push('/dashboard/home/misProyectos/verProyecto')
          //setMostrarEnviar(!mostrarEnviar)
      }
  

      const handleChangeCheckBox =(e)=>{
        //console.log(e.target.value);
        //setActivarCheck(e.target.value)
        
      }

      const handleClickCheckBox =()=>{
        setActivarCheck(!activarCheck)

      }
              // TRAER AL RESPONSABLE DE LA TAREA POR SU ID
              const getUserId = async()=>{
                const ruta = 'user'
                const url = session?.user?.id
                const res = await getDataLista({ruta, url})
                setUserId(res)
              }
      
              const isd = useHistoriaAdmin((state)=>state.tareas)


              useEffect(()=>{
                      //getTareaSeleccionado()
                      getUserId()
                  }, [idProyy])

                  
                  
            // boton para abrir aceptar cambios
  const handleClickEnviarPeticion =(e, nombreResponsable, id)=>{
    e.preventDefault()
    acepColaborador(true)
    idResponsableTarea(nombreResponsable)
    //setReponId(id)
    console.log('idrespo:', userId?.id);
    
    setAbrirModalTareas(false)
  } 

  
  

  


          


      return (
        <div className="z-10">
            <form  className={`${aceptarColaborador ? ('opacity-5'): ('opacity-100')} w-[23%] h-[82%] py-4 px-10  rounded-md mt-28  fixed top-14 ml-[1350px] grid  text-(length:--tamañoLetraChica)`}>
                  <header className='w-full h-[10%] capitalize grid place-content-center  text-blue-600 font-semibold text-(length:--tamañoLetraChica) '>
                    {tareas[0]?.nombreTarea}
                  </header>
                  <main className='h-[50%]  -mt-8 '>
                    <Link href={'/dashboard/perfil/perfilLaboral'} className='grid'>
                      <label className='h-1 text-gray-600 pb-5' htmlFor="">Creador de la Tarea</label>
                      <span className="capitalize h-12 flex items-center pl-1 text-gray-700 hover:text-blue-500 hover:bg-gray-50">{tareas[0]?.user?.primerNombre} {tareas[0]?.user?.apellidoPaterno}</span>
                    </Link>
                    <Link href={'/dashboard/perfil/perfilLaboral'} className='grid'>
                      <label className='h-1 text-gray-600 pb-5' htmlFor="">Responsable de la Tarea</label>
                      <span className="capitalize h-12 flex items-center pl-1 text-gray-700 hover:text-blue-500 hover:bg-gray-50">{userId?.primerNombre} {userId?.apellidoPaterno}</span>
                    </Link>
                    <div className='grid '>
                      <label className='h-1 text-gray-600 pb-5' htmlFor="">Equipo del Responsable</label>
                      <div className="capitalize h-12 flex items-center pl-1">{tareas[0]?.equipo?.nombreEquipo}</div>
                    </div>
                    <div className='grid '>
                      <label className='h-1 text-gray-600 pb-5' htmlFor="">Urgencia de la Tarea</label>
                      <div className={`${tareas[0]?.urgenciaTarea ==='Alta' ? 'text-red-600' : tareas[0]?.urgenciaTarea ==='Media' ?'text-yellow-500' : tareas[0]?.urgenciaTarea ==='Baja' ?'text-green-400' : ''} h-12 flex items-center pl-1  font-bold`}>{tareas[0]?.urgenciaTarea}</div>
                    </div>
                    <div className='grid '>
                      <label className='h-1 text-gray-600 pb-5' htmlFor="">Fechas requeridas para completar la Tarea</label>
                      <div className="h-12 flex items-center pl-1 font-semibold text-gray-600">{tareas[0]?.fechaInicio} - {tareas[0]?.fechaTermino}</div> 
                    </div>
                    <div className='grid '>
                      <label className='h-1 text-gray-600 pb-5' htmlFor="">Nivel de Avance de la Tarea</label>
                      <div className="h-12 flex items-center pl-1 font-semibold text-blue-500">{tareas[0]?.nivelDeAvance}</div>
                    </div>
                    <div className='grid '>
                      <label className='h-1 text-gray-600 pb-5' htmlFor="">Descripción de la Tarea</label>
                      <div className="capitalize h-12 flex items-center pl-1">{`${tareas[0]?.descripcionDeTarea ? tareas[0]?.descripcionDeTarea: '-'} `}</div>
                    </div>
                    
                    
                    <div className='flex items-center h-12'>
                      {userId?.id === session.user.id ?
                        <>
                          
                        </>:
                        <>
                          <input onClick={handleClickCheckBox} onChange={handleChangeCheckBox} checked={activarCheck}  className="cursor-pointer w-[16px] h-[16px] "  type="checkbox" /><div  onClick={()=>setActivarCheck(!activarCheck)} className={`pl-2 font-semibold text-blue-500 cursor-pointer hover:underline py-3`}>Quiero aportar a la Tarea</div>
                        </>
                      }
                    </div>
                    
                   
                  </main>
                  <div className='h-[40%] w-full flex justify-end items-end gap-x-2'>
                    
                    <button onClick={(e)=>handleClickEnviarPeticion(e, userId?.primerNombre, userId?.id)} disabled={!activarCheck}  className={`h-[100%] w-[35%]  rounded  ${activarCheck ? ('opacity-100 cursor-pointer'): ('opacity-0')} bg-blue-500 hover:bg-blue-600  hover:duration-300  text-white font-bold text-(length:--tamañoLetraChica)`}>
                      Enviar Petición
                    </button>
                    <button onClick={handleClickVolverCrearEquipo}  className='h-[100%] w-[20%]  rounded cursor-pointer bg-black hover:bg-hoverColorBotonCerrar  hover:duration-300  text-white font-bold text-(length:--tamañoLetraChica)'>
                      Cerrar
                    </button>
                  </div>
              </form>
        </div>
      )
}

export default ModalTareas