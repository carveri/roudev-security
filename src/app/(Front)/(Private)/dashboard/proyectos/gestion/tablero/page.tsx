import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../../../(Back)/api/auth/[...nextauth]/route'

import GrapTablero from './[Components]/GrapTablero'


const page = async() => {

  // TRAER SESSION DEL USUARIO
    const session = await getServerSession(authOptions)
    
  return (
    <GrapTablero
      session = {session}
      />
  )
}

export default page