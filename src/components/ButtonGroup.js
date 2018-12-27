import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Button} from './styled/Button'
import {connect} from 'react-redux'
import {removeCard, updateCard} from '../actions/cardActions'
// position center top
class ButtonGroup extends Component {
  render() {
    const id = this.props.id
    const status = this.props.status
    const card = this.props.card
    if (this.props.status === "Back-Log") {
      return (
        <div className="button-group">
          <Button
            onClick={() => this.props.onRemoveCard(id,status)}
          color="red">
          Delete
          </Button> {/*first step button position left*/}

          <Button
            onClick={() => this.props.onUpdateCard(id, card,'To-Do','Back-Log')}
           color="blue">
          To-Do
          </Button>
        </div>
      )
    }
    if (this.props.status === "To-Do") {
      return (
        <div className="button-group">
          <Button
            onClick={() => this.props.onUpdateCard(id, card,'Back-Log','To-Do')}
          color="red">
            Back-Log
          </Button> {/*first step button position left*/}
          <Button
            onClick={() => this.props.onRemoveCard(id,status)}
          color="red">
          Delete
          </Button>
          <Button
            onClick={() => this.props.onUpdateCard(id, card,'Doing','To-Do')}
          color="orange">
            Doing
          </Button>
        </div>
      )
    }
    if (this.props.status === "Doing") {
      return (
        <div className="button-group">
          <Button
            onClick={() => this.props.onUpdateCard(id, card,'To-Do','Doing')}
          color="blue">
            To-Do
          </Button> {/*first step button position left*/}
          <Button
            onClick={() => this.props.onRemoveCard(id,status)}
          color="red">
          Delete
          </Button>
          <Button
            onClick={() => this.props.onUpdateCard(id, card,'Done','Doing')}
          color="green">
            Done
          </Button>
        </div>
      )
    }
    if (this.props.status === "Done") {
      return (
        <div className="button-group">
          <Button
            onClick={() => this.props.onUpdateCard(id, card,'Doing','Done')}
          color="orange">
            Doing
          </Button> {/*first step button position left*/}
          <Button onClick={() => this.props.onRemoveCard(this.props.id,this.props.status)} color="red">Delete</Button>
        </div>
      )
    }
    else {
      return null
    }
  }

}

ButtonGroup.propTypes = {
  status: PropTypes.string,
  // could be number
  id: PropTypes.string
}

// dispatch action to higher order reducer
const mapDispatchToProps = (dispatch) => ({
  onRemoveCard: (id,name) => removeCard(dispatch,id,name),
  onUpdateCard: (id, card, to, name) => updateCard(dispatch,id, card, to, name),
})

export default connect(null,mapDispatchToProps)(ButtonGroup)
