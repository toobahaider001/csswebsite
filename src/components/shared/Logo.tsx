import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='logo'>
       <Image src="/logo1.png" alt='' height={29} width={31.26} className='logo1' />
       <Image src="/logo2.png" alt='' height={29} width={180} className='logo2' />
    </div>
  )
}

export default Logo