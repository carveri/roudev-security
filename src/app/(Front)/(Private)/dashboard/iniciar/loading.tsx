import React from 'react'
import cargando from "../../../React/Assets/Icons/iconoLoading3.png";
import Image from 'next/image';

const loading = () => {
  return (
    <div className='w-full h-full  grid place-content-center'>
      <img src='https://roudev-s3-assets.s3.us-east-1.amazonaws.com/AssetsRoudev/Icons/iconoLoading3.png' width={100} height={100} alt='loading...' />
    </div>
  )
}

export default loading