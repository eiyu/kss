// import './App.css';
import PropTypes from 'prop-types'
import React , {Component} from 'react'
import {Boards} from './components/Boards'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import TaskForm from './components/TaskForm'
import {connect} from 'react-redux'
import {Button} from './components/styled/Button'
import {showForm} from './actions/togglesActions'
import {ShowDetails} from './components/ShowDetails'
import {TaskFormContainer} from './components/styled/TaskFormContainer'
class App extends Component {

  // Bug:
  // some PropTypes.object become an array after deletion -> if using real db
  // the bug will be gone or rewrite logic in the reducer

  // Todos:
  // make api calls
  // more styling

  render() {
    return (
      <div className="app-container">
        <Header className="header" />
        <Button color={'silver'} onClick={this.props.onShowForm}> Add Task </Button>
        <Boards className="board" cards={this.props} />
          <TaskFormContainer show={this.props.toggles.showForm}>
            <TaskForm />
          </TaskFormContainer>
          <ShowDetails {...this.props.backlogTask}/>
          <ShowDetails {...this.props.todoTask}/>
          <ShowDetails {...this.props.doingTask}/>
          <ShowDetails {...this.props.doneTask}/>
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
