import PropTypes from 'prop-types'
import React from 'react'
import {TaskFormContainer} from './styled/TaskFormContainer'
import TaskForm from './TaskForm'
export const ShowCreateForm = ({show, onToggle}) => (
  <TaskFormContainer show={show}>
    <TaskForm onToggle={onToggle} />
  </TaskFormContainer>
)

ShowCreateForm.propTypes = {
  show: PropTypes.bool
}
