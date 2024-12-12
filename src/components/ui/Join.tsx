import React from 'react'
import Button from '../shared/Button'

const Join = () => {
  return (
    <div className='join'>
        <h1>JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO</h1>
        <p>Type your email down below and be young wild generation</p>
        <div className='in'>
        <input type="text" placeholder='Add your email here' className='input' />
        <Button label='SEND' />
        </div>
    </div>
  )
}

export default Join