import FiltrosLista from "./[Componentes]/FiltrosLista";

 
export default  function PresentacionLayout({children,}: Readonly<{children: React.ReactNode;}>) 
{
    return<>
    <div className='w-full h-full  text-(length:--tamañoLetraChica)'>
        <FiltrosLista />
        <div className="mt-6 w-full h-[93%]">
          {children}
        </div>
    </div>
  </>
}