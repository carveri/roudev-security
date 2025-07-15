'use client'

import { useRouter } from "next/navigation";
import React from 'react'
import { dataFlujoDeCaja } from "../utils/dataFlujoDeCaja";


const TablaFlujoDeCaja = ({activarEliminar, dataMisProyectosDummy, ruta}) => {
  
    const router = useRouter()
  
  
    const porcentajeAnchoMes = 7
    return (
    <table className={`${activarEliminar ? 'opacity-15': ''} border border-gray-200   w-full mt-4`}>
            <thead className=''>
              <tr className='h-9 bg-gray-100 '>
                
               
                <td className='w-[12%] text-center'>Item</td>
                <td className={`w-[${porcentajeAnchoMes}%] text-center`}>Mes 1</td>
                <td className={`w-[${porcentajeAnchoMes}%] text-center`}>Mes 2</td>
                <td className={`w-[${porcentajeAnchoMes}%] text-center`}>Mes 3</td>
                <td className={`w-[${porcentajeAnchoMes}%] text-center`}>Mes 4</td>
                <td className={`w-[${porcentajeAnchoMes}%] text-center`}>Mes 5</td>
                <td className={`w-[${porcentajeAnchoMes}%] text-center`}>Mes 6</td>
                <td className={`w-[${porcentajeAnchoMes}%] text-center`}>Mes 7</td>
                <td className={`w-[${porcentajeAnchoMes}%] text-center`}>Mes 8</td>
                <td className={`w-[${porcentajeAnchoMes}%] text-center`}>Mes 9</td>
                <td className={`w-[${porcentajeAnchoMes}%] text-center`}>Mes 10</td>
                <td className={`w-[${porcentajeAnchoMes}%] text-center`}>Mes 11</td>
                <td className={`w-[${porcentajeAnchoMes}%] text-center`}>Mes 12</td>
                
              </tr>
            </thead>
            <tbody>
              {dataFlujoDeCaja.map((el, items)=>{
                  return <tr  onClick={()=>{ruta ? router.push('/dashboard/iniciar'):''} 
                   }  key={el.id} className={`${ruta ? 'cursor-pointer hover:bg-gray-100': ''} border border-gray-200 h-9  `}>

                    <td className='text-center'>
                      {el.item}
                    </td>
                    {/* {el.alias === 'EOP'}{
                      
                    } */}
                    <td className='text-center'>
                      {el.mes1}
                    </td>
                    <td className='text-center'>
                      {el.mes2}
                    </td>
                    <td className='text-center'>
                      {el.mes3}
                    </td>
                    <td className='text-center'>
                      {el.mes4}
                    </td>
                    <td className='text-center'>
                      {el.mes5}
                    </td>
                    <td className='text-center'>
                      {el.mes6}
                    </td>
                    <td className='text-center'>
                      {el?.mes7}
                    </td>
                    <td className='text-center'>
                      {el.mes8}
                    </td>
                    <td className='text-center'>
                      {el.mes9}
                    </td>
                    <td className='text-center'>
                      {el.mes10}
                    </td>
                    <td className='text-center'>
                      {el.mes11}
                    </td>
                    <td className='text-center'>
                      {el.mes12}
                    </td>
                    
                  </tr>
                })}
            </tbody>
            
        </table>
  )
}

export default TablaFlujoDeCaja