import Image from 'next/image'
import React from 'react'

const Download = () => {
  return (
    <div className='download'>
        <div className='leftdownload'>
            <h2>DOWNLOAD APP & <br />GET THE VOUCHER!</h2>
            <p>Get 30% off for first transaction using <br />Randovision mobile app for now.</p>
            <div className='down'>
                <Image src="/app.png" alt='' height={40} width={120}/>
                <Image src="/google.png" alt='' height={40} width={120}/>
            </div>
        </div>
        <Image src="/mobile.png" alt='' height={600} width={327.24} />
    </div>
  )
}

export default Download