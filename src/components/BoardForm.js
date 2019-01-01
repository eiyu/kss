import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button} from './styled/Button'
import {connect} from 'react-redux'
import {createBoard} from '../actions/boardActions'

class BoardForm extends Component {
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
      this.props.onToggle()
  }

  render() {
    return (
      <div>
        <div className="hide-toggle"
        onClick={this.props.onToggle}>
        </div>
        <Button onClick={this.props.onToggle}>x</Button>
      <form>
        <legend>Board Name</legend>
        <input ref="name" type='text' />
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

BoardForm.propTypes = {
  onCreateBoard: PropTypes.func,
  onToggle: PropTypes.func
}
const mapDispatchToProps = (dispatch) => ({
  onCreateBoard: (details, name) => dispatch(createBoard(details, name)),
})
export default connect(null, mapDispatchToProps)(BoardForm)
