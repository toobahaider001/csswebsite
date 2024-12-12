import React from 'react'
import Button from '../shared/Button'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='lefthero'>
            <h2>LET'S <br />EXPLORE <br className='unique' />UNIQUE <br />CLOTHES</h2>
            <p>Live for influental and Innovative fashion!</p>
            <Button label='Shop Now' />
        </div>
        <div className='righthero'>
            <Image src="/hero.png" alt='' className='heroimg' height={700} width={800} />
        </div>
    </div>
  )
}

export default Hero