import React from 'react'
import PropTypes from 'prop-types'
import BoardContainer from './BoardContainer'
import {Grid, Row} from 'react-styled-flexboxgrid'

// this cant be static anymore since i add the custom board feature
// improve nesting tags

export const Boards = (props) => {
  const helper = name => {
    switch (name) {
      case "Back-Log": return "red"
      case "To-Do": return "blue"
      case "Doing": return "orange"
      case "Done": return "green"

      default:

    }
  }
  return (
  <Grid>
    <Row>
    { props.containers.map((val,i) => {
      if(props[val] !== undefined)  {
        return <BoardContainer key={val} cards={props[val]} boardName={val} color={helper(val)} />
      } else {
        return <div> </div>
      }
    })}
    </Row>
  </Grid>
)}

Boards.propTypes = {
  cards: PropTypes.object
}
