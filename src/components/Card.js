import React from 'react'
import '../card.css'
// todo create updating functionalities
const Card = ({items: card}) => (
  <div className="card-container">
    <div className="card-status">{card.status}</div>
    <div className="card-body">
      {
        card.map((item,i) => {
          // create separate component
          return (
            <div key={i}>
            <h4>{item.title}</h4>
            <p>Point: {item.point}</p>
            <p>Assign To: {item.assignTo}</p>
            </div>
          )
        })
      }
    </div>
  </div>
)

export default Card
