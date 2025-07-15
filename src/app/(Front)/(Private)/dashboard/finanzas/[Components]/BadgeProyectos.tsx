'use client'

import {useState} from 'react'
import { dataMisProyectosDummy } from '../../home/misProyectos/utils/dataMisProyectos'



const BadgeProyectos = () => {

    const [activo, setActivo] = useState(false)
    const [proyectos, setProyectos] = useState('Proyecto')

    // estado select id
    const [idProyecto, setIdProyecto] = useState(0)
    const [icono, setIcono] = useState('https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/nuevasTareasPo.png')
    //const [idP, setidP] = useState(second)

    const handleClickListaProyectos =(e, id, nombre, icono)=>{
        setIdProyecto(id)
        setProyectos(nombre)
        setIcono(icono)
        setActivo(false)
    }


    const numeroId = idProyecto - 1

  return (
    <header className='w-full h-[5%]  grid justify-items-end text-tamañoLetraChica '>
        {dataMisProyectosDummy.length>0 ?
          <div onClick={()=>setActivo(!activo)} className='w-[12%]  h-[32px] border-b border-gray-300  flex items-center justify-between px-2 cursor-pointer'>
          
          <section className='flex self-center py-1'>
            <img className='mr-2' src={`${dataMisProyectosDummy.at(numeroId)?.iconoProyecto}`} width={16} height={14} alt='ssd'/>
            {dataMisProyectosDummy.at(numeroId)?.nombreProyecto}
          </section>
          <section>
            <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={12} height={12} alt='sd'/>
          </section>
        </div>: 
        <div className='w-[7%]  h-[32px]   flex items-center justify-between px-2 '>
          
        </div>
      }
        
        {activo &&
            
            <ul className='w-[8%] h-[200px] mt-[38px] z-50   absolute  left-3/5 max-h-[96px] overflow-auto bg-white'>
            {dataMisProyectosDummy.map((el)=>{
              return <li onClick={(e)=>handleClickListaProyectos(e, el.id, el?.nombreProyecto, el?.iconoProyecto)} value={el?.nombreProyecto} key={el.id} className='flex w-full h-[32px] cursor-pointer  hover:bg-gray-100'>
                {<><img className='py-2' src={el?.iconoProyecto} width={15} height={4} alt='as' /> <div className='ml-2 grid place-items-center'>{el.nombreProyecto}</div></>}
                
              </li>
            })}
          </ul>
          
        }
        
      </header>
  )
}

export default BadgeProyectos