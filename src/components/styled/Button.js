import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Button = styled.button`
  width: auto;
  height: auto;
  padding: 5px;
  border-radius: 5px;
  background-color: ${({color}) => color};
`

Button.displayName = 'Button'

Button.propTypes = {
  color: PropTypes.string
}
