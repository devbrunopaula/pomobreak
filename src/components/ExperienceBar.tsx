import React from 'react'
import '../styles/experienceBar.scss'

const ExperienceBar = () => {
  return (
    <header className='expericence-bar--top'>
      <span>0 xp</span>
      <div className='level-line'>
        <div className='level-progress' style={{width: '50%'}}></div>
        <span className='level-progress--label' style={{left: '50%'}}>
          300 XP
        </span>
      </div>
      <span>600 xp</span>
    </header>
  )
}

export default ExperienceBar
