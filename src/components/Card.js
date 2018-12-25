import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {showTaskDetails} from '../actions/togglesActions'
import {Button} from './styled/Button'
import '../cards.css'

class Card extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
  }

  render() {
    return (
      <div className="card">
        <h4>{this.props.item.title}</h4>
        <p>Point: {this.props.item.point}</p>
        <p>Assign To: {this.props.item.assignTo}</p>
        {/*add styled component*/}
        <Button> Show Details </Button>
      </div>
    )
  }
}

Card.propTypes = {
  item: PropTypes.object,
  onShowDetails: PropTypes.func
}

// USELESS?
const stateToProps = (state,props) => ({
  showTaskDetails: state.toggles
})

const mapDispatchToProps = dispatch => ({
  onShowDetails: () => showTaskDetails()
})
export default connect(stateToProps, mapDispatchToProps)(Card)
