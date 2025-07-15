import Link from 'next/link'

const page = () => {
  return (
    <div>
      <header className='h-10'>
        Video postulacion capital semilla inicia de Corfo - Eric Carvajal Cortes
      </header>
      <div className='text-blue-500 h-10 cursor-pointer hover:text-blue-600 hover:underline'>
        <Link className='py-2' href={'https://streamyard.com/vd75vbu2ds8d'} target='_blank'>Link video Roudev</Link>
      </div>
    </div>
  )
}

export default page