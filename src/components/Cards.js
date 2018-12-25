import React from 'react'
import Card from './Card'
import '../cards.css'
// todo create updating functionalities
const Cards = ({items: card}) => (
  <div className="card-container">
    <div className="card-status">{card.status}</div>
    <div className="card-body">
      {
        // better use card id than array index
        card.map((item,i) => {
          // create separate component
          return (<Card item={item} key={i} />)
        })
      }
    </div>
  </div>
)

export default Cards
