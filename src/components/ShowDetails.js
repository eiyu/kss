import React from 'react'
import PropTypes from 'prop-types'
import TaskDetails from './TaskDetails'
import {TaskDetailsContainer} from './styled/TaskDetailsContainer'

export const ShowDetails = ({card,status,show, id, onToggle}) => (
  <div>
    <TaskDetailsContainer show={show}>
      <TaskDetails onToggle={onToggle} task={card} status={status} id={id}/>
    </TaskDetailsContainer>
  </div>
)

ShowDetails.propTypes = {
  task: PropTypes.object
}
