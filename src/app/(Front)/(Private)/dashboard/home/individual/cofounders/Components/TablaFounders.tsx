'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import ModalEliminar from '../../../../[Components]/ModalEliminar'
import ModalCrearFounder from './ModalCrearFounder'


const TablaFounders = ({res, bears, userId}) => {

  console.log('table del ceo:', res);
  
  // console.log('userID:', userId);
  

    const router = useRouter()
    
      // ACTIVAR MODAL DE ELIMINAR
      const [activarEliminar, setActivarEliminar] = useState(false)
      const [activarCrearFounder, setActivarCrearFounder] = useState(false)
      

      const ruta = false

      const handleClickCrearFounder = ()=>{
        setActivarCrearFounder(!activarCrearFounder)
        
      }


      const handleClickLapiz =()=>{
        //setActivarEliminar(!activarEliminar)
        
      }

      const handleClickEliminar =()=>{
        setActivarEliminar(!activarEliminar)
      }

      const handleClickBuscar =()=>{
        router.push('/dashboard/startUps/contactosStartUps')
      }

  return (
    <>
    <table className={`${activarCrearFounder && 'opacity-15'} border border-gray-200   w-full text-(length:--tamañoLetraChica)`}>
          <thead className=''>
            <tr className='h-11 bg-gray-100 '>
              <td className='w-[6%] text-center'>Numero</td>
              <td className='w-[6%]  text-center'>Avatar</td>
              <td className='w-[8%] text-center'>Nombre</td>
              <td className='w-[8%] text-center'>Apellido</td>
              <td className='w-[7%] text-center'>Cargo</td>
              <td className='w-[7%] text-center'>Equity (%)</td>
              <td className='w-[10%] text-center'>Fecha Ingreso</td>
              <td className='w-[8%] text-center'>Status</td>
              <td className='w-[10%] text-center'>Email</td>
              <td className='w-[6%] text-center'></td>
              <td className='w-[6%] text-center'></td>
              <td className='w-[6%] text-center '></td>
              <td onClick={handleClickCrearFounder}  className='bg-white w-[6%] text-blue-700 font-semibold text-center cursor-pointer border-b border-gray-200 hover:border-b hover:border-blue-500'>+ Founder</td>
              
            </tr>
          </thead>
          <tbody>
            {res[0]?.users?.map((el, items)=>{
                return <tr  onClick={()=>{ruta ? router.push('/dashboard/iniciar'):''} 
                 }  key={items} className={`${ruta ? 'cursor-pointer hover:bg-gray-100': ''} border border-gray-200 h-11 `}>
                  <td  className='text-center '>
                    {items + 1}
                  </td>
                  <td className='w-full  grid place-content-center  h-11'>
                    {<img src={`${!el.avatar ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png' : el?.avatar}`} width={17} height={17} alt='d' />}
                  </td>
                  <td className='text-center'>
                    {el?.primerNombre}
                  </td>
                  <td className='text-center'>
                    {el?.apellidoPaterno}
                  </td>
                  <td className='text-center'>
                    {el?.statusEnProyecto}
                  </td>
                  <td className='text-center'>
                    {el?.equity}
                  </td>
                  <td className='text-center'>
                    {el?.fechaInicio}
                  </td>
                  <td className='text-center'>
                    {el?.isActive ? 'Activo': 'Desactivo'}
                  </td>
                  <td className='text-center text-green-600'>
                    {el?.email}
                  </td>
                    <td onClick={()=>router.push('/dashboard/perfil/perfilPersonal')} className=' text-center text-[11px] text-blue-500 cursor-pointer hover:border-b hover:border-blue-500 font-extrabold'>
                      Ver
                    </td>
                  
                    <td onClick={handleClickLapiz} className=' py-[11px] h-full place-items-center cursor-pointer hover:border-b hover:border-blue-500'>
                      <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/lapiz.png' width={13} height={13} alt='delete' />
                    </td>
                    <td onClick={handleClickEliminar} className='  py-[11px] h-full place-items-center cursor-pointer hover:border-b hover:border-blue-500'>
                      <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/eliminar.png' width={13} height={13} alt='delete' />
                    </td>
                    <td onClick={handleClickBuscar} className='grid py-[11px] h-full justify-center cursor-pointer hover:border-b hover:border-blue-500'>
                      <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoLupa.png' width={13} height={13} alt='delete' />
                    </td>
                  
                  
                  
                </tr>
              })}
          </tbody>
          
      </table>
      {activarEliminar &&
        <div className='w-full flex justify-center '>
          <ModalEliminar
            setActivarEliminar={setActivarEliminar}
            nombre= 'wea del funder'
            id= ''
          />
        </div>
      }
      {activarCrearFounder && 
        <div className='w-full flex justify-center '>
          <ModalCrearFounder
            setActivarFounder={setActivarCrearFounder}
            //activarCrearFounder={activarCrearFounder}
          />
        </div>
      }
     

  </>
  )
}

export default TablaFounders