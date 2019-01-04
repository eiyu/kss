import PropTypes from 'prop-types'
import React , {Component} from 'react'
import {Boards} from './components/Boards'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {connect} from 'react-redux'
import {Button} from './components/styled/Button'
import {showForm, showBoard} from './actions/togglesActions'
import {showTaskDetails} from './actions/togglesActions'
import {ShowDetails} from './components/ShowDetails'
import {ShowTaskForm} from './components/ShowTaskForm'
import {ShowBoardForm} from './components/ShowBoardForm'
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
              <Col sm={2} md={2} lg={6}>
                <Button add color={'silver'} onClick={this.props.onShowForm}> Add Task </Button>
                <Button add color={'grey'} onClick={this.props.onShowBoard}> Add Board </Button>
              </Col>
            </Row>
          </Grid>
          <Boards className="board" {...this.props} />
          <ShowTaskForm onToggle={this.props.onShowForm} show={this.props.toggles.showForm} />
          <ShowBoardForm onToggle={this.props.onShowBoard} show={this.props.toggles.showBoard} />

          {/* create dynamic version */}
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
  // adding more complexity since each board props cant be static anymore !!
  const spreadProps = state.containers.reduce((prev,next) => {
    return Object.assign(prev, {[next]: state[next]})
  },{})
  return {
    containers: state.containers,
    ...spreadProps,
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
    onShowBoard: () => dispatch(showBoard()),
    onShowDetails: (card, name) => dispatch(showTaskDetails(card, name))
  }
}

export default connect(stateToProps,dispatchToProps)(App);
