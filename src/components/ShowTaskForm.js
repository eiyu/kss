import PropTypes from 'prop-types'
import React from 'react'
import {FormContainer} from './styled/TaskFormContainer'
import TaskForm from './TaskForm'
export const ShowTaskForm = ({show, onToggle}) => (
  <FormContainer show={show}>
    <TaskForm onToggle={onToggle} />
  </FormContainer>
)

ShowTaskForm.propTypes = {
  show: PropTypes.bool
}
