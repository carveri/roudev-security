import { dataMisProyectosDummy } from '../home/misProyectos/utils/dataMisProyectos'
import TablaProyectos from './Componentes/TablaProyectos'
import { GraficoTareasTerminadas } from './Componentes/GraficoTareasTerminadas'
import BadgeVacio from '../[Components]/BadgeVacio'
import GraficoTareaActiva from './Componentes/GraficoTareaActiva'
import CabeceraProyectos from './ComponentesPage/CabeceraProyectos'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../(Back)/api/auth/[...nextauth]/route'

const page = async() => {

  // TRAER SESSION DEL USUARIO
  const session = await getServerSession(authOptions)

  console.log('session desde pageproyecyos:', session);
  

  return (
    <>
      {dataMisProyectosDummy.length>0 ? 
        <div className='w-[75%] h-full   '>
          <CabeceraProyectos
            session = {session}
          />
                  <main className='w-full h-[90%] text-(length:--tamañoLetraChica) gap-x-2 mt-5'>
                      <div className='flex'>
                        <div className='w-[300px] h-[200px] mt-7 mr-2'>
                          <GraficoTareaActiva
                            titulo='N° Contribuidores por tarea Activa'
                          />
                        </div>
                        <div className='w-full h-full '>
                          <div className='w-full h-6 flex justify-end mb-1'>
                            <div className='w-32 h-full flex justify-between px-5 border-b border-gray-200'>
                              <div>
                                2025
                              </div>
                              <div className='mt-[2px]'>
                                <img className='w-3 h-3' src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/flechaAbajo5.png' alt="s" />
                              </div>
                            </div>
                          </div>
                         <header className='w-full h-14 flex items-center justify-center '>
                          Estado de las Tareas Activas
                         </header>
                          <TablaProyectos />
                        </div>
                      </div>
                      
                      <div className='mt-1 w-full ml-3'>
                        
                        <GraficoTareasTerminadas />
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