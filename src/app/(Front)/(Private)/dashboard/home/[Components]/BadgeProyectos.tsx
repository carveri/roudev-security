'use client'

import {useState, useEffect} from 'react'
import { useIdCeo, useStore } from '../../../[stores]/homeStore'


const BadgeProyectos = ({res}) => {

    const bears = useStore((state) => state.updateBears)

    const [activo, setActivo] = useState(false)
    const [proyectos, setProyectos] = useState(res[0]?.proyectos?.at(0)?.nombreProyecto)

    // estado select id
    const [idProyecto, setIdProyecto] = useState('')
    const [indexProyecto, setIndexProyecto] = useState(0)
    const [icono, setIcono] = useState('https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/nuevasTareasPo.png')
    //const [idP, setidP] = useState(second)

    

    const [dataProyectos, setDataProyectos] = useState([])


    const ubears = useStore((state) => state.updateBears)
    const uuserId = useIdCeo((state) => state.updateIdCeo)

    const handleClickListaProyectos =(id, nombre, icono, userId, index)=>{
        setIdProyecto(id)
        setIndexProyecto(index)
        setProyectos(nombre)
        setIcono(icono)
        setActivo(false)
        ubears(id)
        uuserId(userId)
        bears(id)

    }


   console.log('idproyectopinchado:', idProyecto);
   
   
    const limiteString = 16

  return (
    <header className='w-full h-[5%]  grid justify-items-end text-(length:--tamañoLetraChica) '>
        {res.length>0 ?
          <div onClick={()=>setActivo(!activo)} className='w-[12%] py-2  h-[32px] border-b border-gray-300  flex items-center justify-between px-2 cursor-pointer'>
          
          <section className='flex self-center py-1 capitalize'>
            <img className='mr-2' src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/azure.png' width={15} height={13} alt='ssd'/>
            {proyectos.length > limiteString ? proyectos.slice(0,limiteString) + '...' : proyectos}
          </section>
          <section>
            <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={12} height={12} alt='sd'/>
          </section>
        </div>: 
        <div className='w-[7%]  h-[32px]   flex items-center justify-between px-2 '>
          
        </div>
      }
        
        {activo &&
            
            <ul className='w-[8%] h-[200px] mt-[38px] z-50   absolute   max-h-[96px] overflow-auto bg-white'>
            {res[0]?.proyectos?.map((el, index)=>{
              return <li onClick={(e)=>handleClickListaProyectos(el?.id, el?.nombreProyecto, el?.iconoProyecto, el?.ceo, index)} value={el?.nombreProyecto} key={el.id} className='flex w-full h-[32px] cursor-pointer  hover:bg-gray-100'>
                {<><img className='py-2' src={`${!el.iconoProyecto ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/aws.png' : el.iconoProyecto}`} width={15} height={4} alt='as' /> <div className='ml-2 grid place-items-center capitalize'>{el?.nombreProyecto.length > limiteString ? el?.nombreProyecto.slice(0,limiteString) + '...' : el?.nombreProyecto}</div></>}
                
              </li>
            })}
          </ul>
          
        }
        
      </header>
  )
}

export default BadgeProyectos