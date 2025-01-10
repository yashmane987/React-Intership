import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <div>
      <div className="hero">
    <nav>
        <ul>
        <li><Link to="/">Home</Link></li>           
        <li><Link to="/aboutus">AboutUs</Link></li> 
        <li><Link to="/service">Service</Link></li> 
        <li><Link to="/contactus">ContactUs</Link></li> 
        </ul>
    </nav>

    <div class="info">
        <h1>I'm <span>Yash</span></h1>
        <p>This is my official portfolio website to showcase my all works related to web development and UI design
        </p>
        <a href="download">Download CV</a>
    </div>                 
</div>

    </div>
  )
}

export default HomePage
