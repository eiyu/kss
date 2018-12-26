export const SHOW_TASK_DETAILS = "SHOW_TASK_DETAILS"
export const SHOW_FORM = "SHOW_FORM"

export const showForm = () => {
  return {type: SHOW_FORM}
}

export const showTaskDetails = (card,name) => {
  console.log('act',name);
  return {
    type: `${SHOW_TASK_DETAILS}${name}`,
    card
  }
}
