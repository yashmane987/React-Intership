import React from 'react'
import {Link} from 'react-router-dom'
import './aboutus.css'
import img1 from "../images/img1.png";

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
    <div className="container">
      <h2>AboutUs</h2>
    </div>
    <div className="main-div">
        <div className="row">
          <div className="col-6">
            <img src={img1} className="img-box" alt='aboutus' />  
          </div>
          <div className="col-6">
          <h1>I'm <span>Yash</span></h1>

            <p> MERN Stack Developer with an entry-level foundation in MongoDB, Express.js, React.js, and Node.js.
             Passionate about building efficient and scalable web applications with a keen interest in front-end and</p> 
          </div>
        </div>
        </div>
        </div>
  )
}

export default AboutUsPage
