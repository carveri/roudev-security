import React from 'react'
import BadgeVacio from '../[Components]/BadgeVacio'
import ComHome from './[Components]/ComHome'
import { dataMisProyectosDummy } from './misProyectos/utils/dataMisProyectos'
import GraficoTareas from './Graficos/GraficoTareas'
import TablaUsuarios from './[Components]/TablaUsuarios'
import TablaFinancieroHome from './[Components]/TablaFinancieroHome'
import BadgeFacturacion from './[Components]/BadgeFacturacion'
import { getDataLista } from '../../../React/Fetch/getDataLista'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../(Back)/api/auth/[...nextauth]/route'
import { IDataCuadrosHome } from '../../../../Interfaces/IHome'

 

const page = async() => {

  const session = await getServerSession(authOptions)

  const gestion = async(ruta:string, url:string)=>{
    const data = await getDataLista({ruta, url})
    return data
  }

  const numeroDeProyectos = await gestion('proyectoUser', session?.user?.id)
  const numeroDeEmpleados = await gestion('usersOnProyectos', '77bd7d73-4575-4c3b-b23e-e4de0bf5a44c')

 

  


  const dataCuadrosHome:IDataCuadrosHome[] =[
    {
        id:1,
        nombre: 'N° Proyectos Activos',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/proyecto.png',
        numero: `${numeroDeProyectos[0]?.proyectos.length}`
    },
    {
        id:2,
        nombre: 'Fecha Proxima Facturación',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/calendario.png',
        numero: '30-06-2025',
    },
    {
        id:3,
        nombre: 'Facturación Agosto (CLP)',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/ceoSm.png',
        numero: '190.000'
    },
    {
        id:4,
        nombre: 'Dinero Disponible Total (USD)',
        icono: 'https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/check.png',
        numero: '35'
    },
    
]

  return (
    <>
      {numeroDeProyectos.length>0 ? 
        <div className='w-[75%] h-full   '>
          <div className='w-full h-[8%] grid grid-cols-4 gap-x-24 text-(length:--tamañoLetraChica)'>
            {dataCuadrosHome.map((el)=>{
              const {id, nombre, icono, numero} = el
              return <ComHome
                id = {id}
                nombre = {nombre}
                icono = {icono}
                numero = {numero}
                key={id}
              />
            })}
          </div>
          <main className='w-full h-[90%] pt-3 text-(length:--tamañoLetraChica) gap-x-2 mt-5'>
            <div className='flex gap-x-4'>
              <div className='w-[520px] h-[275px] '>
                <BadgeFacturacion />
              </div>
              <div className='w-[970px] h-[200px] mt-2'>
                <GraficoTareas />
              </div>
            </div>
            <div className='flex mt-14 gap-x-7'>
              <div className='w-[900px] h-[200px] '>
                <header className='w-full h-12 flex items-center justify-center '>Unit Economics por Proyecto</header>
                <TablaFinancieroHome
                  ruta={true}
                />
              </div>
              <div className='w-[610px] h-[200px]'>
              <header className='w-full h-12 flex items-center justify-center'>Facturacion en tiempo real por Proyecto (Junio-2025)</header>
              <TablaUsuarios
                  dataMisProyectos={dataMisProyectosDummy}
                  ruta={true}
                />
              </div>
            </div>
          </main>
        </div>:
      <div className='w-full h-full grid place-items-center'>
        <BadgeVacio
          session={session}
        />
      </div> 
    }  
    </>
  )
}

export default page