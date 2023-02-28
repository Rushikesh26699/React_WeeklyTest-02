import React from 'react'

const FooterContain = (props) => {
  return (
   <>
   <div className="footer-css">
       <h2>{props.h2}</h2>
       <p>{props.p}</p>
       <p>{props.p1}</p>
       <p>{props.p2}</p>
       <p>{props.p3}</p>
       <img src={props.img} alt=""></img>
 </div>
   </>
  )
}

export default FooterContain