import React from 'react'
import avatar from '../images/avatar.png'
import arrowUp from '../images/Up.svg'
const Info = () => {
  return (
    <div className='info'>
      <img className='info-avatar' src={avatar} alt='' />
      <div className='info-box'>
        <h2>Bruno Paula</h2>
        <span>
          <img className='info-arrowUp' src={arrowUp} alt='' />
        </span>
        Level 1
      </div>
    </div>
  )
}

export default Info
