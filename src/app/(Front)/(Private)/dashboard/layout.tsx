import { getServerSession } from "next-auth";
import PageLayout from "./[Components]/PageLayout";
import { authOptions } from "../../../(Back)/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard",
  description: "Gestiona bien tu startUp",
};


export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  const session = await getServerSession(authOptions)
  
  return <div>
  {session?.user ? 
    <div className="h-[95%] w-full ">
      <PageLayout
      children1={children}
      session={session}
      
      />
    </div>
  
:redirect('/api/auth/login')}
      
 </div>       
}
  


