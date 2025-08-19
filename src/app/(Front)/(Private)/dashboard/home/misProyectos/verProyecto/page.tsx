'use client'

import { useRouter } from "next/navigation"
import { useState, useEffect  } from "react";
import ModalCrearEquipo from "../../../[Components]/ModalCrearEquipo";
import { useFinalidadProyectos, useIdProyectoProUpdated, useProyectoUpdate, useTipoProyectos } from "../../../../[stores]/homeStore";
import { getDataLista } from "../../../../../React/Fetch/getDataLista";
import BadgeAbrirLista from "./Componentes/BadgeAbrirLista";
import { dataStatus } from "../utils/dataStatus";
import { updateData } from "../../../../../React/Fetch/updateData";

const page = () => {

 const router = useRouter()
 const idProyectoUpdated = useIdProyectoProUpdated((state) => state.idProyectoUpdated)
 const {proyecto, getProyecto} = useProyectoUpdate()
 const {finalidadProyecto, getFinalidadesDeProyectos} = useFinalidadProyectos()
 const {tipoProyecto, getTiposDeProyectos} = useTipoProyectos()

const [valorAPintar, setvalorAPintar] = useState('')


const [valorInicial1, setValorInicial1] = useState(proyecto[0]?.statusProyecto)
const [valorInicial2, setValorInicial2] = useState(proyecto[0]?.finalidadProyecto?.nombreFinalidadProyecto)
const [valorInicial3, setValorInicial3] = useState(proyecto[0]?.tipoProyecto?.nombreTipoProyecto)
const [valorInicial4, setValorInicial4] = useState(proyecto[0]?.statusProyecto)
const [valorInicial5, setValorInicial5] = useState(proyecto[0]?.presupuestoProyecto ?? 0)

 useEffect(()=>{
      getProyecto(idProyectoUpdated)
      getFinalidadesDeProyectos()
      getTiposDeProyectos()
    }, [])

 const [proyectoUpdate, setProyectoUpdate] = useState([])

    useEffect(()=>{
      const getProyectoUpdated = async()=>{
        const ruta = 'proyecto2'
        const url = idProyectoUpdated
        const result = await getDataLista({ruta, url})
        setProyectoUpdate(result)
      }
      getProyectoUpdated()
    }, [])
 
 
   //const [nombreProyecto, setNombreProyecto] = useState('-')
 
   // ESTADOS PARA ABRIR Y CERRAR LA LISTA DE TIPOS Y SUBTIPOS
   const [abrirTipos, setAbrirTipos] = useState(false)
   const [abrirSubTipos, setAbrirSubTipos] = useState(false)
   const [abrirEquipos, setAbrirEquipos] = useState(false)
 

  const [abrirLapiz, setabrirLapiz] = useState(false)

  const [statusProyectoId, setStatusProyectoId] = useState('')
    const [finalidadProyectoId, setFinalidadProyectoId] = useState('')
    const [tipoProyectoId, setTipoProyectoId] = useState('')

    const [abrirLista, setAbrirLista] = useState(false)
    const [abrirLista2, setAbrirLista2] = useState(false)
    const [abrirLista3, setAbrirLista3] = useState(false)
    const [abrirLista4, setAbrirLista4] = useState(false)
    const [abrirLista5, setAbrirLista5] = useState(false)

 
 

  //  // CAPTURO EL ESTADO DEL FORMULARIO
   const handleClickModalCrearProyecto =(e)=>{
     e.preventDefault()
     if(e.target.name === 'tipoDelProyecto'){
       setAbrirTipos(!abrirTipos)
     }
     else if(e.target.name === 'subTipoDelProyecto'){
       setAbrirSubTipos(!abrirSubTipos)
     }
     else if(e.target.name === 'equipos'){
      setAbrirEquipos(!abrirEquipos)
    }

     else {
       console.log('sd');
     }
   }
  
   const [activoEquipo, setActivoEquipo] = useState(false)


// EQUIPOS SELECCIONADOS 
const clonEquiposSeleccionados = []

//const {nombreProyecto} = proyecto[0]

const [abrirNombre, setAbrirNombre] = useState(false)
const [nombrePro, setNombrePro] = useState('')

const handleChangeNombreProyecto =(e)=>{
  setNombrePro(e.target.value)
}
//console.log('proyye:', proyecto);

const handleClickUpdatedNombreProyecto =()=>{
  setAbrirNombre(!abrirNombre)
}

// VOLVER
const handleVolverCrearProyecto =(e)=>{
      e.preventDefault()
      router.push('/dashboard/home/misProyectos')
   }

   const status = dataStatus


   // PROYECTO SELECCIONADO
    const handleClickSelectProyecto =(e, id, nombre )=>{
        e.preventDefault()
        console.log(id, nombre);
        

        if(e.target.name === 'selectEstadoDelProyecto'){
          setValorInicial1(nombre)
          setAbrirLista(false)
          setStatusProyectoId(id)
        }
        else if(e.target.name === 'selectFinalidadDelProyecto'){
          setFinalidadProyectoId(id)
          setValorInicial2(nombre)
          setAbrirLista(false)
        }
        else if(e.target.name === 'selectTipoDelProyecto'){
          setTipoProyectoId(id)
          setValorInicial3(nombre)
          setAbrirLista(false)
        }
        else if(e.target.name === 'selectMiCargoDelProyecto'){
          setTipoProyectoId(id)
          setValorInicial4(nombre)
          setAbrirLista(false)
        }
        else if(e.target.name === 'selectPresupuestoDelProyecto'){
          setTipoProyectoId(id)
          setValorInicial5(nombre)
          setAbrirLista(false)
        }
        else {
          console.log('sd');
          
        }
    }


  //  ACTUALIZAR EL PROYECTO
const handleClickCrearProyecto=(e)=>{
      e.preventDefault()
      const nombreProyecto = nombrePro
      //const statusProyecto = status
      //const finalidadProyectoId = fina
      const presupuestoProyecto = valorInicial5
      const data = {nombreProyecto, presupuestoProyecto}
      console.log({data});
      const ruta= 'proyecto'
      const id = idProyectoUpdated
      updateData({ruta, id, data})

      alert('Se modfico el proyecto correctamente')

      
   }


   


  return (
    <div className={`  w-[75%] h-full  gap-x-5`}> 
        <main className="w-full h-full">
            <form  className={` ${activoEquipo ? 'opacity-10': ''}  w-full h-[95%] pl-2  rounded-md    grid justify-self-center text-(length:--tamañoLetraChica)`}>
              {/* TITULO  */}
              <header className='w-full h-[40px] mb-3 flex gap-x-2   text-gray-600 font-semibold text-(length:--tamañoLetra)'>
               <div>
                  <img  src={`${!proyecto[0]?.iconoProyecto ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png': proyecto[0]?.iconoProyecto}`} width={18} height={18} alt="logoProyecto" />
               </div>
               <div className="capitalize">
                {proyecto[0]?.nombreProyecto}
               </div>
              </header>







              {/* NOMBRE DEL PROYECTO */}
              <main className='h-[85%] grid grid-rows-7 -mt-16  '>
                <div className='grid mt-1'>
                  <label className='h-1 text-gray-600 pb-5' htmlFor="">Nombre del Proyecto</label>
                  <div className="flex">
                    <input  onChange={handleChangeNombreProyecto} readOnly={!abrirNombre} placeholder={proyecto[0]?.nombreProyecto} onClick={handleClickModalCrearProyecto}  className={`${!abrirNombre ? 'bg-gray-100 opacity-80 cursor-default ': 'cursor-pointer '} w-[90%] focus:outline-none rounded h-9   border border-gray-200 flex  items-center justify-between px-4`}/>
                    <img onClick={handleClickUpdatedNombreProyecto} className={`${abrirNombre ? 'border-b border-blue-500' : ''} hover:bg-gray-100 w-10 h-9 py-3 px-3 cursor-pointer`}    src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/lapiz.png' width={15} height={15} alt="as" />           
                  </div>
                </div>

                <BadgeAbrirLista
                  nombre= 'Estado del Proyecto'
                  abrirLapiz = {abrirLapiz}
                  nameLapiz = 'estadoProyecto'
                  nameAbrirCaja = 'cajaEstadoProyecto'
                  setAbrirLapiz = {setabrirLapiz}
                  data = {status}
                  condicion = 'status'
                  valorInicial = {valorInicial1}
                  nombreSelect = 'selectEstadoDelProyecto'
                  //handleClickModalCrearProyecto={handleClickModalCrearProyecto}
                  setAbrirLista={setAbrirLista}
                  abrirLista = {abrirLista}
                  handleClickSelectProyecto={handleClickSelectProyecto}
                  valorAPintar={valorAPintar}
                />

                <BadgeAbrirLista
                  nombre= 'Finalidad del Proyectos'
                  abrirLapiz = {abrirLapiz}
                  nameLapiz = 'finalidadProyecto'
                  nameAbrirCaja = 'cajaFinalidadProyecto'
                  setAbrirLapiz = {setabrirLapiz}
                  data = {finalidadProyecto}
                  condicion = 'nombreFinalidadProyecto'
                  valorInicial = {valorInicial2}
                  nombreSelect = 'selectFinalidadDelProyecto'
                  //handleClickModalCrearProyecto={handleClickModalCrearProyecto}
                  setAbrirLista={setAbrirLista2}
                  abrirLista = {abrirLista2}
                  handleClickSelectProyecto={handleClickSelectProyecto}
                  valorAPintar={valorAPintar}
                />

                <BadgeAbrirLista
                  nombre= 'Tipo del Proyectos'
                  abrirLapiz = {abrirLapiz}
                  nameLapiz = 'tipoProyecto'
                  nameAbrirCaja = 'cajaTipoProyecto'
                  setAbrirLapiz = {setabrirLapiz}
                  data = {tipoProyecto}
                  condicion = 'nombreTipoProyecto'
                  valorInicial = {valorInicial3}
                  nombreSelect = 'selectTipoDelProyecto'
                  //handleClickModalCrearProyecto={handleClickModalCrearProyecto}
                  setAbrirLista={setAbrirLista3}
                  abrirLista = {abrirLista3}
                  handleClickSelectProyecto={handleClickSelectProyecto}
                  valorAPintar={valorAPintar}
                />


                <BadgeAbrirLista
                  nombre= 'Mi Cargo en el Proyecto'
                  abrirLapiz = {abrirLapiz}
                  nameLapiz = 'miCargoProyecto'
                  nameAbrirCaja = 'cajaMiCargoProyecto'
                  setAbrirLapiz = {setabrirLapiz}
                  data = {status}
                  condicion = 'status'
                  valorInicial = {valorInicial4}
                  nombreSelect = 'selectMiCargoDelProyecto'
                  //handleClickModalCrearProyecto={handleClickModalCrearProyecto}
                  setAbrirLista={setAbrirLista4}
                  abrirLista = {abrirLista4}
                  handleClickSelectProyecto={handleClickSelectProyecto}
                  valorAPintar={valorAPintar}

                />


                  <BadgeAbrirLista
                  nombre= 'Presupuesto (USD)'
                  abrirLapiz = {abrirLapiz}
                  nameLapiz = 'presupuestoProyecto'
                  nameAbrirCaja = 'cajaPresupuestoProyecto'
                  setAbrirLapiz = {setabrirLapiz}
                  data = {status}
                  condicion = 'status'
                  valorInicial = {valorInicial5}
                  nombreSelect = 'selectPresupuestoDelProyecto'
                  //handleClickModalCrearProyecto={handleClickModalCrearProyecto}
                  setAbrirLista={setAbrirLista5}
                  abrirLista = {abrirLista5}
                  handleClickSelectProyecto={handleClickSelectProyecto}
                  valorAPintar={valorAPintar}

                />              
              </main>
              {clonEquiposSeleccionados.length >0 &&
                <div className="ml-[750px] w-64 h-[50%] mt-[370px] border border-gray-100 z-50  absolute max-h-[110px] overflow-auto">
                    
                    {clonEquiposSeleccionados.map((el)=>{
                      
                      return <div  key={el.id} className="flex  h-9 items-center px-1 border border-gray-100">
                          <img className="mr-2" src={el.icono} width={15} height={15} alt="iconoSubTipo"/>
                          <div className="w-[80%]">
                            {el.nombre}
                          </div>
                          <img className="cursor-pointer"  src={el.iconoEliminar} width={13} height={13} alt="iconoSubTipo"/>
                      </div>
                    })}
                  
                </div>
              
              }
              <div className='h-[55%] w-full grid justify-items-end items-end'>
               
                
                  <div className="flex w-full h-full justify-end gap-x-2 text-[11px]">
                    <button  onClick={handleVolverCrearProyecto}  className={` h-[90%] w-[7%] rounded cursor-pointer bg-violet-600 hover:bg-hoverColorBotonVolver  hover:duration-300  text-white font-bold `}>
                      Volver
                    </button>
                    <button   onClick={handleClickCrearProyecto}  className={`${nombrePro === proyecto[0]?.statusProyecto && 'opacity-10 cursor-text'} h-[90%] w-[12%]  rounded cursor-pointer bg-blue-500 hover:bg-blue-600  hover:duration-300  text-white font-bold `}>
                      Guardar Cambios
                    </button>
                  </div>
              </div>
          </form>
          {activoEquipo &&
            <div className="grid justify-items-center">
              <ModalCrearEquipo
                setActivoEquipo={setActivoEquipo}
                session=''
              />
            </div> 
          }
        </main>
     <section> 
     </section>
     {/* <div className="flex justify-center">
          <ModalGuardarCambios />
     </div> */}
    </div>
  )
}

export default page