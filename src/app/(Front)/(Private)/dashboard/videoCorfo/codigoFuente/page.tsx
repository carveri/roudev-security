import Link from 'next/link'

const page = () => {
  return (
    <div>
      <header className='h-10'>
        Codigo fuente de Roudev.com en GitHub - Eric Carvajal
      </header>
      <div className='text-blue-500 h-10 cursor-pointer hover:text-blue-600 hover:underline'>
        <Link className='py-2' href={'https://github.com/carveri/Roudev'} target='_blank'>Link Codigo fuente de proyecto Roudev</Link>
      </div>
    </div>
  )
}

export default page