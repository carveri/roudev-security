'use client'

import {useState} from 'react'
import { dataCuerpoPerfil } from './utils/dataCuerpoPerfil';
import { redirect, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react"
import { dataCuerpoNotificacion } from './utils/dataCuerpoNotificaciones';
import { useProyectosNavbar } from '../[stores]/homeStore';
// para poder hacer el cierre de session
//import { useAuth } from "react-oidc-context";


const ModalNotificacion = ({setActivar, activarDetalleNotificacion,  setActivarModalDetalle}) => {


    const [activarDetalle, setActivarDetalle] = useState(false)
    const [nombreTarea, setNombreTarea] = useState('')
    const [nombreProyecto, setNombreProyecto] = useState('')


    const proyectos = useProyectosNavbar((state) => state.proyectos)

    console.log('proooo;', proyectos);

    const nombreProy2 = ()=>{
    
    const res = proyectos.map((el)=>{
      //if(el.proyecto?.nombreProyecto)
      return el?.nombreProyecto
    })
    return res
  }
  const unicos= [...new Set(nombreProy2())]


  console.log('nombreproyeto:', nombreProy2());
  
  console.log('sin en la notii:', unicos);
    

    const router = useRouter()
    //const {} = useSession()

    const handleClickAbrirNoti =(e, id, nombre,  tarea)=>{
        e.preventDefault()
        if(e.target.name === nombre){
            //router.push('/dashboard/perfil/perfilPersonal')
            //setActivar(false)
            console.log(tarea);
            setNombreTarea(tarea)
            setNombreProyecto(nombreProyecto)
            setActivarDetalle(!activarDetalle)
            
            
        }
        else if(e.target.name === nombre){
            //router.push('/dashboard/perfilLaboral')
            console.log('tarea 2');
            //setActivarDetalle(!activarDetalle)
        }
        else if(e.target.name === nombre){
            // router.push('/dashboard/facturacion')
            // setActivar(false)
            console.log('tarea 3');
        }
        else if(e.target.name === nombre){
            //router.push('/dashboard/perfilProyectos')
            console.log('tarea 4');
        }
        else {
            console.log('as');
            
        }
        //console.log('sdsd');
        
    }

    const handleClickAbrirTareaNotificacion =()=>{
        setActivarModalDetalle(!activarDetalleNotificacion)
    }

    const handleClickSalir =()=>{
        //e.preventDefault()
        //signOut()
        setActivar(false)
        //if(ses)
    }
    

  return (
    <div className='w-[15%] h-[40%] z-50  fixed top-10  mr-[332px] border border-gray-200 bg-white p-3 text-(length:--tamañoLetraChica)'>
        <section className='w-full h-[15%] '>
            <header className='w-full h-full flex px-3 items-center'>
                <div className='w-[90%] grid items-center '>
                    Notificaciones
                </div>
                <div onClick={()=>setActivar(false)} className='w-[10%] h-full grid place-items-center cursor-pointer p-1 hover:border-b border-gray-500'>
                    <img className='' src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz3.png' width={10} height={10} alt='as'/>
                </div>
            </header>
        </section>
        <section className='w-full h-[75%] '>
            <ul className='flex-col justify-start z-50  max-h-[79%] overflow-auto'>
                {proyectos.map((el)=>{
                    return <div key={el.id}>
                        <button  onClick={(e)=>handleClickAbrirNoti(e, el.id, el.nombre, el.tarea)} name={el.nombre} className={` flex cursor-pointer w-full hover:bg-gray-100 h-10 border border-gray-50 px-3 items-center`}>
                        <div className='w-4 h-4 mr-1 grid place-items-center rounded-full bg-blue-500 text-white font-semibold'>
                            3
                        </div>
                        <div  className='flex justify-between w-full ml-3'>
                            {el.nombreProyecto}
                            <img className=' w-3 h-3' src={`${!el.iconoProyecto ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/comida.png': el.iconoProyecto}`} alt="sa" />
                        </div>
                    </button>
                    <div>
                        {activarDetalle && el.tarea===nombreTarea &&
                        <div className='ml-[265px] fixed   w-[250px] max-h-[108px] overflow-auto'>
                                        <ul className={`text-(length:--tamañoLetraChica) grid grid-rows-${nombreTarea.length} bg-white   `}>
                                            {nombreTarea.map((el)=>{
                                                return <div className='ml-3' key={el.id}>

                                                    <button onClick={handleClickAbrirTareaNotificacion} className=' w-full cursor-pointer  flex justify-between items-center  py-2 hover:bg-gray-100 px-5' >
                                                    <div className='flex '>
                                                        <div className='w-4 h-4 bg-red-400 rounded-full text-white mr-2'>
                                                            2
                                                        </div>
                                                        {el}
                                                    </div>
                                                    <img className='w-3 h-3' src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png" alt="sd" />
                                                </button>

                                                </div>
                                            })}
                                        </ul>
                                    </div>
                    
                    }
                    </div>
                    </div>
                })}
            </ul>
            
        </section>
        <form action="">
        <button type='button' onClick={handleClickSalir} className='w-full py-3 cursor-pointer h-[12%] border-t border-gray-200 grid items-center pl-2 hover:bg-gray-50'>
            Salir
        </button>
        </form>
    </div>
  )
}

export default ModalNotificacion