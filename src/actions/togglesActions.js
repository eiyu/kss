export const SHOW_TASK_DETAILS = "SHOW_TASK_DETAILS"
export const SHOW_FORM = "SHOW_FORM"
export const SHOW_BOARD = "SHOW_BOARD"

export const showForm = () => {
  return {type: SHOW_FORM}
}
export const showBoard = () => {
  console.log('aa');
  return {type: SHOW_BOARD}
}

export const showTaskDetails = (card,name) => {
  return {
    type: `${SHOW_TASK_DETAILS}${name}`,
    card
  }
}
