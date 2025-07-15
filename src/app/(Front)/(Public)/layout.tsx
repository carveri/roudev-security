import NavbarHome from "../React/Components/NavbarHome";


export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <div className='w-[100%] h-[100%] '>
      <section className='w-full h-[35px] bg-white grid justify-items-center'>
        <header className='w-[85%] fixed  bg-white border-b border-gray-200 text-(length:--tamañoLetraChica) z-50'>
         <NavbarHome />
        </header>
      </section>
     <section className='w-full h-[850px]  grid justify-items-center text-[12px]'>
        <main className='w-[70%] bg-colorFondo'>
          {children}
        </main>
      </section>
    </div>
  );
}