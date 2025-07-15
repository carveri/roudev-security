
'use client'

import React, { useState } from 'react'
//import { dataMisProyectos } from '../../../misProyectos/utils/dataMisProyectos'
import { useRouter } from 'next/navigation'
import { dataEmpleados } from '../individual/empleados/utils/dataEmpleados'
// import ModalEliminar from '../../../../(Components]/ModalEliminar'
// import { dataFounders } from '../../cofounders/utils/dataFounders'
// import { dataEmpleados } from '../utils/dataEmpleados'
// import ModalCrearEmpleado from './ModalCrearEmpleado'
//import { dataFounders } from '../utils/dataFounders'

const TablaUsuariosHome = () => {

    const router = useRouter()
    
      // ACTIVAR MODAL DE ELIMINAR
      const [activarEliminar, setActivarEliminar] = useState(false)
      //const [activarOrden, setActivarOrden] = useState(false)
      const [activarCrearEmpleado, setActivarCrearEmpleado] = useState(false)

      const ruta = false

      const handleClickAbrirModalCrearEmpleado =()=>{
        setActivarCrearEmpleado(!activarCrearEmpleado)
      }

  return (
    <>
    <table className={` ${activarEliminar ? 'opacity-15': ''} border border-gray-200   w-full text-tamañoLetraChica`}>
          <thead className=''>
            <tr className='h-11 bg-gray-100 '>
              <td className='w-[5%] text-center'>Numero</td>
              <td className='w-[5%]  text-center'>Avatar</td>
              <td className='w-[6%] text-center'>Nombre</td>
              <td className='w-[6%] text-center'>Apellido</td>
              <td className='w-[8%] text-center'>Area</td>
              <td className='w-[6%] text-center'>Equipo</td>
              <td className='w-[10%] text-center'>Cargo</td>
              <td className='w-[9%] text-center'>Fecha Ingreso</td>
              <td className='w-[6%] text-center'>Status</td>
              <td className='w-[9%] text-center'>Email</td>
              <td className='w-[5%] text-center'></td>
              <td className='w-[5%] text-center '></td>
              <td className='w-[5%] text-center'></td>
              <td onClick={handleClickAbrirModalCrearEmpleado}  className='bg-white w-[6%] text-blue-700 font-semibold text-center cursor-pointer border-b border-gray-200 hover:border-b hover:border-blue-500'>+ Empleado</td>
              
            </tr>
          </thead>
          <tbody className='fixed z-40 h-[200px] max-h-[200px] overflow-auto'>
            {dataEmpleados.map((el, items)=>{
                return <tr  onClick={()=>{ruta ? router.push('/dashboard/iniciar'):''} 
                 }  key={el.id} className={`w-full ${ruta ? 'cursor-pointer hover:bg-gray-100': ''} border border-gray-200 h-10  `}>
                  <td  className='text-center '>
                    {items + 1}
                  </td>
                  <td className='w-full  grid place-content-center  h-11'>
                    {<img src={el.avatar} width={17} height={17} alt='d' />}
                  </td>
                  <td className='text-center'>
                    {el.nombre}
                  </td>
                  <td className='text-center'>
                    {el?.apellido}
                  </td>
                  <td className='text-center'>
                    {el?.area}
                  </td>
                  <td className='text-center'>
                    {el?.equipo}
                  </td>
                  <td className='text-center'>
                    {el?.cargo}
                  </td>
                  <td className='text-center'>
                    {el.fechaIngreso}
                  </td>
                  <td className='text-center'>
                    {el?.status}
                  </td>
                  <td className='text-center text-green-600'>
                    {el?.email}
                  </td>
                  <td onClick={()=>router.push('/dashboard/home/misProyectos/verProyecto')} className=' text-center text-[11px] text-blue-500 cursor-pointer hover:border-b hover:border-blue-500 font-extrabold'>
                      Ver
                    </td>
                  
                    <td onClick={()=>setActivarEliminar(!activarEliminar)} className=' py-[11px] h-full place-items-center cursor-pointer hover:border-b hover:border-blue-500'>
                      <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/lapiz.png' width={13} height={13} alt='delete' />
                    </td>
                    <td onClick={()=>setActivarEliminar(!activarEliminar)} className='  py-[11px] h-full place-items-center cursor-pointer hover:border-b hover:border-blue-500'>
                      <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/eliminar.png' width={13} height={13} alt='delete' />
                    </td>
                    <td onClick={()=>setActivarEliminar(!activarEliminar)} className='grid py-[11px] h-full justify-center cursor-pointer hover:border-b hover:border-blue-500'>
                      <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoLupa.png' width={13} height={13} alt='delete' />
                    </td>
                  
                  
                </tr>
              })}
          </tbody>
          
      </table>
      {/* {activarEliminar &&
        <div className='w-full flex justify-center '>
          <ModalEliminar
            setActivarEliminar={setActivarEliminar}
          />
        </div>
      }
       {activarCrearEmpleado && 
        <div className='w-full flex justify-center '>
        <ModalCrearEmpleado
          setActivarCrearEmpleado={setActivarCrearEmpleado}
        />
      </div>
      
      } */}
  </>
  )
}

export default TablaUsuariosHome