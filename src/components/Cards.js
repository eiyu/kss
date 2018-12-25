import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import {CardsContainer} from './styled/CardsContainer'
import '../cards.css'
// todo create updating functionalities
const Cards = ({items: card}) => (
  <div className="card-container">
    <div className="card-status">{card.status}</div>
    <CardsContainer>
      {
        // better use card id than array index
        card.map((item,i) => {
          // create separate component
          return (<Card item={item} key={i} />)
        })
      }
    </CardsContainer>
  </div>
)

Cards.propTypes = {
  items: PropTypes.array
}

export default Cards
