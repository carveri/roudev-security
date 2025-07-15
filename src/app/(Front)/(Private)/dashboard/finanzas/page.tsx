import React from 'react'
import { dataMisProyectosDummy } from '../home/misProyectos/utils/dataMisProyectos'
import ComHome from './[Components]/ComHome'
import BadgeVacio from '../[Components]/BadgeVacio'
import { dataCuadrosFinazas } from './utils/dataCuadrosFinazas'
import GraficoTorta from '../home/Graficos/GraficoTorta'
import TablaUnitsEconomis from './[Components]/TablaUnitsEconomics'
import GraficoEmpleadosPorEquipos from './[Components]/GraficoEmpleadosPorEquipos'

const page = () => {
  return (
    <>
      {dataMisProyectosDummy.length>0 ? 
        <div className='w-[75%] h-full   '>
          <div className='w-full h-[8%] grid grid-cols-4 gap-x-2 text-(length:--tamañoLetraChica)'>
            {dataCuadrosFinazas.map((el)=>{
              return <ComHome
                el={el}  
                key={el.id}
              />
            })}
          </div>
          <main className='w-full h-[90%] pt-3 text-(length:--tamañoLetraChica) gap-x-2 mt-5'>
                      <div className='flex'>
                        
                        <div className='w-[970px] h-[200px]'>
                          <GraficoEmpleadosPorEquipos />
                        </div>
                        <div className='w-[520px] h-[200px] '>
                          <GraficoTorta
                            titulo='Unit Economics'
                          />
                        </div>
                      </div>
                      <div className='mt-40'>
                        <TablaUnitsEconomis />
                      </div>
                    </main>
        </div>:
      <div className='w-full h-full grid place-items-center'>
        <BadgeVacio />
      </div> 
    }  
    </>
  )
}

export default page