import React from 'react'
import BackLog from './Status/BackLog'
import Todo from './Status/Todo'
import Doing from './Status/Doing'
import Done from './Status/Done'
import '../board.css'

export const Header = (props) => (
  <header>Yuliana Kanban Test</header>
)

/*Todo: Create Each card functionalities */
export const Board = (props) => (
  <div className="board-container">
    <div className="board">
      <BackLog />
    </div>
    <div className="board">
      <Todo />
    </div>
    <div className="board">
      <Doing />
    </div>
    <div className="board">
      <Done />
    </div>
  </div>
)

export const Footer = (props) => (
  <footer> Footer </footer>
)
