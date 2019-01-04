import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button} from './styled/Button'
import {connect} from 'react-redux'
import {createContainer} from '../actions/boardContainerActions'

class BoardForm extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const {name} = this.refs
    this.props.onCreateContainer(name.value)
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
  onCreateContainer: (name) => createContainer(dispatch)(name),
})
export default connect(null, mapDispatchToProps)(BoardForm)
