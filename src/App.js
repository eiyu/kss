// import './App.css';
import PropTypes from 'prop-types'
import React , {Component} from 'react'
import {Boards} from './components/Boards'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {connect} from 'react-redux'

class App extends Component {
  // Todos:

  // add new task component

  // constructor() {
  //   super()
  //   this.state = {
  //     showDetails: false
  //   }
  // }
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

App.propTypes = {
  cards: PropTypes.array
}

const stateToProps = (state,props) => {
  return {
    cards: state.cards
  }
}
export default connect(stateToProps,null)(App);
