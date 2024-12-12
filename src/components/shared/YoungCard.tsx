import Image from 'next/image'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'
interface YoungProps{
    src:any
    head:string
}
const YoungCard:React.FC<YoungProps> = ({
        src,
        head,
}) => {
  return (
    <div className='youngcard'>
        <Image src={src} alt='' height={400} width={600}  className='youngimg'/>
        <div className='head'>{head}</div>
        <div className="cardflex">
            <div className='para'>Explore Now!</div>
            <IoIosArrowRoundForward  size={30} color='gray'
            />
        </div>
    </div>
  )
}

export default YoungCard