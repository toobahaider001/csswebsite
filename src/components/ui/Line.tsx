import Image from 'next/image'
import React from 'react'

const Line = () => {
  return (
    <div className='line'>
        <Image src="/logos1.png" alt='' height={52.67} width={150} className='logos'  />
        <Image src="/logos2.png" alt='' height={52.67} width={150} className='logos'  />
        <Image src="/logos3.png" alt='' height={52.67} width={150} className='logos'  />
        <Image src="/logos4.png" alt='' height={52.67} width={150} className='logos'  />
        <Image src="/logos5.png" alt='' height={52.67} width={150} className='logos'  />
    </div>
  )
}

export default Line