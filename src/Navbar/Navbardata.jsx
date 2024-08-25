import React from 'react'

import Slide1 from  '../Images/Slide1.webp'
import Slide2 from '../Images/Slide2.webp'
import Slide3 from'../Images/Slide3.webp'
import icon from '../Images/icon.png'
export default function Navbar() {
  return (
    <div >
     <nav className="navbar  fix-top navbar-expand-md bg-dark navbar-dark">
     
      <div className="container">
        <img src={icon} className="navbar-img" style={{height:"60px",width:"100px"}}alt="icon" />
          <a className="navbar-brand p-2" href="#">Front End Developer</a>
         
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
         </button>
        
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
  
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link mx-3 " href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" href="#skills">Skills</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link mx-3" href="#blogs">Blogs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" href="#contact">Contact</a>
        </li>
    </ul>
    </div>
</div>
  </nav>

  <div id="demo" className="carousel slide w-100"  style={{height:"500px"}} data-bs-ride="carousel">


<div class="carousel-indicators">
  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>


<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={Slide1} alt="slide1" className="d-block w-100" style={{opacity:0.9,height:"600px"}}/>
    <div class="carousel-caption">
        <h5>Well come to Web developers</h5>
       
      </div>
  </div>
  <div className="carousel-item">
    <img src={Slide2} alt="Chicago" className="d-block w-100" style={{opacity:0.9,height:"600px"}}/>
  </div>
  <div className="carousel-item">
    <img src={Slide3} alt="New York"className="d-block w-100" style={{opacity:0.9,height:"600px"}}/>
  </div>
</div>


<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>
</div>

    
    
     </div>
  )
}

