import PropTypes from 'prop-types'
import styled from 'styled-components'

export const BoardTitle = styled.div`
  width: auto;
  height: auto;
  padding: 5px;
  .container: {
    border: 1px solid black;
  }
  .title {
    padding: 5px;
    background-color: ${({color}) => color};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
`

BoardTitle.displayName = 'Button'

BoardTitle.propTypes = {
  color: PropTypes.string
}
