import Image from 'next/image'
import React from 'react'
import Button from '../shared/Button'

const Sale = () => {
  return (
    <div className='sale'>
        <Image src="/sale.png" alt='' height={600} width={700} className='saleimg' />
        <div className='saletxt'>
            <h2>PAYDAY <br />SALE NOW </h2>
            <p>Spend minimal $100 get 30% off <br />voucher code for your next purchase</p>
            <h4>1 June - 10 June 2021</h4>
             <h5>*Terms & Conditions apply </h5>
            <Button label='SHOP NOW'/>
        </div>
    </div>
  )
}

export default Sale