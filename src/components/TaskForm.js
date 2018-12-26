import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button} from './styled/Button'
import {connect} from 'react-redux'
import {createCard} from '../actions/cardActions'
// export const TaskForm = (props) => {
//   return (
//   <div>
//       <legend>Title</legend>
//       <input type='text' />
//       <legend>Description</legend>
//       <input type='text' />
//       <legend>Assign to</legend>
//       <input type='text' />
//       <legend>Point</legend>
//       <input type='number' /> <br/>
//       <Button onClick={() => this.props.onCreateTask(this.props.task)}>Create</Button>
//     </div>
//   )
// }

class TaskForm extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const {title, description, assignTo, point} = this.refs
    this.props.onCreateTask({"idGen":{
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
    )
  }
}

TaskForm.propTypes = {
  onCreateTask: PropTypes.func,
}
const mapDispatchToProps = (dispatch) => ({
  onCreateTask: (task, name) => dispatch(createCard(task,name))
})
export default connect(null, mapDispatchToProps)(TaskForm)
