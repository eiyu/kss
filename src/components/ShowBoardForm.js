import PropTypes from 'prop-types'
import React from 'react'
import {FormContainer} from './styled/TaskFormContainer'
import BoardForm from './BoardForm'
export const ShowBoardForm = ({show, onToggle}) => (
  <FormContainer show={show}>
    <BoardForm onToggle={onToggle} />
  </FormContainer>
)

ShowBoardForm.propTypes = {
  show: PropTypes.bool
}
