import Image from 'next/image'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
interface ArrivalProps{
    src:any
    head:string
}
const ArrivalCard:React.FC<ArrivalProps> = ({
        src,
        head,
}) => {
  return (
    <div className='arrivalcard'>
        <Image src={src} alt='' height={550} width={400} className='arriveimg' />
        <div className='head'>{head}</div>
        <div className="cardflex">
            <div className='para'>Explore Now!</div>
            <IoIosArrowRoundForward  size={30} color='gray'
            />
        </div>
    </div>
  )
}

export default ArrivalCard