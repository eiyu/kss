import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'
import {CardsContainer} from './styled/CardsContainer'
import '../cards.css'
// todo create updating functionalities
const Cards = ({items: card, status}) => (
  <div className="card-container">
    <CardsContainer>
      {
        Object.keys(card)
          // better use card id than array index
          .map((key) => {
            // create separate component
            return (<Card status={status} item={card[key]} key={key} id={key}/>)
          })
      }
    </CardsContainer>
  </div>
)

Cards.propTypes = {
  items: PropTypes.object,
  status: PropTypes.string
}

export default Cards
