import { getServerSession } from "next-auth";
import BadgeProyectos from "../[Components]/BadgeProyectos";
import { authOptions } from "../../../../../(Back)/api/auth/[...nextauth]/route";
import { getDataLista } from "../../../../React/Fetch/getDataLista";


export default async function IndividualLayout({children}: Readonly<{children: React.ReactNode;}>) 
{
  
  const session = await getServerSession(authOptions)

  const ruta = 'proyectoUser'
  const url = session?.user?.id
  const res = await getDataLista({ruta, url})

  

  
  return  <div className='w-full h-[97%]  '>
    <div className="w-[75%]">
      <BadgeProyectos
      res={res}
      
      />
    </div>
    <div className="w-full h-full mt-3">
      {children}
    </div>
</div>
}