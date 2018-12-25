import PropTypes from 'prop-types'
import styled from 'styled-components'


export const TaskFormContainer = styled.div`
  visibility: ${({show}) => show ? "show" : "hidden"};
  width: 100%;
  height: 100%;
  transform: ${props => {
    return props.show ?
    "translate3d(0,0,0)" :
    "translate3d(0, 0, 0);"
  }}
`

TaskFormContainer.displayName = "TaskFormContainer"
