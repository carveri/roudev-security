import { getServerSession } from 'next-auth';
import CabeceraLayoutProyectos from './Componentes/CabeceraLayoutProyectos';
import { authOptions } from '../../../../(Back)/api/auth/[...nextauth]/route';
import NombreProyecto from './Componentes/NombreProyecto';

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  const session = await getServerSession(authOptions)

  return  <div className='w-full h-full  grid place-items-center'>
  <div className='w-[95%] h-[95%] '>
    <header className='w-full h-[5%] font-semibold text-gray-600 text-(length:--tamañoLetra) '>
      Proyectos
    </header>
    <div className="w-full  h-[5%] flex ">
      <div className=' items-center flex justify-between w-[75%] bg-gray-100 text-gray-700 h-full px-3 mb-1'>
        <div className='flex items-center gap-x-2'>
          <img
            src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/retrospectiveSm.png'
            width={15}
            height={15}
            alt='as'
          />
          <div className="flex">
              <div className="text-(length:--tamañoLetraChica) flex gap-x-2 mr-1 capitalize">
                {session?.user?.name} {session?.user?.apellidoPaterno}
              </div>
              <NombreProyecto />
            </div>
        </div>
        
        <div className="flex gap-x-2">
          <div className="cursor-pointer">
            <img
                src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/eliminar.png'
                width={15}
                height={15}
                alt='as'
              />
          </div>
          <div className="cursor-pointer">
          <img
                src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/lapiz.png'
                width={15}
                height={15}
                alt='as'
              />
          </div>
        </div>

      </div>

    </div>
    <CabeceraLayoutProyectos />
    <main className="w-full h-[80%] mt-7 ">
      {children}
    </main>
  </div>
</div>
}