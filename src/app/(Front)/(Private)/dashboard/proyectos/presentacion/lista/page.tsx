import { getServerSession } from 'next-auth'
import GraperLista from './[Components]/GraperLista'
import { authOptions } from '../../../../../../(Back)/api/auth/[...nextauth]/route'

const page = async() => {

  // TRAER SESSION DEL USUARIO
      const session = await getServerSession(authOptions)

  return (
    <>
      <GraperLista
        session = {session}
      />
    </>
  )
}

export default page