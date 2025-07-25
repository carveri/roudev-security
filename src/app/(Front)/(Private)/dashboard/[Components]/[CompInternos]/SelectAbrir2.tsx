'use client'

import {useState, useEffect} from 'react'
import { dataTipoProyecto } from '../../utils/dataTipoProyecto'
import { getData } from '../../../../React/Fetch/getData'

const SelectAbrir2 = ({setId}) => {

    const [finalidadProyecto, setFinalidadProyecto] = useState('Hobby')
    const [tipoProyecto, setTipoProyecto] = useState('App Web')
    const [subTipoProyecto, setSubTipoProyecto] = useState('App Web')

    const [abrirFinalidad, setAbrirFinalidad] = useState(false)
  const [abrirTipos, setAbrirTipos] = useState(false)
  const [abrirSubTipos, setAbrirSubTipos] = useState(false)

  // ESTADO ID DEL SELECT
    const [idFinalidadProyecto, setIdFinalidadProyecto] = useState('')
    const [idTipoProyecto, setIdTipoProyecto] = useState('')
    const [idSubTipoProyecto, setIdSubTipoProyecto] = useState('')


    const [tipoProyectoId, setTipoProyectoId] = useState([])

      // CAPTURO EL ESTADO DEL FORMULARIO
  const handleClickModalCrearProyecto =(e)=>{
    e.preventDefault()
    setAbrirTipos(!abrirTipos)
      setAbrirFinalidad(false)
      setAbrirSubTipos(false)
  }

  // BOTON SELECT TIPO Y SUBTIPO DE PROYECTO
  const handleClickSelectProyecto =(e, id, nombre)=>{
    e.preventDefault()
    setId(id)
      setTipoProyecto(nombre)
      setAbrirTipos(false)
  }


  useEffect(()=>{
        const getTipoProyectoss = async()=>{
        const ruta = 'tipoProyecto'
        const res = await getData({ruta})
        setTipoProyectoId(res)
      }
      getTipoProyectoss()
    }, [])
  
    //console.log('finaa:', tipoProyectoId);

  return (
    <div className='grid'>
                  <label className='h-1 text-gray-600 pb-5' htmlFor="">Tipo de Proyecto *</label>
                  <button onClick={handleClickModalCrearProyecto} name='tipoDelProyecto' className=' cursor-pointer rounded h-9  bg-white border border-gray-100 flex  items-center justify-between px-4'>
                    
                      {tipoProyecto}
                    
                   
                      <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>
                   
                  </button>
                  {abrirTipos &&
                    <ul className="mt-[60px] w-[81%] z-50   absolute  max-h-[72px] overflow-auto  bg-white">
                      {tipoProyectoId.map((el)=>{
                        return <button name="selectTipoProyecto" onClick={(e)=>handleClickSelectProyecto(e, el.id, el.nombreTipoProyecto)} key={el.id} className="pl-4 w-full justify-start h-9  border border-gray-100 grid items-center cursor-pointer hover:bg-gray-100 ">
                          {el.nombreTipoProyecto}
                        </button>
                      })}
                    </ul>
                  }
                </div>
  )
}

export default SelectAbrir2