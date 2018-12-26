import PropTypes from 'prop-types'
import styled from 'styled-components'


export const TaskDetailsContainer = styled.div`
  visibility: ${({show}) => show ? "show" : "hidden"};
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  .details {
    width: 300px;
    height: 360px;
    background: white;
    position: fixed;
    top: 30%;
    left: 30%;
    bottom: 30%;
  }
`

TaskDetailsContainer.displayName = "TaskDetailsContainer"
TaskDetailsContainer.propTypes = {
  show: PropTypes.bool
}
