import BadgeVacio from '../../[Components]/BadgeVacio'
import { getDataLista } from '../../../../React/Fetch/getDataLista';
import FiltrosMisProyectos from './[Components]/FiltrosMisProyectos';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../../../(Back)/api/auth/[...nextauth]/route';


const page = async() => {

  // traer el usuario
  const session = await getServerSession(authOptions)

  // traer los proyectoss
  const ruta = 'proyectoUser'
  const url = session?.user?.id
  const misProy = await getDataLista({ruta, url})

  return (
    <>
      {misProy[0]?.proyectos?.length>0? 
        <>
        <>
          <FiltrosMisProyectos
            misProy = {misProy}
            session={session}
          />
        </>
        </>
        :
        <>
          <div className='w-full h-full grid place-items-center'>
            <BadgeVacio />
          </div>
        </>
    }
    </>
  )
}

export default page