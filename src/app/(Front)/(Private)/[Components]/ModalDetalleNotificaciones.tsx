
'use client'

import React from 'react'
import { dataCuerpoPerfil } from './utils/dataCuerpoPerfil';
import { redirect, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react"
import { dataCuerpoNotificacion } from './utils/dataCuerpoNotificaciones';
// para poder hacer el cierre de session
//import { useAuth } from "react-oidc-context";


const ModalDetalleNotificaciones = ({setActivar, activarModalConfirmar, setActivarModalConfirmar, setActivarNotificacion}) => {

    const router = useRouter()
    //const {} = useSession()

    const handleClickAbrirNoti =(e, id, tarea)=>{
        e.preventDefault()
        if(e.target.name === 'Tarea1'){
            //router.push('/dashboard/perfil/perfilPersonal')
            //setActivar(false)
            console.log('tarea 1');
            
        }
        else if(e.target.name === 'Tarea2'){
            //router.push('/dashboard/perfilLaboral')
            console.log('tarea 2');
        }
        else if(e.target.name === 'Tarea3'){
            // router.push('/dashboard/facturacion')
            // setActivar(false)
            console.log('tarea 3');
        }
        else if(e.target.name === 'Tarea4'){
            //router.push('/dashboard/perfilProyectos')
            console.log('tarea 4');
        }
        else {
            console.log('as');
            
        }
        //console.log('sdsd');
        
    }

    const handleClickConfirmar =()=>{
        setActivarNotificacion(false)
        setActivarModalConfirmar(!activarModalConfirmar)
        setActivar(false)
    }

    const handleClickSalir =()=>{
        //e.preventDefault()
        //signOut()
        setActivar(false)
        //if(ses)
    }
    
    const misProy = ['','','']
    const ruta = true

    const tarea = 'Tarea 111111xxxxxxxxxxxxxxx'

  return (
    <div className='w-[15%] h-[40%] z-50  fixed top-23  mr-[43px] border border-gray-200 bg-white p-3 text-(length:--tamañoLetraChica)'>
        <section className='w-full h-[15%] '>
            <header className='w-full h-full flex px-3 items-center'>
                <div className='w-[90%] flex items-center '>
                    <div className='w-auto text-blue-600 font-semibold'>
                        {tarea.length > 16 ? tarea.slice(0,16) + '...' : tarea}
                    </div>
                     <div>
                        - ¿Puede Aportar?
                     </div>
                </div>
                <div onClick={()=>setActivar(false)} className='w-[10%] h-full grid place-items-center cursor-pointer p-1 hover:border-b border-gray-500'>
                    <img className='' src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz3.png' width={10} height={10} alt='as'/>
                </div>
            </header>
        </section>
        <section className='w-full h-[75%] '>
            <table className='text-(length:--tamañoLetraChica) w-full'>
            <thead className=' '>
              <tr className='h-11 bg-gray-100 text-(length:--tamañoLetraChica)'>
                <td className='w-[30%] px-2'>Nombre</td>
                <td className='w-[30%]  px-3'> Apellido</td>
                <td className='w-[30%]  px-3'> Equipo</td>
                <td className='w-[10%] px-3'>Aceptar</td>
                {/* <td className='w-[10%] text-center'>Finalidad</td>
                <td className='w-[10%] text-center'>Tipo</td>   
                <td className='w-[7%] text-center'>N° Equipos</td>
                <td className='w-[8%] text-center'>N° Usuarios</td>
                <td className='w-[10%] text-center'>Presupuesto (USD)</td>
                <td className='w-[9%] text-center'>Fecha Inicio</td>
                <td className='w-[7%] text-center'>Status</td>
                <td className='w-[5%] text-center'></td>
                <td className='w-[5%] text-center '></td>
                <td className='w-[5%] text-center '></td> */}
              </tr>
            </thead>
            <tbody>
              {misProy.map((el, items)=>{
                  return <tr   onClick={()=>{ruta ? router.push('/dashboard/iniciar'):''} 
                   }   className={` ${ruta ? 'cursor-pointer hover:bg-gray-100': ''} border border-gray-200 h-11 text-(length:--tamañoLetraChica)`}>
                    <td  className='pl-3'>
                      Camila
                    </td>
                    <td className='pl-3 '>
                        Rivas
                    </td>
                    <td className='pl-3 '>
                        Team 1
                    </td>
                    <td className='text-center '>
                      <input className='cursor-pointer' type="checkbox" />
                    </td>
                    {/* <td className='text-center'>
                      {el?.finalidadProyecto?.nombreFinalidadProyecto}
                    </td>
                    <td className='text-center'>
                      {el?.tipoProyecto?.nombreTipoProyecto}
                    </td>
                    <td className='text-center'>
                      {el?.equipos.length}
                    </td>
                    <td className='text-center'>
                      {el?.users.length}
                    </td>
                    <td className='text-center'>
                      {el?.presupuestoDelProyecto ?? 0}
                    </td>
                    <td className='text-center'>
                      {el?.fechaInicio}
                    </td>
                   
                    <td className={`text-center ${el.statusProyecto === 'Activo' ? 'text-green-500' : el.statusProyecto === 'Suspendido' ? 'text-yellow-500' : 'text-red-500'}`}>
                      {el?.statusProyecto}
                    </td>
                      <td onClick={(e)=>handleClickPincharVer(e, el.id)} className=' text-center text-[11px] text-blue-500 cursor-pointer hover:border-b hover:border-blue-500 font-extrabold'>
                        Ver
                      </td>
                      <td onClick={(e)=>updateProyecto(e, el.id)} className='flex mt-[7px] py-[11px] h-full justify-center cursor-pointer hover:border-b hover:border-blue-500'>
                        {el?.statusProyecto === 'Eliminado' ? '-': <img className='' src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/lapiz.png' width={13} height={13} alt='delete' />} 
                      </td>
                      <td onClick={(e)=>handleClickPincharAgregar(e, el.id)} className=' text-center text-[20px] pt-1 text-green-500 cursor-pointer hover:border-b hover:border-blue-500 font-extrabold'>
                        +
                      </td> */}
                  </tr>
                })}
            </tbody>
        </table>
        </section>
        <form className='flex gap-x-2 ' action="">
          <button type='button' onClick={handleClickConfirmar} className='bg-blue-500 hover:bg-blue-600 rounded-md w-[60%] text-white py-3 cursor-pointer h-[12%] border-t border-gray-200 grid items-center pl-2 '>
              Confirmar
          </button>
          <button type='button' onClick={handleClickSalir} className='w-[35%] py-3 cursor-pointer h-[12%] border-t border-gray-200 grid items-center pl-2 hover:bg-gray-50'>
              Salir
          </button>
        </form>
    </div>
  )
}

export default ModalDetalleNotificaciones
