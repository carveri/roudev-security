
'use client'

import React, { useState } from 'react'
import { useRouter } from "next/navigation";
import ModalEliminar from '../../[Components]/ModalEliminar';
import { dataFinancieroHome } from '../utils/dataFinancieroHome';

const TablaFinancieroHome = ({ruta}:any) => {

  const router = useRouter()

  // ACTIVAR MODAL DE ELIMINAR
  const [activarEliminar, setActivarEliminar] = useState(false)

  return (
    <>
      <table className={`${activarEliminar ? 'opacity-15': ''} border border-gray-200   w-full `}>
            <thead className=''>
              <tr className='h-11 bg-gray-100 '>
                <td className='w-[5%] text-center'>Numero</td>
                <td className='w-[5%]  text-center'> Avatar</td>
                <td className='w-[10%] text-center'>Nombre Proyecto</td>
                <td className='w-[8%] text-center'>Runway</td>
                <td className='w-[8%] text-center'>Dinero Disponible (USD)</td>
                <td className='w-[8%]  text-center'> CAC</td>
                <td className='w-[8%] text-center'>LTV</td>
                <td className='w-[8%] text-center'>Churn</td>
                
              </tr>
            </thead>
            <tbody>
              {dataFinancieroHome.map((el, items)=>{
                  return <tr  onClick={()=>{ruta ? router.push('/dashboard/iniciar'):''} 
                   }  key={el.id} className={`${ruta ? 'cursor-pointer hover:bg-gray-100': ''} border border-gray-200 h-11  `}>
                    <td  className='text-center '>
                      {items + 1}
                    </td>
                    <td className='w-full  grid place-content-center  h-11'>
                      {<img src={el.iconoProyecto} width={20} height={20} alt='d' />}
                    </td>
                    <td className='text-center '>
                      {el.nombreProyecto}
                    </td>
                    <td className='text-center'>
                      {el.runway}
                    </td>
                    <td className='text-center'>
                      {el.dineroDisponible}
                    </td>
                    <td className='text-center '>
                      {el.cac}
                    </td>
                    <td className='text-center'>
                      {el.ltv}
                    </td>
                    <td className='text-center'>
                      {el.churn}
                    </td>
                    
                    
                  </tr>
                })}
            </tbody>
            
        </table>
        {activarEliminar &&
          <div className='w-full flex justify-center '>
            <ModalEliminar
              setActivarEliminar={setActivarEliminar}
              nombre
              id
            />
          </div>
        
        }
    </>
  )
}

export default TablaFinancieroHome