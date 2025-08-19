
//import IDataComentarios from "../../../../Interfaces/IPublic/IDataComentarios";

// padre: Front/Public/home/page
const BadgeComentarios = ({el}) => {

  return (
    <div className="w-full h-full border border-gray-200 rounded-lg p-4 grid grid-rows-5 py-10">
        <section className='text-lg'> 
            {el?.titulo}
        </section>
        <section className='text-sm'>
            {el?.comentario}
        </section>
        <section className='mt-9'>
            <img className='w-5 h-5' src={el?.estrellas} alt="as" />
        </section>
        <section className='text-sm mt-9'>
            {el?.nombre}
        </section>
        <section className='text-sm text-gray-500 mt-9'>
            {el?.fecha}
        </section>
    </div>
  )
}

export default BadgeComentarios