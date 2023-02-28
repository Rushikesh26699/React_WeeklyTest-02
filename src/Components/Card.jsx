import React from 'react'
import '../CSS_files/Card.css'
const Card = ({img,h1}) => {
  return (
   <>
    <div className='card'>
        <img src={img} alt="" />
        <h1>{h1}</h1>
    </div>
   </>
  )
}

export default Card