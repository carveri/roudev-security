
import {useState} from 'react'
//import { dataTipoProyecto } from '../../../../utils/dataTipoProyecto'

const BadgeAbrirLista = ({nombre, handleClickSelectProyecto, valorAPintar, abrirLista, setAbrirLista, abrirLapiz, nameLapiz, setAbrirLapiz, nameAbrirCaja, data, condicion, valorInicial, nombreSelect}) => {

    //const abrirTipos = false

    //console.log('datataaa:', data);
    

    const [activarCaja, setActivarCaja] = useState(false)
    
    const [statusProyectoId, setStatusProyectoId] = useState('')
    const [finalidadProyectoId, setFinalidadProyectoId] = useState('')
    const [tipoProyectoId, setTipoProyectoId] = useState('')

    // abrir caja de los proyectos
    const handleClickModalCrearProyecto =(e)=>{
      e.preventDefault()
      // if(e.target.name === 'cajaNombreProyecto'){
      //   //setAbrirLapiz(!abrir)
      //   setAbrirLista(!abrirLista)
      // }
      if(e.target.name === 'cajaEstadoProyecto'){
        setAbrirLista(!abrirLista)
      }
      else if(e.target.name === 'cajaFinalidadProyecto'){
        setAbrirLista(!abrirLista)
      }
      else if(e.target.name === 'cajaTipoProyecto'){
        setAbrirLista(!abrirLista)
      }
      else if(e.target.name === 'cajaMiCargoProyecto'){
        setAbrirLista(!abrirLista)
      }
      else if(e.target.name === 'cajaPresupuestoProyecto'){
        setAbrirLista(!abrirLista)
      }
      else {
        console.log('asasaffffffffffffff');
        
      }

    }


    //const valorAPintar = true
   // const valorInicial = false


    // PINCHAR EL LAPIZ
    const handleClickUpdatedProyecto =(e)=>{
      e.preventDefault()
      if(e.target.name ==='estadoProyecto'){
        console.log('pinche el estado del proyecto!');
        setActivarCaja(!activarCaja)
        setAbrirLapiz(!abrirLapiz)
      }
      else if(e.target.name ==='nombreProyecto'){
        console.log('pinche nombreProyecto*******');
        setActivarCaja(!activarCaja)
        setAbrirLapiz(!abrirLapiz)
        
      }
      else if(e.target.name ==='finalidadProyecto'){
        console.log('toque la finalidad del proyecto');
        setActivarCaja(!activarCaja)
        setAbrirLapiz(!abrirLapiz)
      }
      else if(e.target.name ==='tipoProyecto'){
        console.log('pinche el tipo del proyecto');
        setActivarCaja(!activarCaja)
        setAbrirLapiz(!abrirLapiz)
        
      }
      else if(e.target.name ==='miCargoProyecto'){
        console.log('pinche mi cargo del pryecto!!!');
        setActivarCaja(!activarCaja)
        setAbrirLapiz(!abrirLapiz)

        
      }
      else if(e.target.name ==='presupuestoProyecto'){
        console.log('pinche presupuestoProyecto');
        setActivarCaja(!activarCaja)
        setAbrirLapiz(!abrirLapiz)
        
      }
      else {
        console.log('sdsdrrrrrrrrrr');
      }
    }

   // console.log('valor a pintar:', valorAPintar);
    
    

  return (
        <div className='grid mt-3'>
                  <label className='h-1 text-gray-600 pb-5' htmlFor="">{nombre}</label>
                  <div className="flex">
                    <button disabled={!abrirLapiz}  onClick={handleClickModalCrearProyecto} name={nameAbrirCaja} className={`${!activarCaja ? 'bg-gray-200 opacity-40 cursor-default ': 'cursor-pointer '} w-[90%]  rounded h-9   border border-gray-200 flex  items-center justify-between px-4`}>
                      {valorInicial}
                      <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="sd"/>
                    </button>

                    <img name={nameLapiz} onClick={handleClickUpdatedProyecto} className={` hover:bg-gray-100 w-10 h-9 py-3 px-3 cursor-pointer`}    src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/lapiz.png' width={15} height={15} alt="as" />
            
                  </div>
                  {abrirLista &&
                    <ul className="mt-[55px] w-[61%] z-50   absolute  left-3/5 max-h-[72px] overflow-auto  bg-white">
                      {data.map((el)=>{
                        //const {id, condicion} = el
                        return <button name={nombreSelect} onClick={(e)=>handleClickSelectProyecto(e, el.id, el[condicion])} key={el.id} className="pl-4 w-full justify-start h-9  border border-gray-100 grid items-center cursor-pointer hover:bg-gray-100 ">
                          {el[condicion]}
                        </button>
                      })}
                    </ul>
                  }
                </div>
  )
}

export default BadgeAbrirLista