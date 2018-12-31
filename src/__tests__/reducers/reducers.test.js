
import {togglesReducer} from '../../reducers/togglesReducer';
import {cardContext} from '../../reducers/cardReducer';
import {task} from '../../reducers/taskReducer';
import {CREATE_CARD, REMOVE} from '../../actions/cardActions';
import {SHOW_TASK_DETAILS} from '../../actions/taskActions';
import {SHOW_FORM} from '../../actions/togglesActions';

describe('toggle', () => {
  it('control when to show and hiding form', () => {
    const state = {
      showForm: false
    }

    const firstClick = togglesReducer(state,{type: SHOW_FORM})
    const secondClick = togglesReducer(firstClick,{type: SHOW_FORM})
    expect(firstClick).toEqual({showForm: true})
    expect(secondClick).toEqual({showForm: false})

  })
})

// because every board share same logic (higher order reducer) i just need test only one board logic
describe('backlog', () => {

  it('create task', () => {
    const state = {}
    const name = 'Back-Log'
    const action = {
      type: `${CREATE_CARD}_${name}`,
      card: {'id1': {
        title: 'test reducer',
        description: 'test with jest',
        point: '1',
        assignTo: 'foo'
      }}
    }

    const result = cardContext(name,state)(state, action)
    expect(result).toEqual({'id1':{
      title: 'test reducer',
      description: 'test with jest',
      point: '1',
      assignTo: 'foo'
    }})
  })


  it('delete task', () => {
    const state = {'id1': {
      title: 'test reducer',
      description: 'test with jest',
      point: '1',
      assignTo: 'foo'
    }}
    const name = 'backlog'
    const action = {
      type: `${REMOVE}_${name}`,
      id: 'id1'
    }

    const result = cardContext(name,state)(state, action)
    expect(result).toEqual({})
  })

  // update task is actually just combining 2 dispatching action (create and delete)
})


describe('task detail', () => {
  it('will show the card details', () => {
    const state = {
      show: false,
      card : {}
    }
    const status= 'Done'
    const action = {
      type: `${SHOW_TASK_DETAILS}${status}`,
      card: {
        title: 'test reducer',
        description: 'test with jest',
        point: '1',
        assignTo: 'foo'
      },
      id: 'id1'
    }

// using one action to hide and showing task
    const firstClick = task('Done')(state, action)
    const secondClick = task('Done')(firstClick, action)

    expect(firstClick).toEqual({
      show: true,
      card: {
        title: 'test reducer',
        description: 'test with jest',
        point: '1',
        assignTo: 'foo'
      },
      id: 'id1',
      status: 'Done'
    })

    expect(secondClick).toEqual({
      show: false,
      card: {},
      id: void 0,
      status: void 0
    })
  })
})
