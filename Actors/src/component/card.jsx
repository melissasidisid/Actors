import React from 'react'
import card from '../component/Card.css'
function Card(props) {
  // the link to addto images in order to make them work
  const API_IMG='https://image.tmdb.org/t/p/w500/'
  // if there is an actor in the list the page will show it else it wont
  if (props.known_for_department === 'Acting') {
    return (
      <div className="card">
        <div className="poster">
          {/* ad the image to the link */}
        <img src={API_IMG + props.profile_path} />
        </div>
        {/* props about the actor */}
        <div className="info">
       
        <p className="name" style={{color:'black'}}>{props.name}</p> 
       
        
         
          
        </div>
      </div>
    )
  } else {
    // if the page diesn'treturn an actor none of the above will aprear
    return null
  }
}

export default Card
