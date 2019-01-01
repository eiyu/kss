import PropTypes from 'prop-types'
import styled from 'styled-components'


export const FormContainer = styled.div`
  visibility: ${({show}) => show ? "show" : "hidden"};
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  div {
    width: 300px;
    height: 360px;
    background: white;
    position: fixed;
    top: 30%;
    left: 30%;
    bottom: 30%;
  }
  .hide-toggle {
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

FormContainer.displayName = "FormContainer"
FormContainer.propTypes = {
  show: PropTypes.bool
}
