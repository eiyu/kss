import React from 'react'
import PropTypes from 'prop-types'
import {Button} from './styled/Button'
import {connect} from 'react-redux'
// position center top
const TaskDetails = ({task, status}) => {
  console.log('render');
  return (
  <div>
    <div>Status: {status}</div>
    <div>Title: {task.title}</div>
    <div>Description: {task.description}</div>
    <div>Assign To: {task.assignTo}</div>
    <div>Point: {task.point}</div>
    {/* create separate component with */}
    <div className="button-group">
      <button>Delete</button> {/*first step button position left*/}
      <button>Go to Prev Status</button>
      <button>Go to Next Status</button>
      <button>Delete</button> {/*last step button position right*/}
    </div>
  </div>
)}

TaskDetails.defaultProps = {task:{}}

TaskDetails.propTypes = {
  task: PropTypes.object,
  status: PropTypes.string
}
export default TaskDetails
