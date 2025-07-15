import { dataActividadesRecientes } from "./utils/dataActividadesRecientes";

const ModalRecientes = ({setActivar}) => {
  return (
    <div className='w-[15%] h-[40%] z-50 fixed top-[100px] shadow-xl ml-16 border border-gray-200 bg-white p-3 text-(length:--tamañoLetraChica)'>
        <section className='w-full h-[30%] '>
            <header className='w-full h-[30%] flex px-3'>
                <div className='w-[85%] grid items-center '>
                    Actividades Recientes
                </div>
                <div onClick={()=>setActivar(false)} className='w-[15%]  h-full grid place-items-center cursor-pointer py-2 px-3 hover:border-b border-blue-500'>
                    <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz3.png' width={10} height={10} alt='as'/>
                </div>
            </header>
            <article className='w-full h-[70%]  flex py-1 '>
                <div className='w-[25%] h-full grid place-items-center'>
                    <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/calendario.png' width={35} height={35} alt='as' />
                </div>
                <div className='w-[75%] h-full  grid  items-center py-3'>
                    Calendario
                </div>
            </article>
        </section>
        <section className='w-full h-[60%] -mt-1'>
            <ul className='flex-col justify-start z-50  max-h-[80%] overflow-auto'>
                {dataActividadesRecientes.map((el)=>{
                    return <button className='w-full h-10 hover:bg-gray-100 border border-gray-50 flex justify-start pl-2 items-center' key={el.id}>
                        {el.nombreTarea}
                    </button>
                })}
            </ul>
        </section>
        <section  className='w-full cursor-pointer h-[12%] border-t border-gray-200 grid items-center pl-2 hover:underline'>
            Ver más
        </section>
    </div>
  )
}

export default ModalRecientes