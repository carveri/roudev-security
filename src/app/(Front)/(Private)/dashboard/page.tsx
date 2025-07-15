
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from "./../../../(Back)/api/auth/[...nextauth]/route";

const page = async() => {

  const session = await getServerSession(authOptions)

  if(!session){
      redirect('/api/auth/signin')
  }

  redirect('/dashboard/home')

  return (
    <div className='w-full h-full bg-red-400'>
      sssssssssss
    </div>
  )
}

export default page