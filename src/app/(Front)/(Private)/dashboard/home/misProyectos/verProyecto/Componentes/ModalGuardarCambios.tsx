
'use client'

import { useRouter } from "next/navigation"
import { useState  } from "react";
//import { dataTipoProyecto } from "../utils/dataTipoProyecto";
//import { dataSubTipoProyecto } from "../utils/dataSubTipoProyecto";
import Image from "next/image";


//import { dataFinalidadProyecto } from "../utils/dataFinalidadProyecto";
import { dataTipoProyecto } from "../../../../utils/dataTipoProyecto";
import { dataFinalidadProyecto } from "../../../../utils/dataFinalidadProyecto";
import { dataSubTipoProyecto } from "../../../../utils/dataSubTipoProyecto";
import { dataEquipoProyectos } from "../../utils/dataEquipoProyectos";

const ModalGuardarCambios = () => {

    const router = useRouter()
    
      const [nombreProyecto, setNombreProyecto] = useState('')
      const [finalidadProyecto, setFinalidadProyecto] = useState('Hobby')
      const [tipoProyecto, setTipoProyecto] = useState('App')
      const [subTipoProyecto, setSubTipoProyecto] = useState('App Web')
    
      // ESTADOS PARA ABRIR Y CERRAR LA LISTA DE TIPOS Y SUBTIPOS
      const [abrirFinalidad, setAbrirFinalidad] = useState(false)
      const [abrirTipos, setAbrirTipos] = useState(false)
      const [abrirSubTipos, setAbrirSubTipos] = useState(false)
      const [abrirEquipos, setAbrirEquipos] = useState(false)
    
      // ESTADO ID DEL SELECT
      const [idFinalidadProyecto, setIdFinalidadProyecto] = useState('')
      const [idTipoProyecto, setIdTipoProyecto] = useState('')
      const [idSubTipoProyecto, setIdSubTipoProyecto] = useState('')

      const [abrirModal, setAbrirModal] = useState(false)
    
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
          setAbrirFinalidad(false)
          setAbrirSubTipos(false)
        }
        else if(e.target.name === 'finalidadDelProyecto'){
          setAbrirFinalidad(!abrirFinalidad)
          setAbrirTipos(false)
          setAbrirSubTipos(false)
        }
        else if(e.target.name === 'subTipoDelProyecto'){
          setAbrirSubTipos(!abrirSubTipos)
          setAbrirFinalidad(false)
          setAbrirTipos(false)
        }
        else if(e.target.name === 'equipos'){
            setAbrirEquipos(!abrirEquipos)
            setAbrirFinalidad(false)
            setAbrirTipos(false)
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
          setTipoProyecto(nombre)
          setAbrirTipos(false)
        }
        else if(e.target.name === 'selectFinalidadProyecto'){
          //console.log(id);
          setIdFinalidadProyecto(id)
          setFinalidadProyecto(nombre)
          setAbrirFinalidad(false)
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
      const handleClickCrearProyecto =(e)=>{
        e.preventDefault()
        const data = {nombreProyecto, idTipoProyecto, idSubTipoProyecto}
        console.log(data);
        setAbrirModal(false)
        //router.back()
      }
    
      const handleClickVolverCrearProyecto =(e)=>{
        e.preventDefault()
        setAbrirModal(false)
        //router.back()
      }
    


  return (
    <div>
            <form   className={`bg-white w-[23%] h-[70%] py-4 px-10  rounded-md mt-8 shadow-2xl fixed top-[68px] grid justify-self-center text-tamañoLetraChica`}>
                  <header className='w-full h-[10%]  grid place-content-center  text-gray-600 font-semibold text-tamañoLetra'>
                    Confirmar Cambios
                  </header>
                  <main className='h-[95%] grid grid-rows-4 -mt-14'>
                    <div className='grid'>
                      <label className='h-1 text-gray-600 ' htmlFor="">Nombre del Proyecto </label>
                      
                        <div className="flex items-center ">
                            <div className=" flex justify-center">
                                <img className="mr-2" width={20} height={20} src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/appWeb.png' alt="s" />
                            </div>
                            
                            <div>Proyecto 1</div>
                        </div>
                    </div>
                    {/* <div className='grid '>
                      <label className='h-1 text-gray-600 pb-5' htmlFor="">Icono o logo del Proyecto ( Opcional )</label>
                      <input accept=".png" onChange={handleChangeCrearProyecto}  name='iconoProyecto' className='py-1 file:cursor-pointer text-gray-600 file:bg-gray-100 file:text-gray-800  file:hover:text-blue-500 file:hover:bg-gray-300 file:border-none file:py-1 file:px-2 cursor-pointer file:rounded h-9  bg-white border-none' type="file" placeholder='Apolo 1'/>
                    </div> */}
                    
                    <div className='grid'>
                      <label className='h-1 text-gray-600 pb-5' htmlFor="">Finalidad del  Proyecto *</label>
                      <button onClick={handleClickModalCrearProyecto} name='finalidadDelProyecto' className=' cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4'>
                        
                          {finalidadProyecto}
                        
                       
                          <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>
                       
                      </button>
                      {abrirFinalidad &&
                        <ul className="mt-[70px] w-[81%] z-50   absolute  left-3/5 max-h-[72px] overflow-auto  bg-white">
                        {dataFinalidadProyecto.map((el)=>{
                          return <button onClick={(e)=>handleClickSelectProyecto(e, el.id, el.nombreFinalidadProyecto)} name="selectFinalidadProyecto" key={el.id} className=" pl-4 flex gap-x-2 w-full justify-start h-9  border border-gray-100 items-center cursor-pointer hover:bg-gray-100 ">
                            
                              <img src={el.iconoFinalidadProyecto} width={15} height={15} alt="iconoSubTipo"/>
                            
                            
                              {el.nombreFinalidadProyecto}
                           
                          </button>
                        })}
                      </ul>
                      }
                    </div>
                    <div className='grid'>
                      <label className='h-1 text-gray-600 pb-5' htmlFor="">Tipo de Proyecto *</label>
                      <button onClick={handleClickModalCrearProyecto} name='tipoDelProyecto' className=' cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4'>
                        
                          {tipoProyecto}
                        
                       
                          <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>
                       
                      </button>
                      {abrirTipos &&
                        <ul className="mt-[70px] w-[81%] z-50   absolute  left-3/5 max-h-[72px] overflow-auto  bg-white">
                          {dataTipoProyecto.map((el)=>{
                            return <button name="selectTipoProyecto" onClick={(e)=>handleClickSelectProyecto(e, el.id, el.nombreTipoProyecto)} key={el.id} className="pl-4 w-full justify-start h-9  border border-gray-100 grid items-center cursor-pointer hover:bg-gray-100 ">
                              {el.nombreTipoProyecto}
                            </button>
                          })}
                        </ul>
                      }
                    </div>
                    <div className='grid'>
                      <label className='h-1 text-gray-600 pb-5' htmlFor="">Sub Tipo del Proyecto *</label>
                      <button onClick={handleClickModalCrearProyecto} name='subTipoDelProyecto' className=' cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4'>
                          {subTipoProyecto}
                          <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>
                        
    
                      </button>
                      {abrirSubTipos &&
                        <ul className="mt-[70px] w-[81%] z-50   absolute  left-3/5 max-h-[72px] overflow-auto  bg-white">
                          {dataSubTipoProyecto.map((el)=>{
                            return <button onClick={(e)=>handleClickSelectProyecto(e, el.id, el.nombreSubTipoProyecto)} name="selectSubTipoProyecto" key={el.id} className=" pl-4 flex gap-x-2 w-full justify-start h-9  border border-gray-100 items-center cursor-pointer hover:bg-gray-100 ">
                              
                                <img src={el.iconoSubTipoProyecto} width={15} height={15} alt="iconoSubTipo"/>
                              
                              
                                {el.nombreSubTipoProyecto}
                             
                            </button>
                          })}
                        </ul>
                      }
                    </div>
                    <div className='grid'>
                      <label className='h-1 text-gray-600 pb-5' htmlFor="">Equipos</label>
                      <button onClick={handleClickModalCrearProyecto} name='subTipoDelProyecto' className=' cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4'>
                          {subTipoProyecto}
                          <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>
                        
    
                      </button>
                      {abrirEquipos &&
                        <ul className="mt-[70px] w-[81%] z-50   absolute  left-3/5 max-h-[72px] overflow-auto  bg-white">
                          {dataEquipoProyectos.map((el)=>{
                            return <button onClick={(e)=>handleClickSelectProyecto(e, el.id, el.nombreEquipo)} name="selectSubTipoProyecto" key={el.id} className=" pl-4 flex gap-x-2 w-full justify-start h-9  border border-gray-100 items-center cursor-pointer hover:bg-gray-100 ">
                              
                                <img src={el.iconoEquipo} width={15} height={15} alt="iconoSubTipo"/>
                              
                              
                                {el.nombreEquipo}
                             
                            </button>
                          })}
                        </ul>
                      }
                    </div>
                    
                   
                  </main>
                  <div className='h-[50%] w-full flex justify-end items-end gap-x-2'>
                    
                        <button  onClick={handleClickCrearProyecto}  className='h-[55%] w-[40%]  rounded cursor-pointer bg-blue-500 hover:bg-blue-600  hover:duration-300  text-white font-bold text-tamañoLetraChica'>
                          Confirmar Cambios
                        </button>
                       
                  
                      
                        <button onClick={handleClickVolverCrearProyecto}  className='h-[55%] w-[20%]  rounded cursor-pointer bg-colorBotonCerrar hover:bg-hoverColorBotonCerrar  hover:duration-300  text-white font-bold text-tamañoLetraChica'>
                          Cerrar
                        </button>
                    </div>
              </form>
        </div>
  )
}

export default ModalGuardarCambios