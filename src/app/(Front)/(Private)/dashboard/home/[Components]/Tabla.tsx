'use client'

import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import ModalEliminar from '../../[Components]/ModalEliminar';
import { useIdProyectoProUpdated } from '../../../[stores]/homeStore';
import ModalAgregarUsuarios from '../misProyectos/[Components]/ModalAgregarUsuarios';

const Tabla = ({ruta, status, misProy, handleClickPincharAgregar}) => {


  const idProyectoUpdated = useIdProyectoProUpdated((state) => state.updateIdProyectoId)
  const router = useRouter()
  // ACTIVAR MODAL DE ELIMINAR
  const [activarEliminar, setActivarEliminar] = useState(false)

  

  const updateProyecto = (e, id)=>{
    idProyectoUpdated(id)
    router.push('/dashboard/home/misProyectos/verProyecto')
  }


  const handleClickPincharVer =(e, id)=>{
    console.log(id);
    idProyectoUpdated(id)
    router.push('/dashboard/home/misProyectos/detalleProyecto')
  }

  
  

  return (
    <>
      <table className={`${activarEliminar ? 'opacity-15': ''} border border-gray-200   w-full `}>
            <thead className=''>
              <tr className='h-11 bg-gray-100 '>
                <td className='w-[5%] text-center'>Numero</td>
                <td className='w-[5%]  text-center'> Logo</td>
                <td className='w-[13%] text-center'>Nombre Proyecto</td>
                <td className='w-[10%] text-center'>Finalidad</td>
                <td className='w-[10%] text-center'>Tipo</td>   
                <td className='w-[7%] text-center'>N° Equipos</td>
                <td className='w-[8%] text-center'>N° Usuarios</td>
                <td className='w-[10%] text-center'>Presupuesto (USD)</td>
                <td className='w-[9%] text-center'>Fecha Inicio</td>
                {/* <td className='w-[9%] text-center'>Fecha Termino</td> */}
                <td className='w-[7%] text-center'>Status</td>
                <td className='w-[5%] text-center'></td>
                <td className='w-[5%] text-center '></td>
                <td className='w-[5%] text-center '></td>
              </tr>
            </thead>
            <tbody>
              {misProy[0].proyectos?.filter((el)=>el.statusProyecto===status).map((el, items)=>{
                  return <tr  onClick={()=>{ruta ? router.push('/dashboard/iniciar'):''} 
                   }  key={el.id} className={`${ruta ? 'cursor-pointer hover:bg-gray-100': ''} border border-gray-200 h-11`}>
                    <td  className='text-center '>
                      {items + 1}
                    </td>
                    <td className='w-full  grid place-content-center '>
                      {<img src={`${!el?.iconoProyecto ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/pregunta.png' : el?.iconoProyecto}`} width={17} height={17} alt='d' />}
                    </td>
                    <td className='text-center'>
                      {el?.nombreProyecto.length > 20 ? el?.nombreProyecto.slice(0,20) + '...' : el?.nombreProyecto}
                    </td>
                    <td className='text-center'>
                      {el?.finalidadProyecto?.nombreFinalidadProyecto}
                    </td>
                    <td className='text-center'>
                      {el?.tipoProyecto?.nombreTipoProyecto}
                    </td>
                    <td className='text-center'>
                      {el?.equipos.length}
                    </td>
                    <td className='text-center'>
                      1
                    </td>
                    <td className='text-center'>
                      {el?.presupuestoDelProyecto ?? 0}
                    </td>
                    <td className='text-center'>
                      {el?.fechaInicio}
                    </td>
                    {/* <td className='text-center'>
                      {`${!el?.fechaTermino ? '-' : el?.fechaTermino}`}
                    </td>  */}
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
                      </td>
                  </tr>
                })}
            </tbody>
        </table>
        {activarEliminar &&
          <div className='w-full flex justify-center '>
            <ModalEliminar
              setActivarEliminar={setActivarEliminar}
              nombre = ''
              id= ''
            />
          </div>
        
        }
        
    </>
  )
}

export default Tabla