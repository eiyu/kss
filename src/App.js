import PropTypes from 'prop-types'
import React , {Component} from 'react'
import {Boards} from './components/Boards'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {connect} from 'react-redux'
import {Button} from './components/styled/Button'
import {showForm} from './actions/togglesActions'
import {ShowDetails} from './components/ShowDetails'
import {ShowCreateForm} from './components/ShowCreateForm'
class App extends Component {

  // Todos:
  // make api calls
  // more styling

  render() {
    return (
      <div className="app-container">
        <Header className="header" />
        <Button color={'silver'} onClick={this.props.onShowForm}> Add Task </Button>
        <Boards className="board" cards={this.props} />
          <ShowCreateForm onToggle={this.props.onShowForm} show={this.props.toggles.showForm} />
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
