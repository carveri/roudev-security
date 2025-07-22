'use client'

import { format } from "date-fns"
import { es } from "date-fns/locale";
import { postData } from "../../../../../../React/Fetch/postData"
import ModalCrearEquipo from "../../../../[Components]/ModalCrearEquipo"
import ModalCrearProyecto from "../../../../[Components]/ModalCrearProyecto"
import { dataUrgenciasProyecto } from "../../../utils/dataUrgenciasProyecto"
import { useEffect, useState } from "react"
import { getDataCompleja3 } from "../../../../../../React/Fetch/getDataCompleja3"
import { getDataCompleja2 } from "../../../../../../React/Fetch/getDataCompleja2"
import { getDataLista } from "../../../../../../React/Fetch/getDataLista"
import { useIdProyectoPro, useNombreProyectoPro } from "../../../../../[stores]/homeStore"
import ModalCalendario from "../../../../[Components]/ModalCalendario"


const GraperTarea = ({session}) => {
  // id del proyecto en que estoy ahora
  const idProyy = useIdProyectoPro((state) => state.idProyecto)
  const proyectoId = idProyy

  console.log('sesssion:', session);

  const [fechaInicio, setFechaIncio] = useState<Date>(new Date())
  const [fechaTermino, setFechaTermino] = useState<Date>(new Date())
  

  // nombre del proyecto en el que estoy 
  const nombreProyy = useNombreProyectoPro((state) => state.nombreProyecto)

  // traer los proyectos del usuario
  const [proyectos, setProyectos] = useState([])
  const [equipo2, setEquipo2] = useState([])
  const [usarioPorProyecto, setUsarioPorProyecto] = useState([])

  const newFechaInicio = format(fechaInicio, 'dd/MM/yyyy', {locale:es})
  const newFechaTermino = format(fechaTermino, 'dd/MM/yyyy', {locale:es})

  //const userIdZustand = 'c814075d-b44c-4474-970c-3b62c087d3f3'


              const getProyectos = async()=>{
              const ruta = 'proyectoUser'
              const url = session?.user?.id
              const res = await getDataLista({ruta, url})
              setProyectos(res)
              }

  // FUNCION PARA TRAER LOS EQUIPOS POR PROYECTO
              const getEquipos = async(bandera=true)=>{
                const ruta = 'equipo'
                const elem1 = 'nombreProyecto'
                const param1 = nombreProyy
                const elem2 = 'bandera'
                const param2 = bandera
                const res = await getDataCompleja2({ruta, elem1, param1, elem2, param2})
                setEquipo2(res)
              }

              // traer todos los usuarios por proyecto
              const getUsuarioPorProyecto = async()=>{
                const ruta = 'userOnProyecto'
                const elem1 = 'proyectoId'
                const param1 = proyectoId
                const res = await getDataCompleja3({ruta, elem1, param1})
                setUsarioPorProyecto(res)
              }

              useEffect(()=>{
                getEquipos()
                getUsuarioPorProyecto()
                getProyectos()
              }, [])
          

  const [activarBoton, setActivarBoton] = useState(false)

  const [proyecto2, setProyecto2] = useState('-')
  const [urgencia, setUrgencia] = useState('-')
  const [equipo, setEquipo] = useState('-')
  const [responsable, setResponsable] = useState('-')

  const [nombreTarea, setNombreTarea] = useState('')
  const [descripcionDeTarea, setDescripcionDeTarea] = useState('')

  //ids
  const [idProyectoSeleccionado, setidProyectoSeleccionado] = useState('')
  const [idEquipoResponsable, setIdEquipoResponsable] = useState('')
  const [idUsuarioResponsable, setIdUsuarioResponsable] = useState('')




  const [abrirTipos, setAbrirTipos] = useState(false)
  const [abrirUrgencia, setAbrirUrgencia] = useState(false)
  const [abrirEquipo, setAbrirEquipo] = useState(false)
  const [abrirResponsable, setAbrirResponsable] = useState(false)
  // ACTIVAR MODALES 
  const [activarModalPro, setActivarModalPro] = useState(false)
  const [activarModalEqui, setActivarModalEqui] = useState(false)


  // HANDLECHANGE DEL NOMBRE DEL RESPONSABLE Y LA DESCRIPCION DE LA TAREA
  const handleChangeTarea =(e)=>{
    if(e.target.name === 'nombreTarea'){
      setNombreTarea(e.target.value)
    }
    else if(e.target.name === 'descripcionTarea'){
      setDescripcionDeTarea(e.target.value)
    }
    else {
      console.log('s');
      
    }
  }

  // PARA ABRIR LA CAJA DE LOS FILTROS 
  const handleClickModalCrearProyecto=(e)=>{
    e.preventDefault()
    if(e.target.name === 'tipoDelProyecto'){
      setAbrirTipos(!abrirTipos)
    }
    else if(e.target.name ==='urgenciaDeLaTarea'){
      setAbrirUrgencia(!abrirUrgencia)
    }
    else if(e.target.name ==="equipoDeLaTarea"){
      setAbrirEquipo(!abrirEquipo)
    }
    else if(e.target.name ==="responsableDeLaTarea"){
      setAbrirResponsable(!abrirResponsable)
    }
    else {
      console.log('dad');
      
    }
  }

  
  // CLICK PARA SELECCIONAR LOS PROYECTOS 
  const handleClickSelectProyecto =(e, id, nombre)=>{
    e.preventDefault()
    if(e.target.name === 'selectTipoProyecto'){
      setProyecto2(nombre)
      setidProyectoSeleccionado(id)
      setAbrirTipos(!abrirTipos)

    }
    else if(e.target.name === 'selectTipoUrgencia'){
      setUrgencia(nombre)
      setAbrirUrgencia(!abrirUrgencia)
    }
    else if(e.target.name === 'selectEquipoResponsable'){
      setEquipo(nombre)
      setIdEquipoResponsable(id)
      setAbrirEquipo(!abrirEquipo)
    }
    else if(e.target.name === 'selectUsuariosProyecto'){
      setResponsable(nombre)
      setIdUsuarioResponsable(id)
      setAbrirResponsable(!abrirResponsable)
      
    }
    else {
      console.log('sd');
      
    }
    
  }


  // ABRIR MODAL PROYECTOS
  const handleClickCrearPro =(e)=>{
    e.preventDefault()
    setActivarModalPro(!activarModalPro)
    //setActivarBoton(!activarBoton)

  }

  const handleClickAbrirModalEqui =(e)=>{
    e.preventDefault()
    setActivarModalEqui(!activarModalEqui)
  }
  
  console.log('idproyectoSELECCIONDO:', idProyectoSeleccionado);
  console.log('idEquipoResponsable:', idEquipoResponsable);
  console.log('usuario responsable de la wea;', idUsuarioResponsable);
  
  // funcion para obtener booleano
  const disable = ()=>{
    if(proyecto2 === '-' || nombreTarea === '-' || urgencia === '-' || responsable === '-' || equipo === '-') {
      return true
    }
    else{
      return false
    }
  }


  const handleSubmitCrearTarea =(e)=>{

    
    const tipoTarea = 'Historia'
    
    // proyectoId a que pertenece
    const proyectoId = idProyectoSeleccionado
    const urgenciaTarea = urgencia
    const fechaInicio= newFechaInicio
    const fechaTermino = newFechaTermino
    // userId mio
    const creadorTarea = session?.user?.id
    // equipoId del responsable
    const equipoResponsableTarea = idEquipoResponsable
    // userId responsable
    const responsableTarea = idUsuarioResponsable
    // equipoId del responsable
    const equipoId = idEquipoResponsable
    // usuario que lo crea
    const userId = session?.user?.id
    const etapaTarea = 'Product Backlog'
    const aportantes = ['cf97d764-3131-4e6f-8cb7-03178d341641', 'a140c95f-acb0-4129-8901-e047f2535e93']

    e.preventDefault()
    const data = {aportantes,  nombreTarea, tipoTarea, fechaInicio, fechaTermino, creadorTarea, responsableTarea, equipoResponsableTarea, urgenciaTarea, descripcionDeTarea, etapaTarea,  equipoId, proyectoId, userId }
    console.log({data});
    const ruta = 'tarea'
    postData({ruta, data})
    alert('se creo la tarea!!')
  }


  return (
    < >
    <form onSubmit={handleSubmitCrearTarea} className={`${activarModalPro && 'opacity-10'} ${activarModalEqui && 'opacity-10'} w-[75%] h-[95%] text-(length:--tamañoLetraChica)  px-16`} action="">
      <header className='w-full h-[4%]  flex items-center justify-center'>
        
      </header>
      <section className='w-full h-[90%] grid grid-cols-2 gap-x-32'>
        <div className=' h-full w-full  px-10 '>
          <header className='w-full h-[14%] flex items-center justify-center font-semibold text-gray-500'>
            Detalles de la Tarea
          </header>
          <main className='w-full h-[80%] '>
            <div className='w-full h-[20%] '>
              <label htmlFor="nombreTarea" className='w-full h-[40%] flex items-center justify-start'>
                Nombre de la Tarea
              </label>
              <input name='nombreTarea' onChange={handleChangeTarea} type="text" id='nombreTarea' className=' pl-3 w-full h-[35px] border-2 border-gray-100 rounded' placeholder='Crear un calendario...' />
            </div>
            
            <div className='w-full h-[20%] '>
              <label htmlFor="nombreTarea" className='w-full h-[40%]  flex items-center justify-between '>
                <div>
                  Proyecto al que va a pertenecer la tarea
                </div>
                <button onClick={handleClickCrearPro} className='cursor-pointer font-semibold text-gray-500 py-[2px] px-2 text-[12px] hover:border-b hover:text-blue-600 hover:border-blue-800'>
                  + Crear Proyecto
                </button>
              </label>     
              <div className='grid'> 
                  <button onClick={handleClickModalCrearProyecto} name='tipoDelProyecto' className=' cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4'>
                      <div>
                          {proyecto2}      
                      </div>
                      <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>                    
                  </button>
                     {abrirTipos &&
                        <ul className="mt-[40px] w-[23%] z-50 bg-white -ml-[940px]   absolute  left-3/5 max-h-[72px] overflow-auto  ">
                          {proyectos[0]?.proyectos.map((el)=>{
                            return <button name="selectTipoProyecto" onClick={(e)=>handleClickSelectProyecto(e, el.id, el.nombreProyecto)} key={el.id} className="pl-4 w-full flex justify-start items-center h-9  border border-gray-100  cursor-pointer hover:bg-gray-100 ">
                                <div className="mr-2">
                                  <img src={`${!el.iconoProyecto ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/resumen5.png' : el.iconoProyecto}`} width={15} height={15} alt="sd"/>
                                </div>
                                <div>
                                  {el.nombreProyecto}
                                </div>
                                </button>
                                })}
                          </ul>  
                      }
              </div>
            </div>
            <div className='w-full h-[20%] '>
              <label htmlFor="nombreTarea" className='w-full h-[40%]  flex items-center justify-start'>
                Urgencia de la Tarea
              </label>
              <div className='grid'> 
                  <button onClick={handleClickModalCrearProyecto} name='urgenciaDeLaTarea' className=' cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4'>
                      <div className="flex ">
                          {urgencia}   
                      </div>
                    <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>                    
                  </button>
                  {abrirUrgencia &&
                    <ul className="mt-[40px] w-[23%] z-50 -ml-[940px] absolute  left-3/5 max-h-[72px] overflow-auto  bg-white">
                      {dataUrgenciasProyecto.map((el)=>{
                        return <button name="selectTipoUrgencia" onClick={(e)=>handleClickSelectProyecto(e, el.id, el.nombre)} key={el.id} className="pl-4 w-full justify-start h-9  border border-gray-100 flex items-center cursor-pointer hover:bg-gray-100 ">
                            <div className="mr-2">
                              <img src={el.icono} width={15} height={15} alt="sd"/>
                            </div>
                            <div>
                              {el.nombre}
                            </div>
                            </button>
                            })}
                    </ul>
                    }
              </div>
            </div>





            <ModalCalendario
              nombre='Fecha de Inicio de Tarea'
              fecha={newFechaInicio}
              setFecha={setFechaIncio}
              ml='ml-[460px]'
              mt='-mt-32'

            
            
            />
            <ModalCalendario
              nombre='Fecha que deberia Terminar la Tarea'
              fecha={newFechaTermino}
              setFecha={setFechaTermino}
              ml='ml-[460px]'
              mt='-mt-32'

            
            
            />
            
          </main>
        </div>






        <div className='h-full px-10'>
          <header className='w-full h-[14%] flex items-center justify-center font-semibold text-gray-500'>
            Responsables de la Tarea
          </header>
          <main className='w-full h-[80%] '>
            <div className='w-full h-[20%] '>
              <label htmlFor="nombreTarea" className='w-full h-[40%] mt- flex items-center justify-start'>
                Creador de la Tarea
              </label>
             <div className='pl-3 w-full h-[35px] font-semibold text-blue-500 capitalize'>{session?.user?.name} {session?.user?.apellidoPaterno}</div>
            </div>
            <div className='w-full h-[20%] '>
              <label htmlFor="nombreTarea" className='w-full h-[40%]  flex items-center justify-between '>
                <div>
                  Equipo Responsable
                </div>
                <button onClick={handleClickAbrirModalEqui} className='cursor-pointer font-semibold text-gray-500 py-[2px] px-2 text-[12px] hover:border-b hover:text-blue-600 hover:border-blue-800'>
                  + Crear Equipo
                </button>
              </label>



              <div className='grid'> 
                  <button onClick={handleClickModalCrearProyecto} name='equipoDeLaTarea' className=' cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4'>
                      <div>
                          {equipo}      
                      </div>
                    <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>                    
                  </button>
                  {abrirEquipo &&
                    <ul className="mt-[40px] w-[23%] z-50 -ml-[280px]  absolute  left-3/5 max-h-[72px] overflow-auto  bg-white">
                      {equipo2.map((el)=>{
                        return <button name="selectEquipoResponsable" onClick={(e)=>handleClickSelectProyecto(e, el.id, el.nombreEquipo)} key={el.id} className="pl-4 w-full justify-start h-9  border border-gray-100 flex items-center cursor-pointer hover:bg-gray-100 ">
                            <div className="mr-2">
                              <img src={`${!el?.iconoEquipo ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/comida.png': el?.iconoEquipo}`} width={15} height={15} alt="sd"/>
                            </div>
                            <div>
                              {el?.nombreEquipo}
                            </div>
                            </button>
                            })}
                    </ul>
                    }
              </div>





            </div>
            
            
            
            
            <div className='w-full h-[20%] '>
              <label htmlFor="nombreTarea" className='w-full h-[40%]  flex items-center justify-start'>
                Persona Responsable
              </label>
              <div className='grid'> 
                  <button onClick={handleClickModalCrearProyecto} name='responsableDeLaTarea' className=' cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4'>
                      <div>
                          {responsable}      
                      </div>
                    <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>                    
                  </button>
                  {abrirResponsable &&
                    <ul className="mt-[40px] w-[23%] z-50 -ml-[280px]  absolute  left-3/5 max-h-[72px] overflow-auto  bg-white">
                      {usarioPorProyecto[0]?.users.map((el)=>{
                        return <button name="selectUsuariosProyecto" onClick={(e)=>handleClickSelectProyecto(e, el.id, el.primerNombre)} key={el.id} className="pl-4 w-full justify-start h-9  border border-gray-100 flex items-center cursor-pointer hover:bg-gray-100 ">
                            <div className="mr-2">
                              <img src={`${!el?.avatar ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png' : el?.avatar}`} width={15} height={15} alt="sd"/>
                            </div>
                            <div>
                              {el?.primerNombre} {el?.apellidoPaterno}
                            </div>
                            </button>
                            })}
                    </ul>
                    }
              </div>
            </div>




            <div className='w-full h-[40%] '>
              <label htmlFor="nombreTarea" className='w-full flex items-center justify-start mb-2'>
                Descripcion de la Tarea (Opcional)
              </label>
              <input name='descripcionTarea' onChange={handleChangeTarea} type="text" id='nombreTarea' className='pl-3 w-full h-[140px]   rounded border-2 border-gray-100' placeholder='Las caracteristicar principales más importantes son...' />
            </div>
            
            
          </main>
        </div>
      </section>
      <article className='w-full h-[10%]  flex items-center justify-end pr-8'>
        <button  disabled={disable()} className={`${proyecto2 === '-' || urgencia==='-' || equipo === '-' || responsable === '-' || nombreTarea ==='-'  ? 'opacity-15': 'opacity-100'} w-28  h-[55%] bg-blue-500 rounded mr-2 text-white font-semibold hover:bg-blue-600 transition-all duration-300`}> 
          Crear Tarea
        </button>
      </article>
      
    </form>
    {activarModalPro && 
        <div className='flex justify-center'>
          <ModalCrearProyecto 
            abrirModal = {false}
            posicion={3}
            setAbrirModal={setActivarModalPro}
            session={session}
          />
        </div>
      }
      {activarModalEqui && 
        <div className='flex justify-center'>
          <ModalCrearEquipo
            setActivoEquipo={setActivarModalEqui}
            session = {session}
          />
        </div>
      }
    </>
    
  )
}

export default GraperTarea