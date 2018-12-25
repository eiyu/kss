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
        Object.keys(card)
          // better use card id than array index
          .map((key) => {
            console.log(key);
            // create separate component
            return (<Card item={card[key]} key={key} />)
          })
      }
    </CardsContainer>
  </div>
)

Cards.propTypes = {
  items: PropTypes.object
}

export default Cards
