import React from 'react'
import Card from './Card.js'
export const Board = (props) => (
  <div className="board-container">
    <div className="board">
      <h4>{props.boardName}</h4> <hr/>
      <Card items={props.cards} />
    </div>
  </div>
)
