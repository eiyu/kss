export const SHOW_TASK_DETAILS = "SHOW_TASK_DETAILS"
// export const SHOW_FORM = "SHOW_FORM"
//
// export const showForm = (name) => {
//   return {type: SHOW_FORM}
// }

export const showTaskDetails = (card,name) => {
  console.log(name);
  return {
    type: `${SHOW_TASK_DETAILS}${name}`,
    card
  }
}
