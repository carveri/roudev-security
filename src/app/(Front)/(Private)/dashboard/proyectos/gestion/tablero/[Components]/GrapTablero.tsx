'use client'

import {useEffect, useState} from 'react'
import ComTablero from './ComTablero'
import ModalTareas from './ModalTareas'
import ModalAceptarColaborador from './ModalAceptarColaborador'
import { getDataLista } from '../../../../../../React/Fetch/getDataLista'
import { useHistoriaAdmin, useIdProyectoPro, useIdResponsableTarea, useIdTareaSelecccionado } from '../../../../../[stores]/homeStore'

const GrapTablero = ({session}) => {

    const [abrirModalTareas, setAbrirModalTareas] = useState(false)
    const [abrirModalAceptar, setabrirModalAceptar] = useState(false)


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
  
        //console.log('tareas desde zusss:', tareas);
        
    
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


    


  //console.log(session);

  const traerBooleano = (param)=>{
    setAbrirModalTareas(param)
  }

  const acepColaborador =(param)=>{
    setabrirModalAceptar(param)
  }
  
  //console.log('res que quiero:', abrirModalTareas);

  const com = false
  

  return (
    <>
    
      <div className='w-[75%] h-full text-tamañoLetraChica'>
        <ComTablero
        session={session}
        setAbrirModalTareas={setAbrirModalTareas}
        abrirModalTareas={abrirModalTareas}
        traerBooleano={traerBooleano}
        acepColaborador={acepColaborador}
        setabrirModalAceptar={setabrirModalAceptar}
      />
    </div>
    
    <div>
        {abrirModalTareas && 
        <ModalTareas
            setAbrirModalTareas={setAbrirModalTareas}
            // handleClickEnviarPeticion={handleClickEnviarPeticion}
            acepColaborador={acepColaborador}
            session={session}
            
            
        />
      }
      </div>
      <div>

      
        {abrirModalAceptar && 
        <ModalAceptarColaborador
          acepColaborador={acepColaborador}
          setabrirModalAceptar={setabrirModalAceptar}
          // nombreResponsableTarea={nombreResponsableTarea}
        />
      }
      </div>
    </>
  )
}

export default GrapTablero