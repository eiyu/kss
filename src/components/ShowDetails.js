import React from 'react'
import PropTypes from 'prop-types'
import TaskDetails from './TaskDetails'
import {TaskDetailsContainer} from './styled/TaskDetailsContainer'

export const ShowDetails = ({card,status,show}) => (
  <div>
    <TaskDetailsContainer show={show}>
      <TaskDetails task={card} status={status}/>
    </TaskDetailsContainer>
  </div>
)

ShowDetails.propTypes = {
  task: PropTypes.object
}
