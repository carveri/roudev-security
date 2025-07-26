'use client'

import { useRouter } from "next/navigation"
import { useState, useEffect  } from "react";
import { getDataLista } from "../../../React/Fetch/getDataLista";
import { postData } from "../../../React/Fetch/postData";

import { useIdProyectoPro, useProyectoPorUser, useUserOnProyecto } from "../../[stores]/homeStore";


const ModalCrearEquipo = ({setActivoEquipo, session}) => {
    const router = useRouter()

    // id del proyecto en que estoy ahora
      const idProyy = useIdProyectoPro((state) => state.idProyecto)
      const proyectoId = idProyy

      console.log('proye de modalequipo:', proyectoId);
      

    
    //const [nombreProyecto, setNombreProyecto] = useState('')
    const [nombreEquipo, setNombreEquipo] = useState('')
    const [proyecto, setProyecto] = useState('-')
    const [responsable, setResponsable] = useState('-')
    const [integrante, setIntegrante] = useState('-')
  
    // ESTADOS PARA ABRIR Y CERRAR LA LISTA DE TIPOS Y SUBTIPOS
    const [abrirTipos, setAbrirTipos] = useState(false)
    const [abrirResponsable, setAbrirResponsable] = useState(false)
    const [abrirIntegrante, setAbrirIntegrante] = useState(false)
  
    // ESTADO ID DEL SELECT
    const [idTipoProyecto, setIdTipoProyecto] = useState('')
    const [idResponsable, setIdResponsable] = useState('')
    const [idIntegrante, setIdIntegrante] = useState('')


    // PRODUCTOS DESDE EL BACKEND 
    const [proyectos2, setProyectos2] = useState([])
  
    // CAPTURO LOS VALORES DE LOS INPUTS
    const handleChangeCrearProyecto = (e)=>{
      if(e.target.name === 'nombreEquipo'){
        setNombreEquipo(e.target.value)
      }
    }
  
    // CAPTURO EL ESTADO DEL FORMULARIO
    const handleClickModalCrearProyecto =(e)=>{
      e.preventDefault()
      if(e.target.name === 'selectMisProyectos'){
        setAbrirTipos(!abrirTipos)
      }
      else if(e.target.name === 'responsable'){
        setAbrirResponsable(!abrirResponsable)
      }
      else if(e.target.name === 'integrante'){
        setAbrirIntegrante(!abrirIntegrante)
      }
      else {
        console.log('sd');
      }
    }

    
    
  
    // BOTON SELECT TIPO Y SUBTIPO DE PROYECTO
    const handleClickSelectProyecto =(e, id, nombre)=>{
      e.preventDefault()
      if(e.target.name === 'vselectMisProyectos'){
        //setIdTipoProyecto(id)
        //proyectoArray.push(nombre)
        setProyecto(prev => [...prev, nombre]);
        setIdTipoProyecto(prev=>[...prev, {id}])
      }
      else if(e.target.name === 'ResponsableEquipo'){
        //console.log(id);
        setIdResponsable(id)
        setResponsable(nombre)
        setAbrirResponsable(false)
      }
      else if(e.target.name === 'selectIntegrante'){
        //console.log(id);
        // setIdIntegrante(id)
        // setIntegrante(nombre)
        // setAbrirIntegrante(false)
        setIntegrante(prev => [...prev, nombre]);
        setIdIntegrante(prev=>[...prev, {id}])
      }
      else {
        console.log('NO LO PILLA');
        
      }
    }

    
    console.log('proyyeyee:', proyecto);
    console.log('iddelproyecto:', idTipoProyecto);

    // Traer proyectos por usuario desde zustand
    const {proyectosUser, getProyectosUser} = useProyectoPorUser()

    // useEffect(()=>{
    //   getProyectosUser('801cf9c1-d248-40e9-98f6-b598b03af616')
    // }, [])

    // Traer usuarios por proyecto
    const {userOnProyecto, getUserOnProyecto} = useUserOnProyecto()
    
    useEffect(()=>{
      getProyectosUser(session?.user?.id)
      getUserOnProyecto(proyectoId)
    }, [])
    
    console.log('proyectos desde zustand: ', proyectosUser);
    console.log('usuarios de proy2jara:', userOnProyecto );
    
    
    const handleClickVolverCrearEquipo=(e)=>{
        e.preventDefault()
        setActivoEquipo(false)
        //router.push('/dashboard/home/misProyectos/verProyecto')
    }




    useEffect(()=>{
      const getProyectos = async()=>{
        const ruta = 'proyecto'
        const url = session?.user?.id
        const getProy = await getDataLista({ruta, url})
        setProyectos2(getProy)
      }
      getProyectos()
    }, [])

    
    
    //console.log('todosproyectos:', proyectos);
    
    
    const todoProyectos =idTipoProyecto
    const responsableEquipo = idResponsable
    const puntosDelEquipo = 19
    const todoUsuarios = idIntegrante
    //const proyectos = proyecto

    // const handleClickSelectProyecto2 =()=>{
    //     proyectoArray.push('asalto')
    // }
    //const users = 

    const todoTareas= ["20d88257-5361-4757-a1c4-635e2a026d66"]
    // ENVIO DEL FORMULARIO AL BACK
    const handleClickCrearEquipo =(e)=>{
      e.preventDefault()
      //setProyecto([...proyectoArray])
      //handleClickSelectProyecto2()
      const data = {nombreEquipo, responsableEquipo, puntosDelEquipo, todoUsuarios, todoProyectos}
      console.log({data});
      const ruta = 'equipo'
      postData({ruta, data})
      
      setActivoEquipo(false)
      
      router.refresh()
      
    }
    
  
    return (
      <div className="bg-red-400 w-full ">
          <div className="w-[80%] bg-cyan-400">
            <form  className={`bg-white w-[23%] h-[70%] py-4 px-10  rounded-md mt-16  shadow-2xl fixed top-14 grid justify-self-center text-(length:--tamañoLetraChica)`}>
                <header className='w-full h-[10%] py-10 grid place-content-center  text-gray-600 font-semibold text-(length:--tamañoLetra)'>
                  Crear Equipo
                </header>
                <main className='h-[90%] grid grid-rows-4 -mt-14 gap-y-2'>
                  <div className='grid'>
                    <label className='h-1 text-gray-600 pb-5' htmlFor="">Nombre del Equipo</label>
                    <input onChange={handleChangeCrearProyecto}  name='nombreEquipo' className=' rounded h-9 pl-3 bg-white border border-gray-100' type="text" placeholder='Apolo 1'/>
                  </div>
                  <div className='grid '>
                    <label className='h-1 text-gray-600 pb-5' htmlFor="">Icono del Proyecto</label>
                    <input accept=".png" onChange={handleChangeCrearProyecto}  name='iconoEquipo' className='py-1 file:cursor-pointer text-gray-600 file:bg-gray-100 file:text-gray-800  file:hover:text-blue-500 file:hover:bg-gray-300 file:border-none file:py-1 file:px-2 cursor-pointer file:rounded h-9  bg-white border-none' type="file" placeholder='Apolo 1'/>
                  </div>
                  <div className='grid'>
                    <label className='h-1 text-gray-600 pb-5' htmlFor="">Proyectos vinculados al equipo</label>
                    <button onClick={handleClickModalCrearProyecto} name='selectMisProyectos' className=' cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4'>
                        <div>
                          {proyecto}      
                        </div>
                        <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>                    
                    </button>
                    {abrirTipos &&
                      <ul className="mt-[60px] w-[81%] z-50  -ml-[225px] absolute  left-3/5 max-h-[72px] overflow-auto  bg-white">
                        {proyectosUser[0]?.proyectos.map((el)=>{
                          return <button  onClick={(e)=>handleClickSelectProyecto(e, el.id, el.nombreProyecto)} name="vselectMisProyectos" key={el.id} className="pl-4 w-full justify-start h-9  border border-gray-100 flex items-center cursor-pointer hover:bg-gray-100 ">
                            <div className="mr-2">
                                <img src={`${!el.iconoProyecto ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/resumen5.png': el?.iconoProyecto}`} width={15} height={15} alt="sd"/>
                            </div>
                            <div className="">                            
                                  {el.nombreProyecto}
                            </div>
                          </button>
                        })}
                        <button onClick={()=>setAbrirTipos(!abrirTipos)} className=" mt-2 mr-2 bg-blue-500 text-white rounded font-semibold px-3 py-1 flex justify-self-end">Seleccionar</button>
                      </ul>
                    }
                  </div>





                  <div className='grid'>
                    <label className='h-1 text-gray-600 pb-5' htmlFor="">Responsable del Equipo</label>
                    <button onClick={handleClickModalCrearProyecto} name='responsable' className=' cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4'>
                        {responsable}
                        <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>
                      
  
                    </button>
                    {abrirResponsable &&
                      <ul className="mt-[60px] w-[81%] z-50 -ml-[225px]  absolute  left-3/5 max-h-[72px] overflow-auto  bg-white">
                        {userOnProyecto[0]?.users.map((el)=>{
                          return <button onClick={(e)=>handleClickSelectProyecto(e, el.id, el.primerNombre)} name="ResponsableEquipo" key={el.id} className=" pl-4 flex gap-x-2 w-full justify-start h-9  border border-gray-100 items-center cursor-pointer hover:bg-gray-100 ">
                              <div className="">
                                <img src={`${!el.iconoProyecto ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/comida.png': el?.iconoProyecto}`} width={15} height={15} alt="sd"/>
                              </div>
                              <div>
                                {el?.primerNombre} {el?.apellidoPaterno} 
                                </div>                     
                          </button>
                        })}
                      </ul>
                    }
                  </div>




                  <div className='grid'>
                    <label className='h-1 text-gray-600 pb-5' htmlFor="">Integrantes del Equipo</label>
                    <button onClick={handleClickModalCrearProyecto} name='integrante' className=' cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4'>
                        {integrante}
                        <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>
                      
  
                    </button>
                    {abrirIntegrante &&
                      <ul className="mt-[60px] w-[81%] z-50  -ml-[225px] absolute  left-3/5 max-h-[72px] overflow-auto  bg-white">
                        {userOnProyecto[0]?.users.map((el)=>{
                          return <button onClick={(e)=>handleClickSelectProyecto(e, el.id, el.primerNombre)} name="selectIntegrante" key={el.id} className=" pl-4 flex gap-x-2 w-full justify-start h-9  border border-gray-100 items-center cursor-pointer hover:bg-gray-100 ">
                              <div className="">
                                <img src={`${!el.iconoProyecto ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/angular.png': el?.iconoProyecto}`} width={15} height={15} alt="sd"/>
                              </div>
                              <div>
                                {el?.primerNombre} {el?.apellidoPaterno}   
                              </div>        
                          </button>
                        })}
                        <button onClick={()=>setAbrirIntegrante(!abrirIntegrante)} className=" mt-2 mr-2 bg-blue-500 text-white rounded font-semibold px-3 py-1 flex justify-self-end">Seleccionar</button>
                      </ul>
                    }
                  </div>
                  
                 
                </main>
                <div className='h-[50%] w-full flex justify-end items-end gap-x-2'>
                  <button onClick={handleClickCrearEquipo}  className='h-[70%] w-[30%]  rounded cursor-pointer bg-blue-500 hover:bg-blue-600  hover:duration-300  text-white font-bold text-(length:--tamañoLetraChica)'>
                    Crear Equipo
                  </button>
                  <button onClick={handleClickVolverCrearEquipo}  className='h-[70%] w-[20%]  rounded cursor-pointer bg-black hover:bg-hoverColorBotonCerrar  hover:duration-300  text-white font-bold text-(length:--tamañoLetraChica)'>
                    Cerrar
                  </button>
                </div>
            </form>
          </div>
      </div>
    )
}

export default ModalCrearEquipo