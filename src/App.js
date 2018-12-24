import './App.css';
import React , {Component} from 'react'
import {Boards} from './components/Boards'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {connect} from 'react-redux'

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
        <Boards className="board" cards={this.props.cards} />
        <Footer className="footer" />
      </div>
    )
  }
}

const stateToProps = (state,props) => {
  console.log(state);
  return {cards: state.cards}
}
export default connect(stateToProps,null)(App);
