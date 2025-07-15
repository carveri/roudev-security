'use client'

import {useState, useEffect} from 'react'
import { dataMisProyectosDummy } from '../../misProyectos/utils/dataMisProyectos'
import { dataFiltroCargo } from '../utils/dataFiltroCargo'


const BadgeFiltroCargo = () => {

    const [activo, setActivo] = useState(false)
    const [proyectos, setProyectos] = useState('Proyecto')

    // estado select id
    const [idProyecto, setIdProyecto] = useState(0)
    const [icono, setIcono] = useState('https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/nuevasTareasPo.png')
    //const [idP, setidP] = useState(second)


    const [dataProyectos, setDataProyectos] = useState([])

    // useEffect(()=>{
    //     const respuesta = async()=>{
    //     const ruta = 'proyecto'
    //     const res = await getData({ruta})
    //     setDataProyectos(res)
    //   }
    //   return respuesta
    // },[])

      

    const handleClickListaProyectos =(e, id, nombre, icono)=>{
        setIdProyecto(id)
        setProyectos(nombre)
        setIcono(icono)
        setActivo(false)
    }


    const numeroId = idProyecto - 1


    
    //console.log('res', dataProyectos);
    

  return (
    <header className='w-full h-[5%]  grid justify-items-end text-tamañoLetraChica '>
        {dataFiltroCargo.length>0 ?
          <div onClick={()=>setActivo(!activo)} className='w-[12%]  h-[32px] border-b border-gray-300  flex items-center justify-between px-2 cursor-pointer'>
          <section className='flex  py-1 justify-between'>
            <div>
                {dataFiltroCargo.at(numeroId)?.nombreCargo}
            </div>
            <img className='mr-2 w-3 h-3 flex items-center' src={'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png'} width={16} height={14} alt='ssd'/>
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
            {dataFiltroCargo.map((el)=>{
              return <li onClick={(e)=>handleClickListaProyectos(e, el.id, el?.nombreCargo, el?.avatar)} value={el?.nombreCargo} key={el.id} className='flex w-full h-[32px] cursor-pointer  hover:bg-gray-100'>
                {<><img className='py-2' src={el.avatar} width={15} height={4} alt='as' /> <div className='ml-2 grid place-items-center'>{el.nombreCargo}</div></>}
                
              </li>
            })}
          </ul>
          
        }
        
      </header>
  )
}

export default BadgeFiltroCargo