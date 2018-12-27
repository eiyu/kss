import React from 'react'
import PropTypes from 'prop-types'
import ButtonGroup from './ButtonGroup'
import {Button} from './styled/Button'
// position center top
const TaskDetails = ({task, status, id, onToggle}) => {
  return (
    <div className="details">

    <div onClick={() => onToggle(task,status)} className="hide-toggle"></div>
      <Button
        className="button-toggle"
        onClick={() => onToggle(task,status)}
      color="red">
      x
      </Button>
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
  status: PropTypes.string,
  onToggle: PropTypes.func
}
export default TaskDetails
