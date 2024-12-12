import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='about'>
        <div className='leftabout'>
        <h1>ABOUT</h1>
        <p>Fashion Suggest is your go-to platform for personalized style inspiration and outfit ideas. We help you discover trends, curate looks, and express your unique fashion sense effortlessly. Whether you’re dressing up for an event or refreshing your wardrobe, we’re here to guide you. Style made simple, just for you!</p>
        </div>
        <div className='rightabout'>
            <Image src="/about.png" alt='' height={300} width={500} className='aboutimg'/>
        </div>
    </div>
  )
}

export default About