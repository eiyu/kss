import React, {Component} from 'react'
import {connect} from 'react-redux'
import {showTaskDetails} from '../actions/togglesActions'
// todo create updating functionalities
// const Card = ({item,onShowDetails}) => {
//   console.log(onShowDetails);
//   return (
//     <div className="card">
//       <h4>{item.title}</h4>
//       <p>Point: {item.point}</p>
//       <p>Assign To: {item.assignTo}</p>
//       {/*add styled component*/}
//       <button onClick={onShowDetails}>Show Detail</button>
//     </div>
// )}

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
        <button onClick={this.props.onShowDetails}>Show Detail</button>
      </div>
    )
  }
}

const stateToProps = (state,props) => ({
  showTaskDetails: state.toggles
})
const mapDispatchToProps = dispatch => ({
  onShowDetails: () => showTaskDetails()
})
export default connect(stateToProps, mapDispatchToProps)(Card)
