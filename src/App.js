import PropTypes from 'prop-types'
import React , {Component} from 'react'
import {Boards} from './components/Boards'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {connect} from 'react-redux'
import {Button} from './components/styled/Button'
import {showForm} from './actions/togglesActions'
import {showTaskDetails} from './actions/togglesActions'
import {ShowDetails} from './components/ShowDetails'
import {ShowCreateForm} from './components/ShowCreateForm'
import Weather from './components/Weather'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
class App extends Component {

  // TODO:
  // create board action
  // where user can create custom board.
  // user can display single borad

  render() {
    return (
      <div className="app-container">
        <Header className="header" />
          <Grid>
            <Row>
              <Col sm={2} md={2} lg={6}><Weather data={this.props.data}/></Col>
              <Col sm={2} md={2} lg={6}><Button add color={'silver'} onClick={this.props.onShowForm}> Add Task </Button></Col>
            </Row>
          </Grid>
          <Boards className="board" cards={this.props} />
          <ShowCreateForm onToggle={this.props.onShowForm} show={this.props.toggles.showForm} />
          <ShowDetails onToggle={this.props.onShowDetails} {...this.props.backlogTask}/>
          <ShowDetails onToggle={this.props.onShowDetails} {...this.props.todoTask}/>
          <ShowDetails onToggle={this.props.onShowDetails} {...this.props.doingTask}/>
          <ShowDetails onToggle={this.props.onShowDetails} {...this.props.doneTask}/>
        <Footer className="footer" />
      </div>
    )
  }
}

App.propTypes = {
  cards: PropTypes.object
}

//
const stateToProps = (state,props) => {
  console.log('current state',state);
  return {
    backlog: state['Back-Log'],
    todo: state['To-Do'],
    doing: state['Doing'],
    done: state['Done'],
    custom: 'foo',
    backlogTask: state.backlogTask,
    todoTask: state.todoTask,
    doingTask: state.doingTask,
    doneTask: state.doneTask,
    toggles: state.toggles
  }
}

const dispatchToProps = (dispatch) => {
  return {
    onShowForm: () => dispatch(showForm()),
    onShowDetails: (card, name) => dispatch(showTaskDetails(card, name))
  }
}

export default connect(stateToProps,dispatchToProps)(App);
