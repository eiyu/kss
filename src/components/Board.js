import React from 'react'
import Cards from './Cards.js'
export const Board = (props) => (
  <div className="board-container">
    <div className="board">
      <h4>{props.boardName}</h4> <hr/>
      <Cards items={props.cards} />
    </div>
  </div>
)
