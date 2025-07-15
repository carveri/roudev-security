'use client'

import {useState, useEffect} from 'react'
import { dataFinalidadProyecto } from '../../utils/dataFinalidadProyecto'
import { getDataLista } from '../../../../React/Fetch/getDataLista'
import { getData } from '../../../../React/Fetch/getData'


const SelectAbriri = ({ nombre, name, setId, session}) => {

        const [finalidadProyecto, setFinalidadProyecto] = useState('Hobby')

        const [abrirFinalidad, setAbrirFinalidad] = useState(false)

        const [finalidadProyectoId, setFinalidadProyectoId] = useState([])

  // ESTADO ID DEL SELECT
    //const [idFinalidadProyecto, setIdFinalidadProyecto] = useState('')

    // CAPTURO EL ESTADO DEL FORMULARIO
  const handleClickModalCrearProyecto1 =(e)=>{
    e.preventDefault()
    setAbrirFinalidad(!abrirFinalidad)
    
  }


  // BOTON SELECT TIPO Y SUBTIPO DE PROYECTO
  const handleClickSelectProyecto =(e, id, nombre)=>{
    e.preventDefault()
    setId(id)
    setFinalidadProyecto(nombre)
    setAbrirFinalidad(false)
  }


  useEffect(()=>{
      const getProyectoss = async()=>{
      const ruta = 'finalidadProyecto'
      const res = await getData({ruta})
      setFinalidadProyectoId(res)
    }
    getProyectoss()
  }, [])

  //console.log('finaa:', finalidadProyectoId);
  


  return (
    <div className='grid'>
        <label className='h-1 text-gray-600 pb-5' htmlFor="">{nombre} *</label>
        <button onClick={handleClickModalCrearProyecto1} name={name} className=' cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4'>
                        
            {finalidadProyecto}
                        
                       
            <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>
                       
        </button>
            {abrirFinalidad &&
            <ul className="mt-[60px] w-[81%] z-50   absolute  left-3/5 max-h-[72px] overflow-auto  bg-white">
            {finalidadProyectoId.map((el)=>{
                return <button onClick={(e)=>handleClickSelectProyecto(e, el.id, el.nombreFinalidadProyecto)} name="selectFinalidadProyecto" key={el.id} className=" pl-4 flex gap-x-2 w-full justify-start h-9  border border-gray-100 items-center cursor-pointer hover:bg-gray-100 ">
                            
                <img src={`${!el?.iconoFinalidadProyecto ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/resumen5.png': el?.iconoFinalidadProyecto}`} width={15} height={15} alt="iconoSubTipo"/>
                            
                            
                {el?.nombreFinalidadProyecto}
                           
                </button>
            })}
        </ul>
    }
</div>
  )
}

export default SelectAbriri