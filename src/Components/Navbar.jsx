import React from 'react'
import '../CSS_files/Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className='navbardiv'>

        <h1><span>Urban</span>Science</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Project</li>
            <li>Blog</li>
        </ul>
        <button>Enquire Now</button>
    </div>
    </>
  )
}

export default Navbar