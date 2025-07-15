
import { dataRegistro } from "@/app/(Front)/React/Utils/dataRegistro"
import Link from "next/link"
import FormRegistro from "./Components/FormRegistro"

const page = async() => {

  return (
    <div className='w-screen h-screen bg-white grid place-items-center'>
     <section className='w-[60%] h-[89%] bg-white grid grid-cols-2 gap-4'>
        <article className='pt-14 px-12 '>
            <article className='w-full h-12 text-xl flex pb-20  place-content-center  '>
              <header className='pr-2'>
                <img
                    src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/logoPrincipal.png'
                    width={30}
                    height={30}
                    alt="Picture of the author"
                />
              </header> 
              <p className='text-lg '>
                Roudev
              </p>
            </article>
          <ul className='text-xl bg-white h-[65%]'>
            {dataRegistro.map((el)=>{
              return <li key={el.id} className='flex pb-3 text-(length:--tamañoLetraChica)'>
                <header className='w-[10%]  grid justify-items-center pt-1'>
                  <img
                      src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/mas.png"
                      width={15}
                      height={15}
                      alt="Picture of the author"
                  />
                </header>
                <main className='w-[90%] text-(length:--tamañoLetra)'>
                  <header className='font-bold text-colorFormularioLogin pb-1 text-base'>
                    {el.titulo}
                  </header>
                    <article>
                      {el.descripcion}
                    </article>
                </main>
              </li>
            })}
          </ul>
          <div className=' h-[16%] grid place-content-end '>
            <Link className=' cursor-pointer font-semibold pl-2 text-white grid place-content-center rounded  bg-blue-500 w-36 h-10 text-(length:--tamañoLetraChica)' href={'/api/auth/login'}>Volver al login</Link>
          </div>
        </article>
        <article className='grid justify-items-center'>
          <FormRegistro/>
        </article>
      </section>
    </div>
  )
}

export default page 