import React from 'react'
import PropTypes from 'prop-types'
import {Button} from './styled/Button'
export const TaskForm = (props) => (
  <div>
    <legend>Title</legend>
    <input type='text' />
    <legend>Description</legend>
    <input type='text' />
    <legend>Assign to</legend>
    <input type='text' />
    <legend>Point</legend>
    <input type='number' /> <br/>
    <Button>Create</Button>
  </div>
)

TaskForm.propTypes = {

}
