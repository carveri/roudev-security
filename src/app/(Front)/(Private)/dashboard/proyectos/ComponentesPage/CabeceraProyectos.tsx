'use client'

import {useState, useEffect} from 'react'
import ComHome from '../../finanzas/[Components]/ComHome'
import { useIdProyectoPro, useNombreProyectoPro } from '../../../[stores]/homeStore'
import { getDataCompleja } from '../../../../React/Fetch/getDataCompleja'
import { getDataCompleja2 } from '../../../../React/Fetch/getDataCompleja2'
import { useSession } from 'next-auth/react'

const CabeceraProyectos = ({session}) => {


    //SESSION DEL USUARIO
    
    


    // ESTADOS DESDE ZUSTAND
    const idProyy = useIdProyectoPro((state) => state.idProyecto)
    const proyectoId = idProyy

    const nombreProyy = useNombreProyectoPro((state) => state.nombreProyecto)
    const nombreProyecto = nombreProyy

    // Traer las tareas 

    const [tareasActivas, setTareasActivas] = useState([])
    const [tareasFinalizadas, setTareasFinalizadas] = useState([])


    // traer equipos
    const [equipo, setEquipo] = useState([])

    const userIdZustand = session?.user?.id
    // 
            
    // FUNCION PARA TRAER LAS TAREAS ACTIVAS Y FINALIZADAS
    const getTareas =async(status:string, set)=>{
            const ruta = 'tarea'
            const elem1 = 'proyectoId'
            const param1 = proyectoId
            const elem2 = 'userId'
            const param2 = userIdZustand
            const elem3 = 'status'
            const param3 = status

            const res = await getDataCompleja({ruta, elem1, param1, elem2, param2, elem3, param3})
            set(res)
            }

      // FUNCION PARA TRAER LOS EQUIPOS POR PROYECTO
            const getEquipos = async(bandera)=>{
              const ruta = 'equipo'
              const elem1 = 'nombreProyecto'
              const param1 = nombreProyecto
              const elem2 = 'bandera'
              const param2 = bandera
              const res = await getDataCompleja2({ruta, elem1, param1, elem2, param2})
              setEquipo(res)
            }



    useEffect(()=>{
        getTareas('Activa', setTareasActivas)
        getTareas('Finalizada', setTareasFinalizadas)
        getEquipos(true)
    }, [idProyy])

    console.log('TAREAS Act', tareasActivas);
    console.log('TAREAS Fin', tareasFinalizadas);
    console.log('EQUIPO DE JARITA;', equipo);
    


    // const numeroTareasEnProceso =()=>{
    //     const num = tareas.filter((el)=>{

    //     })
    // }
    


    const dataCuadrosProyectos =[
    {
        id:1,
        nombre: 'N° Equipos en el Proyecto',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/proyecto.png',
        numero: equipo.length,
    },
    {
        id:2,
        nombre: 'Presupuesto Total (USD)',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/comida.png',
        numero: 1028,
    },
    {
        id:3,
        nombre: 'Tareas En Proceso',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/testf.png',
        numero: tareasActivas.length,
    },
    {
        id:4,
        nombre: 'Tareas Finalizadas',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/check.png',
        numero: tareasFinalizadas.length,
    },
    
]

  return (
    <div className='w-full h-[8%] grid grid-cols-4 gap-x-24 text-(length:--tamañoLetraChica)'>
            {dataCuadrosProyectos.map((el)=>{
              return <ComHome
                el={el}  
                key={el.id}
                idProyy={idProyy}
              />
            })}
          </div>
  )
}

export default CabeceraProyectos