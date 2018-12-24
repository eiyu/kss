import React from 'react'
import {Board} from './Board'

import '../board.css'

// helper function
const filterCard = (cards,status) => cards.filter((card) => {
  return card.status === status
})

export const Boards = (props) => (
  <div className="boards">
    <Board className="board" cards={filterCard(props.cards,'backlog')} boardName="Back-Log"/>
    <Board className="board" cards={filterCard(props.cards,'todo')} boardName="To-do"/>
    <Board className="board" cards={filterCard(props.cards,'doing')} boardName="Doing"/>
    <Board className="board" cards={filterCard(props.cards,'done')} boardName="Done"/>
  </div>
)
