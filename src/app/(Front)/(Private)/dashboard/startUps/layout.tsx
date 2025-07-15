'use client'


// import { redirect, useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
//import { usePathname } from 'next/navigation'

 
export default  function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  
  //const router = useRouter()

  //const [activarFiltroStartUps, setActivarFiltroStartUps] = useState(false)
  //redirect('/dashboard/startUps/contactosStartUps')
  


  return  <main className="w-full h-[80%] mt-10 text-tamañoLetraChica">
     {children}
    </main>
  
    
      
        
        
    
  

}