import React from 'react'
import PropTypes from 'prop-types'
import {Board} from './Board'
import Grid from './styled/Grid'
import Row from './styled/Row'
import Col from './styled/Col'
// import '../board.css'

// helper function
// const filterCard = (cards,status) => cards.filter((card) => {
//   return card.status === status
// })

export const Boards = (props) => (
  <Grid>
  <Row>
    <Col xs={10} md={3} lg={3}><Board cards={props.cards.backlog} boardName="Back-Log" color="red"/></Col>
    <Col xs={10} md={3} lg={3}><Board cards={props.cards.todo} boardName="To-Do" color="blue"/></Col>
    <Col xs={10} md={3} lg={3}><Board cards={props.cards.doing} boardName="Doing" color="orange"/></Col>
    <Col xs={10} md={3} lg={3}><Board cards={props.cards.done} boardName="Done" color="green"/></Col>
  </Row>
  </Grid>
)

Boards.propTypes = {
  cards: PropTypes.object
}
