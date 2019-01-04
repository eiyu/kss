import React from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards.js'
import {BoardTitle} from './styled/BoardTitle'
import {dragCard} from '../actions/cardActions'
import {connect} from 'react-redux'


class Board extends React.Component {

  constructor() {
    super()
    this.onDragOver = this.onDragOver.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }

  onDragOver = (e) => {
    // handle missed drag context
    e.preventDefault()
  }

  onDrop = (e, item) => {
    let id = e.dataTransfer.getData("id");
    let status = e.dataTransfer.getData("status");
    let title = e.dataTransfer.getData("title");
    let description = e.dataTransfer.getData("description");
    let point = e.dataTransfer.getData("point");
    let assignTo = e.dataTransfer.getData("assignTo");
    const card = {title,description,point,assignTo}
    this.props.onUpdateCard(id, card, this.props.boardName ,status)
  }

  render() {
    console.log(this.props);
    // return <div> </div>
    const len = Object.keys(this.props.cards).length
    return (
      <BoardTitle
       onDragOver={(e) => this.onDragOver(e)}
       onDrop={(e)=>{ this.onDrop(e, 'complete')}}
      color={this.props.color}>
        <div className="container">
          <div className="title">
            <h4>{this.props.boardName}<span>{len} {((l) => l > 1 ? "cards" : "card" )(len)}</span></h4>
            <hr/>
            <div> maybe sorting feature here if data gets bigger </div>
          </div>
          <Cards status={this.props.boardName} items={this.props.cards} />
        </div>
      </BoardTitle>
  )}
}
// }

Board.propTypes = {
  boardName: PropTypes.string,
  cards: PropTypes.object,
  color: PropTypes.string
}
const mapDispatchToProps = dispatch => ({
  onUpdateCard: (id, card, to, name) => dragCard(dispatch,id, card, to, name)
})

export default connect(null,mapDispatchToProps)(Board)
