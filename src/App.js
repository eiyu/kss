import './App.css';
import React , {Component} from 'react'
import {Header, Board, Footer} from './components/mainApp'
class App extends Component {
  // Todos:
  // create static design
  // state management
  // prop types
  // basic styling
  render() {
    return (
      <div className="app-container">
        <Header className="header" />
        <Board className="board" />
        <Footer className="footer" />
      </div>
    )
  }
}

export default App;
