
'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { useIdResponsableTarea } from "../../../../../[stores]/homeStore"



const ModalAceptarColaborador = ({acepColaborador, setabrirModalAceptar}) => {
  const router = useRouter()

  // const idResponsableTarea = useIdResponsableTarea((state) => state.idResponsableTarea)

  // console.log('idres en aceptar', idResponsableTarea);
  
  
      const [nombreProyecto, setNombreProyecto] = useState('')
      const [proyecto, setProyecto] = useState('Proyecto 1')
      const [subTipoProyecto, setSubTipoProyecto] = useState('Juan Perez')
    
      // ESTADOS PARA ABRIR Y CERRAR LA LISTA DE TIPOS Y SUBTIPOS
      const [abrirTipos, setAbrirTipos] = useState(false)
      const [abrirSubTipos, setAbrirSubTipos] = useState(false)
    
      // ESTADO ID DEL SELECT
      const [idTipoProyecto, setIdTipoProyecto] = useState('')
      const [idSubTipoProyecto, setIdSubTipoProyecto] = useState('')

     //const [activoEquipo, setActivoEquipo] = useState(true)


      
    
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
        console.log('guardado');
        
      }
  
      const handleClickVolverCrearEquipo=(e)=>{
          e.preventDefault()
          acepColaborador(false)
          setabrirModalAceptar(false)
          //router.push('/dashboard/home/misProyectos/verProyecto')
      }
  
  
  
    
      return (
        <div>
            <form  className={`bg-white w-[23%] h-[20%]  px-7  rounded-md mt-28  fixed top-14 ml-[1350px] grid  text-tamañoLetraChica`}>
                  <header className=' w-full h-[30%]  flex items-center justify-center  text-gray-600 font-semibold text-tamañoLetra '>
                    <img width={18} height={18} src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/check2.png" alt="check" />
                    <div className="pl-2 mt-1 h-full text-[16px] flex items-center justify-center">Petición Enviada</div>
                  </header>
                  <main className='h-[50%]  '>
                    <div className={`flex text-tamañoLetraChica`}>
                      Se envio correctamente la peticion al responsable de la tarea, cuando confirme si acepta o rechaza tu colaboración seras notificado.
                    </div>
                    
                    
                   
                  </main>
                  <div className='h-[60%] w-full flex justify-end items-end gap-x-2'>
                   
                    <button onClick={handleClickVolverCrearEquipo}  className='h-[100%] w-[20%]  rounded cursor-pointer bg-colorBotonCerrar hover:bg-hoverColorBotonCerrar  hover:duration-300  text-white font-bold text-tamañoLetraChica'>
                      Cerrar
                    </button>
                  </div>
                  
              </form>
        </div>
      )
}

export default ModalAceptarColaborador