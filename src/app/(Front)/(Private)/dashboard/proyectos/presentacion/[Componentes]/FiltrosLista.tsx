'use client'
import {useEffect, useState} from 'react'
import { getDataLista } from '../../../../../React/Fetch/getDataLista'
//import { dataFiltrosPresentacionEquipoResponsable, dataFiltrosPresentacionFecha, dataFiltrosPresentacionResponsable, dataFiltrosPresentacionStatus } from '../utils/dataFiltrosPresentacionProyecto'

const FiltrosLista = () => {

  const [responsables, setResponsables] = useState([])


  const getResponsables = async()=>{
    const ruta = 'userResponsable'
    const url = 'pro2jara'
    const responsables = await getDataLista({ruta, url})
    setResponsables(responsables)

  }

  useEffect(()=>{
    getResponsables()
  }, [])

  console.log('responsab:', responsables);
  

const dataFiltros = [
    {
        id:'1',
        nombreFiltro: 'Responsable'
    },
    {
        id:'2',
        nombreFiltro: 'Cargo '
    },
    {
        id:'3',
        nombreFiltro: 'Status'
    },
    {
        id:'4',
        nombreFiltro: 'Fecha'
    },

]


const dataFiltrosPresentacionStatus = [
    {
        id:'1',
        nombreStatus: 'Product Backlog',
        iconoStatus: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/check.png'
    },
    {
        id:'2',
        nombreStatus: 'Desarrollo',
        iconoStatus: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/pendiente.png'
    },
    {
        id:'3',
        nombreStatus: 'Debugger',
        iconoStatus: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/rechazada.png'
    },
    {
        id:'4',
        nombreStatus: 'Diseño',
        iconoStatus: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/eliminar.png'
    },

]

const dataFiltrosPresentacionFecha =[
    {
        id:'1',
        nombreFecha: 'Hoy'
    },
    {
        id:'2',
        nombreFecha: 'Esta Semana'
    },
    {
        id:'3',
        nombreFecha: 'Este Mes'
    },
    {
        id:'4',
        nombreFecha: 'Este Año'
    },
]

const dataFiltrosPresentacionResponsable =[
    {
        id:'1',
        nombreResponsable: 'Pamela Rivas',
        icono:'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/pregunta.png'
    },
    {
        id:'2',
        nombreResponsable: 'Juan Perez',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoPB.png'
    },
    {
        id:'3',
        nombreResponsable: 'Maria Lopez',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/remix.png'
    },
    {
        id:'4',
        nombreResponsable: 'Carlos Osorio',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/store2.png'
    },
    {
        id:'5',
        nombreResponsable: 'Raul Carrasco',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/poAdmin2.png'
    },

]

const dataFiltrosPresentacionEquipoResponsable =[
    {
        id:'1',
        nombreEquipoResponsable: 'A',
        iconoEquipo: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/backend2.png'
    },
    {
        id:'2',
        nombreEquipoResponsable: 'B',
        iconoEquipo: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/frontend2.png'
    },
    {
        id:'3',
        nombreEquipoResponsable: 'C',
        iconoEquipo: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/diseño6.png'
    },
    {
        id:'4',
        nombreEquipoResponsable: 'D',
        iconoEquipo: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/database.png'
    },
    {
        id:'5',
        nombreEquipoResponsable: 'E',
        iconoEquipo: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/adminAdmin3.png'
    },

]


    // ACTIVAR LOS FILTROS
    const [activoResponsable, setActivoResponsable] = useState(false)
    const [activoCargo, setActivoCargo] = useState(false)
    const [activoStatus, setActivoStatus] = useState(false)
    const [activoFecha, setActivoFecha] = useState(false)

    const handleClickFiltroPresentacionProyecto =(e)=>{
      e.preventDefault()
      if(e.target.name ==='responsable'){
        setActivoResponsable(!activoResponsable)
        setActivoCargo(false)
        setActivoStatus(false)
        setActivoFecha(false)
      }
      else if(e.target.name === 'cargo'){
        setActivoCargo(!activoCargo)
        setActivoStatus(false)
        setActivoFecha(false)
        setActivoResponsable(false)
      }
      else if(e.target.name === 'status'){
        setActivoStatus(!activoStatus)
        setActivoCargo(false)
        setActivoFecha(false)
        setActivoResponsable(false)
      }
      else if(e.target.name === 'fecha'){
        setActivoFecha(!activoFecha)
        setActivoCargo(false)
        setActivoStatus(false)
        setActivoResponsable(false)
      }
      else {
        console.log('as');
        
      }
      
    }


    const handleClickSelectPresLayout =(e)=>{
      if(e.target.name === 'responsable'){
        setActivoResponsable(false)
      }
      else if(e.target.name === 'cargoResponsable'){
        setActivoCargo(false)
      }
      else if(e.target.name === 'status'){
        setActivoStatus(false)        
      }
      else if(e.target.name === 'fecha'){
        setActivoFecha(false)
      }
      else {
        console.log('NADA');
        
      }
    }


  return (
    <header className="w-[75%] h-[5%]   flex justify-end">
              <section className="w-[10%] z-50">
                <button name="responsable" onClick={handleClickFiltroPresentacionProyecto}  className="px-2 w-[100%] h-full border-b border-gray-50 flex justify-between place-items-center cursor-pointer hover:border-b hover:border-blue-500">
                Responsable
                  <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="das"/>
                </button>
                {activoResponsable &&
                  <div className="w-[100%] flex-col mt-1 border border-gray-200 bg-white opacity-95 pt-2  z-50  max-h-[130px] overflow-auto">
                    <div className="flex h-[30px]  gap-x-1 px-1 pb-1 ">
                      <div className="w-[10%] h-30 grid place-items-center ">
                        <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoLupa.png' width={10} height={10} alt="as"/>
                      </div>
                      <input className="rounded w-full h-full border border-gray-200 pl-2" placeholder="Buscar " type="text" />
                    </div>
                    {responsables?.map((el)=>{
                      return <button name='responsable' type="button" onClick={handleClickSelectPresLayout} key={el.id} className="w-full h-[30px]  flex justify-start items-center pl-2 hover:bg-gray-100">
                        <img className="mr-2" src={`${!el?.avatar ? 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/resumen5.png': el?.avatar}`} width={10} height={10} alt="as"/>
                        {el?.primerNombre} {el?.apellidoPaterno}
                      </button>
                    })}
                  </div>
                
                }
              </section>
              <section className="w-[10%] z-50">
                <button name="cargo" onClick={handleClickFiltroPresentacionProyecto}  className="px-2 w-[100%] h-full border-b border-gray-50 flex justify-between place-items-center cursor-pointer hover:border-b hover:border-blue-500">
                  Equipo
                  <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="das"/>
                </button>
                {activoCargo &&
                  <div className="w-[100%] flex-col mt-1 border border-gray-200 bg-white opacity-95 z-50  max-h-[130px] overflow-auto">
                    <div className="flex h-[30px] mt-2  gap-x-1 px-1 pb-1">
                      <div className="w-[10%] h-30 grid place-items-center ">
                        <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoLupa.png' width={10} height={10} alt="as"/>
                      </div>
                      <input className="rounded w-full h-full border border-gray-200 pl-2" placeholder="Buscar " type="text" />
                    </div>
                    {dataFiltrosPresentacionEquipoResponsable.map((el)=>{
                      return <button name='cargoResponsable' type="button" onClick={handleClickSelectPresLayout} key={el.id} className="w-full h-[30px]  flex justify-start items-center pl-2 hover:bg-gray-100">
                        <img className="mr-2" src={el.iconoEquipo} width={10} height={10} alt="as"/>
                        {el.nombreEquipoResponsable}
                      </button>
                    })}
                  </div>
                
                }
              </section>
              <section className="w-[10%] z-50">
                <button name="status" onClick={handleClickFiltroPresentacionProyecto}  className=" px-2 w-[100%] h-full border-b border-gray-50 flex justify-between place-items-center cursor-pointer hover:border-b hover:border-blue-500">
                  Etapa
                  <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="das"/>
                </button>
                {activoStatus &&
                  <div className="w-[100%] flex-col mt-1 border border-gray-200 bg-white opacity-95 z-50  max-h-[130px] overflow-auto">
                    <div className="flex h-[30px] mt-2  gap-x-1 px-1 pb-1">
                      <div className="w-[10%] h-30 grid place-items-center ">
                        <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoLupa.png' width={10} height={10} alt="as"/>
                      </div>
                      <input className="rounded w-full h-full border border-gray-200 pl-2" placeholder="Buscar " type="text" />
                    </div>
                    {dataFiltrosPresentacionStatus.map((el)=>{
                      return <button name='status' type="button" onClick={handleClickSelectPresLayout} key={el.id} className="w-full h-[30px]  flex justify-start items-center pl-2 hover:bg-gray-100">
                        <img className="mr-2" src={el.iconoStatus} width={10} height={10} alt="as"/>
                        {el.nombreStatus}
                      </button>
                    })}
                  </div>
                }
              </section>
              <section className="w-[10%] z-50">
                <button name="fecha" onClick={handleClickFiltroPresentacionProyecto}  className="px-2 w-[100%] h-full border-b border-gray-50 flex justify-between place-items-center cursor-pointer hover:border-b hover:border-blue-500">
                  Fecha Inicio
                  <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' width={10} height={10} alt="das"/>
                </button>
                {activoFecha &&
                  <div className="w-[100%] flex-col mt-1 border border-gray-200 bg-white opacity-95 z-50  max-h-[130px] overflow-auto">
                    <div className="flex h-[30px] mt-2 gap-x-1 px-1 pb-1">
                      <div className="w-[10%] h-30 grid place-items-center ">
                        <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoLupa.png' width={10} height={10} alt="as"/>
                      </div>
                      <input className="rounded w-full h-full border border-gray-200 pl-2" placeholder="Buscar " type="text" />
                    </div>
                    {dataFiltrosPresentacionFecha.map((el)=>{
                      return <button name='fecha' type="button" onClick={handleClickSelectPresLayout} key={el.id} className="w-full h-[30px] bg-white flex justify-start items-center pl-2 hover:bg-gray-100">
                        {el.nombreFecha}
                      </button>
                    })}
                  </div>
                }
              </section>
              
            
          </header>
  )
}

export default FiltrosLista