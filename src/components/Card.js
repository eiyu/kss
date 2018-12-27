import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {showTaskDetails} from '../actions/taskActions'
import {Button} from './styled/Button'
import '../cards.css'

class Card extends Component {
  constructor() {
    super()
    this.onDragStart = this.onDragStart.bind(this)
  }

  onDragStart(e,id, card, status) {
    e.dataTransfer.setData("id",id)
    e.dataTransfer.setData("status",status)
    for (var prop in card) {
      if (card.hasOwnProperty(prop)) {
        e.dataTransfer.setData(prop, card[prop])
      }
    }
  }

  render() {
    return (
      <div
      draggable
      onDragStart={(e)=> this.onDragStart(e,this.props.id, this.props.item, this.props.status )}
      className="card">

        <h4>{this.props.item.title}</h4>
        <p>Point: {this.props.item.point}</p>
        <p>Assign To: {this.props.item.assignTo}</p>
        {/*add styled component*/}
        <Button
        onClick={
          () => this.props.onShowDetails(this.props.id, this.props.item,this.props.status)
        }>
        Show Details
        </Button>
      </div>
    )
  }
}

Card.propTypes = {
  onShowDetails: PropTypes.func,
  status: PropTypes.string
}

const mapDispatchToProps = dispatch => ({
  onShowDetails: (id,task, name) => dispatch(showTaskDetails(id,task, name))
})

export default connect(null, mapDispatchToProps)(Card)
