import { redirect } from "next/navigation";
import { dataLenguaje } from "./frontend/utils/dataLenguaje";
import BadgeIniciar from "./[Components]/BadgeIniciar";
import { dataEntorno } from "./backend/utils/dataEntorno";
import { dataFrameworkFullStack } from "./frontend/utils/dataFrameworkFullStack";
import { dataLibreriaBack } from "./backend/utils/dataLibreriaBack";
import { dataLibreria } from "./frontend/utils/dataLibreria";
import { dataDiseño } from "./utils/dataDiseño";
import { dataFrameworkCss } from "./utils/dataFrameworkCss";

const page = () => {

  //redirect('/dashboard/iniciar/diseño')

  return (
    <div className='w-[75%] h-full bg-white grid grid-cols-4 gap-x-2 mt-3'>
      <section className={`grid grid-rows-${dataLenguaje.length} border border-gray-100 items-start h-[262px]`}>
        <header className='w-full h-12 grid place-content-center bg-white' >
          Lenguajes Base
        </header>
        {dataDiseño.map((el)=>{
          return <BadgeIniciar
            el={el}
            key={el.id}
          />
        })}
      </section>
      <section className={`grid grid-rows-${dataFrameworkFullStack.length} border border-gray-100 items-start h-[430px]`}>
        <header className='w-full h-12 grid place-content-center'>
          Framework CSS
        </header>
        {dataFrameworkCss.map((el)=>{
          return <BadgeIniciar
            el={el}
            key={el.id}
          />
        })}
      </section>
      <section className={`grid grid-rows-${dataLibreria.length} border border-gray-100 items-start h-[362px]`}>
        <header className='w-full h-12 grid place-content-center'>
          Framework o Libreria 
        </header>
        {dataLibreria.map((el)=>{
          return <BadgeIniciar
            el={el}
            key={el.id}
          />
        })}
      </section>
      <section className={`grid grid-rows-${dataLenguaje.length} border border-gray-100 items-start h-[310px]`}>
        <header className='w-full h-12 grid place-content-center'>
          Herramientas 
        </header>
        f
      </section>
    </div>
  )
}

export default page