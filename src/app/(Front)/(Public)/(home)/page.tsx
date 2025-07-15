import IngresarYGratis from "./Components/IngresarYGratis";
import { dataPerfil1 } from "./utils/dataPerfil1";
import BadgeHome1 from "./Components/BadgeHome1";
import { dataPlanes } from "../../React/Utils/dataPlanes";
import { dataComentarios } from "./utils/dataComentarios";
import BadgeComentarios from "./Components/BadgeComentarios";
import { dataFooter } from "./utils/dataFooter";
import Link from "next/link";



const page = async() => {

  return (
    <>
      <div className='w-[95%] h-screen flex px-12'>
      <section className='w-[50%] h-auto  grid place-items-center'>
        <div className='w-5/6 h-3/5   mt-4'>
          <article className='w-full h-12 text-xl flex'>
            <header className='pr-2'>
              <img
                  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/logoPrincipal.png'
                  width={30}
                  height={30}
                  alt="Picture of the author"
                  
              />
              
            </header> 
            <p className="text-colorTextoNavbar font-semibold">
              Roudev
            </p>
          </article>
          <article className='text-xl text-gray-700 pl-2 w-full h-24 py-4 mb-2 ' >
            El ERP de gestion de proyectos, tareas y seguimiento de Units Economics para StartUps.
          </article>
          <article className='text-lg w-full h-2/6 pt-4 pl-2 text-gray-600'>
            Software de gestion de proyectos y tareas, con metodologias agiles, para StartUps que necesitan orden en su gestion interna del dia a dia, pago por uso y recomendacion de tareas  
          </article>
          <IngresarYGratis />
        </div>
      </section>
      <section className='w-[50%] h-full  grid place-items-center '>
            <div className="w-[70%] h-[55%] mt-1 ">
                <img
                    src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/logoPrincipal2.png'
                    width={500}
                    height={390}
                    alt="Picture of the author"
                    
                />
            </div>
      </section>
    </div>


    <div className='w-[95%] h-screen  px-12  grid items-center justify-center '>
      <div className="w-full h-[75%]">
        <header className="w-full h-[18%] text-center ">
          <h1 className="text-xl text-gray-800 font-bold mb-3">
            ¿En qué nos Especializamos?
          </h1>
          <h2 className=" text-gray-700 w-3/4 mx-auto text-[15px]">
            Si tu empresa es del sector tradicional, nosotros no somos la mejor opción para ti, pero si tu empresa es del sector de Software, StartUp o Tecnología, entonces Decosof es la mejor opción para ti.
          </h2>
        </header>
        <main className="h-[75%]  grid grid-cols-4 grid-rows-2 gap-4 px-4">
          {dataPerfil1.map((el)=>{
            return <div key={el.id} className=" ">
              <BadgeHome1
              el={el}
            />
            </div>
          })}
        </main>
      </div>
    </div>




    <div className='w-[95%] h-screen grid items-center justify-center px-20 '>
      <div className="w-full h-[85%] flex ">
        <header className="w-[20%] h-full text-center py-6">
          <h1 className="text-xl text-gray-800 font-bold mb-3">
            Dashboard para gestionar los Units Economics de tu empresa
          </h1>
          <h2 className=" text-gray-700 w-3/4 mx-auto text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nam nesciunt quibusdam rerum dolorem blanditiis inventore libero possimus voluptatum veniam in voluptatem provident nulla cumque, alias nemo! Incidunt, accusantium sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nam nesciunt quibusdam rerum dolorem blanditiis inventore libero possimus voluptatum veniam in voluptatem provident nulla cumque, alias nemo! Incidunt, accusantium sunt?
          </h2>
          <button className="bg-blue-500 cursor-pointer text-white w-full h-12 rounded mt-4 font-bold hover:bg-blue-700 transition duration-300">
            Prueba Gratis por 30 dias
          </button>
        </header>
        <div className=" w-[70%] relative h-[45%]">
          <img src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/check.png" alt="Imagen de fondo" className="ml-32 absolute inset-0 w-full h-full object-cover z-20"/>
          <img src="https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/plan.png" alt="Imagen superpuesta" className="absolute mt-80  inset-0 w-full h-full object-cover z-10"/>
        </div>
      </div>
    </div>



      <div className='w-[95%] h-screen  px-12  grid items-center justify-center'>
      <div className="w-full h-[85%] ">
        <header className="w-full h-[18%] text-center ">
          <h1 className="text-xl text-gray-800 font-bold mb-3">
            Video del Dashboard
          </h1>
          <h2 className=" text-gray-700 w-3/4 mx-auto text-[15px]">
            Si tu empresa es del sector tradicional, nosotros no somos la mejor opción para ti, pero si tu empresa es del sector de Software, StartUp o Tecnología, entonces Decosof es la mejor opción para ti.
          </h2>
        </header>
        <main className="h-[82%] grid place-items-center px-4">
          <section className="ml-9 w-full h-full border border-gray-500">video</section>
        </main>
      </div>
    </div>




    <div className='w-[95%] h-screen  px-12  grid items-center justify-center'>
      <div className="w-full h-[85%]">
        <header className="w-full h-[18%] text-center ">
          <h1 className="text-xl text-gray-800 font-bold mb-3">
            Precios de los planes 
          </h1>
          <h2 className=" text-gray-700 w-3/4 mx-auto text-[15px]">
            Si tu empresa es del sector tradicional, nosotros no somos la mejor opción para ti, pero si tu empresa es del sector de Software, StartUp o Tecnología, entonces Decosof es la mejor opción para ti.
          </h2>
        </header>
        <div className='grid justify-items-center w-full h-[800px] px-4'>
                <section className='w-[85%] h-[85%]  grid grid-cols-3 place-items-center gap-x-11 mt-6 '>
                {dataPlanes.map((el)=>{
                  return <article key={el.id} className='w-full h-full border border-gray-200 py-8'>
                    <header className='w-full h-20 text-xl grid place-content-center'>
                      {el.nombre}
                    </header>
                    <main className='w-full h-2/6 px-10'>
                      {el.descripcion}
                    </main>
                    <section className='w-full h-1/6 text-xl grid place-content-center text-colorTexto '>
                      USD {el.valor}
                    </section>
                    <section className='w-full h-1/6 text-base grid place-content-center text-colorTexto '>
                      {el.tipoPago}
                    </section>
                    <section className='w-full h-1/6 grid place-items-center'>
                      <button className='bg-blue-500 w-60 h-14 rounded text-white font-bold'>
                        Seleccionar
                      </button>
                    </section>
                  </article>
                })}
                  
                </section>
              </div>
      </div>
    </div>


    <div className='w-[95%] h-screen  px-12  grid items-center justify-center '>
      <div className="w-full h-[75%]">
        <header className="w-full h-[18%] text-center ">
          <h1 className="text-xl text-gray-800 font-bold mb-3">
            Comentarios de nuestros clientes
          </h1>
          <h2 className=" text-gray-700 w-3/4 mx-auto text-[15px]">
            ¿Que opinan de nosotros?
          </h2>
        </header>
        <main className="h-[75%]  grid grid-cols-4 gap-y-4 gap-x-4 px-4">
          {dataComentarios.map((el)=>{
            return <div key={el.id} className="h-[500px] ">
              <BadgeComentarios
              el={el}
            />
            </div>
          })}
        </main>
      </div>
    </div>



    <footer className='w-[95%] h-screen  px-12  flex items-center justify-center bg-gray-50'>
      <div className="w-full h-[45%] grid  grid-rows-7 gap-4">
        {dataFooter.map((el)=>{
          return <Link href={el.link} key={el.id} className="w-full h-12 text-center text-gray-700 hover:text-blue-600 cursor-pointer">
            {el.nombre}
          </Link>
        })}
      </div>
      <div className="w-full h-[45%] grid  grid-rows-7 gap-4">
        {dataFooter.map((el)=>{
          return <Link href={el.link} key={el.id} className="w-full h-12 text-center text-gray-700 hover:text-blue-600 cursor-pointer">
            {el.nombre}
          </Link>
        })}
      </div>
      <div className="w-full h-[45%] grid  grid-rows-7 gap-4">
        {dataFooter.map((el)=>{
          return <Link href={el.link} key={el.id} className="w-full h-12 text-center text-gray-700 hover:text-blue-600 cursor-pointer">
            {el.nombre}
          </Link>
        })}
      </div>
      <div className="w-full h-[45%] grid  grid-rows-7 gap-4">
        {dataFooter.map((el)=>{
          return <Link href={el.link} key={el.id} className="w-full h-12 text-center text-gray-700 hover:text-blue-600 cursor-pointer">
            {el.nombre}
          </Link>
        })}
      </div>
    </footer>
    </>
  )
}

export default page