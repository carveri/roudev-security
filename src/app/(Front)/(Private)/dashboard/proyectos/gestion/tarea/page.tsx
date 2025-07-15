import { getServerSession } from "next-auth"
import GraperTarea from "./[Components]/GraperTarea"
import { authOptions } from "../../../../../../(Back)/api/auth/[...nextauth]/route"


const page = async() => {

  const session = await getServerSession(authOptions)

  return(
    <GraperTarea
      session={session}
    />
  )
  
}

export default page


