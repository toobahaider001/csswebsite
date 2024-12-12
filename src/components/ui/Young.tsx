import React from 'react'
import YoungCard from '../shared/YoungCard'

const Young = () => {
  return (
    <div className='young'>
        <h2>Young's Favourite</h2>
        <div className='youngs'>
            <YoungCard
            src="/young1.png"
            head='Trending on instagram'
             />
              <YoungCard
            src="/young2.png"
            head='Trending on instagram'
             />
        </div>
    </div>
  )
}

export default Young