import React from 'react'
import "./CardFront.css"

function CardFront({title, img}) {
    return (
      <div className="cardFront">
        <div className="cardFront__img"> 
         <img
           src={img}
            alt="hl"
           height="280px"
           width="190px"
           style={{
           cursor: "pointer"
           }}
         />
        </div>
      
       <div className="cardFront__title">
          <h4  
           style={{
           cursor: "pointer"
           }}
           >
             {title}</h4>
          </div>
      </div>

  );
   }
export default CardFront;