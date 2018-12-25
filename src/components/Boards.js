import React from 'react'
import {Board} from './Board'
import Grid from './styled/Grid'
import Row from './styled/Row'
import Col from './styled/Col'
// import '../board.css'

// helper function
const filterCard = (cards,status) => cards.filter((card) => {
  return card.status === status
})

export const Boards = (props) => (
  <Grid>
  <Row>
    <Col xs={10} md={3} lg={3}><Board cards={filterCard(props.cards,'backlog')} boardName="Back-Log"/></Col>
    <Col xs={10} md={3} lg={3}><Board cards={filterCard(props.cards,'todo')} boardName="To-do"/></Col>
    <Col xs={10} md={3} lg={3}><Board cards={filterCard(props.cards,'doing')} boardName="Doing"/></Col>
    <Col xs={10} md={3} lg={3}><Board cards={filterCard(props.cards,'done')} boardName="Done"/></Col>
  </Row>
  </Grid>
)
