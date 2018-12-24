import React from 'react'
import '../board.css'
export const Header = (props) => (
  <header>Yuliana Kanban Test</header>
)

export const Board = (props) => (
  <div className="board-container">
    {/*Todo: Create Each card functionalities */}
    <div className="board">
      Back-Log
    </div>
    <div className="board">
      To-Do
    </div>
    <div className="board">
      In Progress (Doing)
    </div>
    <div className="board">
      Done
    </div>
  </div>
)

export const Footer = (props) => (
  <footer> Footer </footer>
)
