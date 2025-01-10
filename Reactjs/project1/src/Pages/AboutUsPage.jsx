import React from 'react'
import {Link} from 'react-router-dom'
const AboutUsPage = () => {
  return (
     <div className="hero">
    <nav>
        <ul>
        <li><Link to="/">Home</Link></li>           
        <li><Link to="/aboutus">AboutUs</Link></li> 
        <li><Link to="/service">Service</Link></li> 
        <li><Link to="/contactus">ContactUs</Link></li> 
        </ul>
    </nav>
    <h2>This is AboutUs Page</h2>
    </div>
  )
}

export default AboutUsPage
