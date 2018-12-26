// import './App.css';
import PropTypes from 'prop-types'
import React , {Component} from 'react'
import {Boards} from './components/Boards'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import TaskForm from './components/TaskForm'
import TaskDetails from './components/TaskDetails'
import {connect} from 'react-redux'
import {Button} from './components/styled/Button'
import {showForm} from './actions/togglesActions'
import {TaskFormContainer} from './components/styled/TaskFormContainer'
import {TaskDetailsContainer} from './components/styled/TaskDetailsContainer'
class App extends Component {
  // Todos:

  // styling task details and task form

  render() {
    return (
      <div className="app-container">
        <TaskFormContainer show={this.props.toggles.showForm}>
          <TaskForm />
        </TaskFormContainer>
        <TaskDetailsContainer>
          <TaskDetails />
        </TaskDetailsContainer>
        <Header className="header" />
        <Button color={'silver'} onClick={this.props.onShowForm}> Add Task </Button>
        <Boards className="board" cards={this.props} />
        <Footer className="footer" />
      </div>
    )
  }
}

App.propTypes = {
  cards: PropTypes.object
}

const stateToProps = (state,props) => {
  return {
    backlog: state.backlog,
    todo: state.todo,
    doing: state.doing,
    done: state.done,
    backlogTask: state.backlogTask,
    todoTask: state.todoTask,
    doingTask: state.doingTask,
    doneTask: state.doneTask,
    toggles: state.toggles
  }
}

const dispatchToProps = (dispatch) => {
  return {
    onShowForm: () => dispatch(showForm())
  }
}

export default connect(stateToProps,dispatchToProps)(App);
