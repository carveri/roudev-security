'use client'

import { useRouter } from "next/router"
import { useState } from "react"
import { dataMisProyectosDummy } from "../../home/misProyectos/utils/dataMisProyectos"
import { dataClientes } from "../../../../React/Utils/dataClientes"


const ModalCrearTarea = () => {
  const router = useRouter()
  
      const [nombreProyecto, setNombreProyecto] = useState('')
      const [proyecto, setProyecto] = useState('Proyecto 1')
      const [subTipoProyecto, setSubTipoProyecto] = useState('Juan Perez')
    
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
          setActivoEquipo(false)
          router.push('/dashboard/home/misProyectos/verProyecto')
      }
  
  
  
    
      return (
        <div>
            <form className={`bg-white w-[23%] h-[70%] py-4 px-10  rounded-md mt-8 shadow-2xl fixed top-14 grid justify-self-center text-(length:--tamañoLetraChica)`}>
                  <header className='w-full h-[10%]  grid place-content-center  text-gray-600 font-semibold text-(length:--tamañoLetra)'>
                    Crear Equipo
                  </header>
                  <main className='h-[90%] grid grid-rows-4 -mt-14'>
                    <div className='grid'>
                      <label className='h-1 text-gray-600 pb-5' htmlFor="">Nombre del Equipo</label>
                      <input onChange={handleChangeCrearProyecto}  name='nombreProyecto' className=' rounded h-9 pl-3 bg-white border border-gray-100' type="text" placeholder='Apolo 1'/>
                    </div>
                    <div className='grid '>
                      <label className='h-1 text-gray-600 pb-5' htmlFor="">Icono del Proyecto</label>
                      <input accept=".png" onChange={handleChangeCrearProyecto}  name='iconoProyecto' className='py-1 file:cursor-pointer text-gray-600 file:bg-gray-100 file:text-gray-800  file:hover:text-blue-500 file:hover:bg-gray-300 file:border-none file:py-1 file:px-2 cursor-pointer file:rounded h-9  bg-white border-none' type="file" placeholder='Apolo 1'/>
                    </div>
                    <div className='grid'>
                      <label className='h-1 text-gray-600 pb-5' htmlFor="">Proyecto al que pertenece</label>
                      <button onClick={handleClickModalCrearProyecto} name='tipoDelProyecto' className=' cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4'>
  
                          <div>
                              
                              
                                  {proyecto}
                              
                          </div>
                        
                       
                          <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>
                       
                      </button>
                      {abrirTipos &&
                        <ul className="mt-[70px] w-[81%] z-50   absolute  left-3/5 max-h-[72px] overflow-auto  bg-white">
                          {dataMisProyectosDummy.map((el)=>{
                            return <button name="selectTipoProyecto" onClick={(e)=>handleClickSelectProyecto(e, el.id, el.nombreProyecto)} key={el.id} className="pl-4 w-full justify-start h-9  border border-gray-100 flex items-center cursor-pointer hover:bg-gray-100 ">
                              <div className="mr-2">
                                  <img src={el.iconoProyecto} width={15} height={15} alt="sd"/>
                              </div>
                              <div>
                                  {el.nombreProyecto}
                              </div>
                            </button>
                          })}
                        </ul>
                      }
                    </div>
                    <div className='grid'>
                      <label className='h-1 text-gray-600 pb-5' htmlFor="">Integrantes del Equipo</label>
                      <button onClick={handleClickModalCrearProyecto} name='subTipoDelProyecto' className=' cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4'>
                          {subTipoProyecto}
                          <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>
                        
    
                      </button>
                      {abrirSubTipos &&
                        <ul className="mt-[70px] w-[81%] z-50   absolute  left-3/5 max-h-[72px] overflow-auto  bg-white">
                          {dataClientes.map((el)=>{
                            return <button onClick={(e)=>handleClickSelectProyecto(e, el.id, el.nombreSolicitante)} name="selectSubTipoProyecto" key={el.id} className=" pl-4 flex gap-x-2 w-full justify-start h-9  border border-gray-100 items-center cursor-pointer hover:bg-gray-100 ">
                              
                                {/* <Image src={el.icono} width={15} height={15} alt="iconoSubTipo"/> */}
                              
                              
                                {el.nombreSolicitante}
                             
                            </button>
                          })}
                        </ul>
                      }
                    </div>
                    
                   
                  </main>
                  <div className='h-[50%] w-full flex justify-end items-end gap-x-2'>
                    <button onClick={handleClickCrearEquipo}  className='h-[55%] w-[30%]  rounded cursor-pointer bg-blue-500 hover:bg-blue-600  hover:duration-300  text-white font-bold text-tamañoLetraChica'>
                      Crear Equipo
                    </button>
                    <button onClick={handleClickVolverCrearEquipo}  className='h-[55%] w-[20%]  rounded cursor-pointer bg-colorBotonCerrar hover:bg-hoverColorBotonCerrar  hover:duration-300  text-white font-bold text-tamañoLetraChica'>
                      Cerrar
                    </button>
                  </div>
              </form>
        </div>
      )
}

export default ModalCrearTarea