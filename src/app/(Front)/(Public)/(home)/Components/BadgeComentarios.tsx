
export interface IDataComentarios {
        id: string
        titulo: string
        comentario: string
        estrellas: string
        nombre: string
        fecha: string
}

// padre: Front/Public/home/page
const BadgeComentarios = ({id, titulo, comentario, estrellas, fecha, nombre}:IDataComentarios) => {

  return (
    <div className="w-full h-full border border-gray-200 rounded-lg p-4 grid grid-rows-5 py-10">
        <section className='text-lg'> 
            {titulo}
        </section>
        <section className='text-sm'>
            {comentario}
        </section>
        <section className='mt-9'>
            <img className='w-5 h-5' src={estrellas} alt="as" />
        </section>
        <section className='text-sm mt-9'>
            {nombre}
        </section>
        <section className='text-sm text-gray-500 mt-9'>
            {fecha}
        </section>
    </div>
  )
}

export default BadgeComentarios