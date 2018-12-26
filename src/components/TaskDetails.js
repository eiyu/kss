import React from 'react'
import PropTypes from 'prop-types'
import ButtonGroup from './ButtonGroup'
// position center top
const TaskDetails = ({task, status, id}) => {
  console.log('render');
  return (
  <div>
    <div>Status: {status}</div>
    <div>Title: {task.title}</div>
    <div>Description: {task.description}</div>
    <div>Assign To: {task.assignTo}</div>
    <div>Point: {task.point}</div>
    {/* create separate component with */}
    <ButtonGroup card={task} status={status} id={id}/>
  </div>
)}

TaskDetails.defaultProps = {task:{}}

TaskDetails.propTypes = {
  task: PropTypes.object,
  status: PropTypes.string
}
export default TaskDetails
