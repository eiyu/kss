export const SHOW_TASK_DETAILS = "SHOW_TASK_DETAILS"
// export const SHOW_FORM = "SHOW_FORM"
//
// export const showForm = (name) => {
//   return {type: SHOW_FORM}
// }

export const showTaskDetails = (id,card,name) => {
  return {
    type: `${SHOW_TASK_DETAILS}${name}`,
    card,
    id
  }
}
