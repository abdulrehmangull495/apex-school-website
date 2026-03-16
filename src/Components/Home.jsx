import React from 'react'
import "./Home.css"
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <section className="hero">
    <div className="hero-content">
        <h1>A Warm Welcome to Apex School</h1>
        <p>We empower students with knowledge, skills and values to build a better tomorrow.</p>
        <div className="hero-buttons">
            <NavLink className="btn" to="/Admission">Apply Now</NavLink>
            <NavLink className="btn-secondary" to="/About">Explore More</NavLink>
        </div>
    </div>
</section>
<section className="about">
    <div className="about-container">
        <h2>About our School</h2>
        <p>Bright School is committed to quality education and nurturing young minds to become responsible global citizens.</p>
    </div>
    <div className="features">
        <div className="card">
            <div className="quality-heading">
                <h2>Quality Education</h2>
                <p>A Modern Curriculum for Overall Student Development</p>
            </div>
        </div>
        <div className="card">
            <div className="experiencedteachers-heading">
                <h2>Experienced Teachers</h2>
                <p>Highly Qualified Teachers Committed to Student Success.</p>
            </div>
        </div>
        <div className="card">
            <div className="smallclassrooms-heading">
                <h2>Quality Education</h2>
                <p>Technology Powered Classrooms for Better Learning.</p>
            </div>
        </div>
    </div>
</section>

<section className="stats">
    <div className="stats-container">
        <div className="statsbox">
            <h2>400+</h2>
            <p>Students</p>
        </div>
        <div className="statsbox">
            <h2>30+</h2>
            <p>Teachers</p>
        </div>
        <div className="statsbox">
            <h2>15+</h2>
            <p>Classrooms</p>
        </div>
        <div className="statsbox">
            <h2>10+</h2>
            <p>Experience</p>
        </div>
    </div>
</section>
<section className="gallery">
    <h2>Our Gallery</h2>
    <div className="imgs-box">
         <img src="shipman-northcutt-sgZX15Da8YE-unsplash.jpg" alt=""/>
        <img src="andrew-ebrahim-zRwXf6PizEo-unsplash.jpg" alt=""/>
        <img src="building.jpg" alt=""/>
        <img src="cdc-gsRi9cWCIB0-unsplash.jpg" alt=""/>
        <img src="element5-digital-OyCl7Y4y0Bk-unsplash.jpg" alt=""/>
        <img src="national.jpg" alt=""/>
        <img src="note-thanun-CYlPykF-qAM-unsplash.jpg" alt=""/>
         <img src="wonderlane-b9-odQi5oDo-unsplash.jpg" alt=""/>
        
    </div>
    
</section>
<Footer marginTop="30px"/>
    </>
  )
}

export default Home
