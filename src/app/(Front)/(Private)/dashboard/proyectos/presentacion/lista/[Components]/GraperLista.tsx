'use client'

import {useState, useEffect} from 'react'
import TablaLista from './TablaLista'
import ModalTareaLista from './ModalTareaLista'
import { useIdProyectoPro, useIdTareaSelecccionado, useTareaStatus } from '../../../../../[stores]/homeStore'


const GraperLista = ({session}) => {

    const [abrirModalTareaLista, setAbrirModalTareaLista] = useState(false)

    const idTareaSeleccioando = useIdTareaSelecccionado((state) => state.updateTareaSeleccionadoId)
        
      // ESTADOS DESDE ZUSTAND
            const idProyy = useIdProyectoPro((state) => state.idProyecto)
            const proyectoId = idProyy
      
        const abrirModalTareaListaFUn =(id)=>{
            idTareaSeleccioando(id)
          setAbrirModalTareaLista(true)
        }
    
        // TRAER LAS TAREAS DESDE ZUSTAND
        const {tareasStatus, getTareasStatus} = useTareaStatus() 

         useEffect(()=>{
          getTareasStatus(proyectoId, session?.user?.id, 'Activa')
        }, [])
    
        console.log('TAREAS PINTAR EN LISTA LINDA DESDE ZUSTAND:', tareasStatus);
        
        

        const ress = false

  return (
    <>
    
      <TablaLista
          abrirModalTareaLista={abrirModalTareaListaFUn}
          tareasActivas={tareasStatus}
          //idTareaSeleccioandoPintar={idTareaSeleccioandoPintar}
          //setAbrirModalTareaLista={setAbrirModalTareaLista}
        />
      {abrirModalTareaLista && 
        <ModalTareaLista
          setAbrirModalTareaState={setAbrirModalTareaLista}        
        />
      }
    </>
  )
}

export default GraperLista