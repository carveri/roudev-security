import { dataMisFavoritos } from "./utils/dataMisFavoritos";

const ModalFavoritos = ({setActivar}) => {
  return (
    <div className='w-[15%] h-[40%] z-50 fixed top-[160px] shadow-xl ml-16 border border-gray-200 bg-white p-3 text-(length:--tamañoLetraChica)'>
        <section className='w-full h-[30%] '>
            <header className='w-full h-[30%] flex px-3'>
                <div className='w-[85%] grid items-center '>
                    Mis Favoritos
                </div>
                <div onClick={()=>setActivar(false)} className='w-[15%]  h-full grid place-items-center cursor-pointer py-2 px-3 hover:border-b border-blue-500'>
                    <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/cruz3.png' width={10} height={10} alt='as'/>
                </div>
            </header>
            <article className='w-full h-[60%]  flex py-1 justify-center'>
                <div className='w-[10%] h-full grid place-items-center'>
                    <img  src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoLupa.png' width={11} height={11} alt='as' />
                </div>
                <div className='w-[90%] h-full  grid  items-center py-3'>
                    <input type="text" placeholder="Buscar Mis Favoritos" className="focus:outline-none w-[93%] pl-2 border border-gray-200 h-full rounded"/>
                </div>
            </article>
        </section>
        <section className='w-full h-[60%] -mt-1'>
            <ul className='flex-col justify-start z-50  max-h-[79%] overflow-auto'>
                {dataMisFavoritos.map((el)=>{
                    return <button className='w-full gap-x-2 h-10 border  border-gray-50 flex justify-start pl-2 items-center hover:bg-gray-100' key={el.id}>
                        <img className="flex -mt-1" src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/star.png' width={15} height={15} alt="sd"/>
                        <div>
                            {el.nombreMisFavoritos}
                        </div>
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

export default ModalFavoritos