import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {showTaskDetails} from '../actions/taskActions'
import {Button} from './styled/Button'
import '../cards.css'

class Card extends Component {
  // constructor() {
  //   super()
  // }

  render() {
    return (
      <div className="card">

        <h4>{this.props.item.title}</h4>
        <p>Point: {this.props.item.point}</p>
        <p>Assign To: {this.props.item.assignTo}</p>
        {/*add styled component*/}
        <Button onClick={() => this.props.onShowDetails(this.props.item,this.props.status)}> Show Details </Button>
      </div>
    )
  }
}

Card.propTypes = {
  onShowDetails: PropTypes.func,
  status: PropTypes.string
}

const mapDispatchToProps = dispatch => ({
  onShowDetails: (task, name) => dispatch(showTaskDetails(task, name))
})

export default connect(null, mapDispatchToProps)(Card)
