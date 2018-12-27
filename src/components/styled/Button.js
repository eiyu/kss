import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Button = styled.button`
  width: auto;
  height: auto;
  padding: 5px;
  border-radius: 5px;
  background-color: ${({color}) => color};
  z-index: ${(task) => task ? -1 : 0}
`

Button.displayName = 'Button'

Button.propTypes = {
  color: PropTypes.string
}
