import React from 'react'
import CompetedTasks from './CompetedTasks'
import Info from './Info'

const TaskContent = () => {
  return (
    <div>
      <div className='task-content'>
        <div className='leftBox'>
          <Info />
          <CompetedTasks />
        </div>
        <div className='rightBox'>Right Box</div>
      </div>
    </div>
  )
}

export default TaskContent
