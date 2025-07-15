'use client'

import React, { useState } from 'react'
//import { dataMisProyectos } from '../../../misProyectos/utils/dataMisProyectos'
import { useRouter } from 'next/navigation'
import { dataEmpleados } from '../../home/individual/empleados/utils/dataEmpleados'
import { dataUnitsEconomics } from '../utils/dataUnitsEconomics'
//import { dataEmpleados } from '../individual/empleados/utils/dataEmpleados'
// import ModalEliminar from '../../../../(Components]/ModalEliminar'
// import { dataFounders } from '../../cofounders/utils/dataFounders'
// import { dataEmpleados } from '../utils/dataEmpleados'
// import ModalCrearEmpleado from './ModalCrearEmpleado'
//import { dataFounders } from '../utils/dataFounders'

const TablaUnitsEconomis = () => {

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
              <td className='w-[6%] text-center'>Proyecto</td>
              <td className='w-[8%]  text-center'>Ingresos Por Ventas (USD)</td>
              
              <td className='w-[8%] text-center'>Dinero disponible (USD)</td>
              <td className='w-[8%]  text-center'>Runway (meses)</td>
              <td className='w-[6%] text-center'>CAC</td>
              <td className='w-[6%] text-center'>LTV</td>
              <td className='w-[6%] text-center'>Churn</td>
              
              <td className='w-[6%] text-center'>Status del Proyecto</td>
              {/* <td className='w-[10%] text-center'>Cargo</td>
              <td className='w-[9%] text-center'>Fecha Ingreso</td>
              <td className='w-[6%] text-center'>Status</td>
              <td className='w-[9%] text-center'>Email</td>
              <td className='w-[5%] text-center'></td>
              <td className='w-[5%] text-center '></td>
              <td className='w-[5%] text-center'></td>
              <td onClick={handleClickAbrirModalCrearEmpleado}  className='bg-white w-[6%] text-blue-700 font-semibold text-center cursor-pointer border-b border-gray-200 hover:border-b hover:border-blue-500'>+ Empleado</td> */}
              
            </tr>
          </thead>
          <tbody className=''>
            {dataUnitsEconomics.map((el, items)=>{
                return <tr  onClick={()=>{ruta ? router.push('/dashboard/iniciar'):''} 
                 }  key={el.id} className={`w-full ${ruta ? 'cursor-pointer hover:bg-gray-100': ''} border border-gray-200 h-10  `}>
                  <td  className='text-center '>
                    {items + 1}
                  </td>
                  <td  className='text-center '>
                    {el.nombre}
                  </td>
                  
                  <td className='text-center'>
                    {el.ingresos}
                  </td>
                  <td className='w-full  grid place-content-center  h-11'>
                    {el.dineroDisponible}
                  </td>
                  
                  <td className='text-center'>
                    {el?.runway}
                  </td>
                  <td className='text-center'>
                    {el?.cac}
                  </td>
                  <td className='text-center'>
                    {el?.ltv}
                  </td>
                  <td className='text-center'>
                    {el?.churn}
                  </td>
                  <td className='text-center'>
                    {el?.status}
                  </td>
                  {/* <td className='text-center'>
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
                    </td> */}
                  
                  
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

export default TablaUnitsEconomis