import React from 'react'
import PropTypes from 'prop-types'
import {Button} from './styled/Button'
// position center top
export const ButtonGroup = ({status}) => {
  if (status === "Back-Log") {
    return (
      <div className="button-group">
        <Button color="red">Delete</Button> {/*first step button position left*/}
        <Button color="blue">To-Do</Button>
      </div>
    )
  }
  if (status === "To-Do") {
    return (
      <div className="button-group">
        <Button color="red">Back-Log</Button> {/*first step button position left*/}
        <Button color="orange">Doing</Button>
      </div>
    )
  }
  if (status === "Doing") {
    return (
      <div className="button-group">
        <Button color="blue">To-Do</Button> {/*first step button position left*/}
        <Button color="green">Done</Button>
      </div>
    )
  }
  if (status === "Done") {
    return (
      <div className="button-group">
        <Button color="orange">Doing</Button> {/*first step button position left*/}
        <Button color="red">Delete</Button>
      </div>
    )
  }
  else {
    return null
  }
}

ButtonGroup.propTypes = {
  status: PropTypes.string
}
