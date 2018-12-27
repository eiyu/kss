import React from 'react'
import PropTypes from 'prop-types'
import Cards from './Cards.js'
import {BoardTitle} from './styled/BoardTitle'
export const Board = (props) =>  {
  const len = Object.keys(props.cards).length
  return (
      <BoardTitle color={props.color}>
        <div className="container">
          <div className="title">
            <h4>{props.boardName}<span>{len} {((l) => l > 1 ? "cards" : "card" )(len)}</span></h4>
            <hr/>
            <div> maybe sorting feature here if data gets bigger </div>
          </div>
          <Cards status={props.boardName} items={props.cards} />
        </div>
      </BoardTitle>
)}
Board.propTypes = {
  boardName: PropTypes.string,
  cards: PropTypes.object,
  color: PropTypes.string
}
