import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button} from './styled/Button'
import {connect} from 'react-redux'
import {createCard} from '../actions/cardActions'
import {showForm} from '../actions/togglesActions'

class TaskForm extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const {title, description, assignTo, point} = this.refs
    // using date.now for indexing, it just for mimic real indexing
    this.props.onCreateTask({[Date.now()]:{
      title: title.value,
      description: description.value,
      assignTo: assignTo.value,
      point: point.value,
    }},"Back-Log")
      title.value = ""
      description.value = ""
      assignTo.value = ""
      point.value = ""

  }

  render() {
    return (
      <div>
        <Button
        onClick={this.props.onShowForm}
        color="red">
        x
        </Button>
      <form>
        <legend>Title</legend>
        <input ref="title" type='text' />
        <legend>Description</legend>
        <input ref="description" type='text' />
        <legend>Assign to</legend>
        <input ref="assignTo" type='text' />
        <legend>Point</legend>
        <input ref="point" type='text' /> <br/>
        <Button
        onClick={this.handleSubmit}
        >
        Create
        </Button>
      </form>
      </div>
    )
  }
}

TaskForm.propTypes = {
  onCreateTask: PropTypes.func,
  onShowForm: PropTypes.func
}
const mapDispatchToProps = (dispatch) => ({
  onCreateTask: (task, name) => dispatch(createCard(task,name)),
  onShowForm: () => dispatch(showForm())
})
export default connect(null, mapDispatchToProps)(TaskForm)
