import React from 'react'
import Logo from '../shared/Logo'
import Link from 'next/link'
import Button from '../shared/Button'

const Header = () => {
  return (
    <div className='header'>
        <div><Logo /></div>
        <div className='links'>
            <Link className='link' href="/"> HOME</Link>
            <Link className='link' href="/about">ABOUT</Link>
            <Link className='link' href="/contact">CONTACT</Link>
            <Button label='SIGN UP' />
        </div>
    </div>
  )
}

export default Header