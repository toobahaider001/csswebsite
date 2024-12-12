import React from 'react'
import ArrivalCard from '../shared/ArrivalCard'

const Arrivals = () => {
  return (
    <div className='arrivals'>
        <h2>NEW ARRIVALS</h2>
        <div className='arrive'>
            <ArrivalCard
            src="/card1.png"
            head='Hoodie $ Sweetshirts'
             />
             <ArrivalCard
            src="/card2.png"
            head='Hoodie $ Sweetshirts'
             />
             <ArrivalCard
            src="/card3.png"
            head='Hoodie $ Sweetshirts'
             />
        </div>
    </div>
  )
}

export default Arrivals