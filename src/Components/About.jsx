import React from 'react'
import "./About.css"
import Footer from './Footer'
const About = () => {
  return (
    <>
    <section className="about">
    <div className="principal-section">
        <div className="principlasec-img">
            <img src="principal.jpg" alt=""/>
        </div>
        <div class="principalsec-about">
            <h2>Principal's Message</h2>
            <p>Welcome to Bright Future School. Our mission is to provide quality education and help students grow both academically and morally. We focus on innovation, discipline and excellence to prepare students for a successful future.</p>
        </div>
    </div>
</section>
<section className="departments">
    <h2 className="our">Our Departments</h2>
    <div className="priseco-div">
    <div className="primary-sec">
        <h3>Primary Section</h3>
        <p>We Build a Strong Educational Foundation for Young Learners.</p>
        <button className="learn-btn">Learn more</button>
    </div>
     <div className="secondary-sec">
        <h3>Secondary Section</h3>
        <p>Preparing Students with Strong Academic Skills.</p>
        <button className="learn-btn">Learn more</button>
    </div>
    </div>
     <div className="higher-sec">
        <h3>Higher Secondary</h3>
        <p>Preparing Students for College and Professional Success.</p>
        <button className="learn-btn">Learn more</button>
    </div>
    
</section>
<section className="facilities">
    <h2 >Our Facilities</h2>
    <div className="libcom-sec">
    <div className="box"><h4>Library</h4></div>
    <div className="box"><h4>Computer Labs</h4></div>
</div>

<div className="scieplay-sec">
    <div className="box"><h4>Science Lab</h4></div>
    <div className="box"><h4>Playgrounds</h4></div>
</div>
<div className="transportcafe-sec">
    <div className="box"><h4>Transport</h4></div>
    <div className="box"><h4>Cafeteria</h4></div>
</div>
    
</section>

<section className="teachers">
    <h2>Our Teachers</h2>
    <div className="teachers-box">
        <div className="box1">
            <img src="Screenshot 2026-03-09 230426.png" alt=""/>
            <h5>Ali Khan</h5>
            <p>Mathematics</p>
        </div>
        <div className="box2">
            <img src="phyteacher.jpg" alt=""/>
            <h5>Fatima Khan</h5>
            <p>Physics</p>
        </div>
        <div className="box3">
            <img src="csteacher.jpg" alt=""/>
            <h5>Usman Tariq</h5>
            <p>Computer Science</p>
        </div>
       
       
    </div>
     <div className="englishteacher">
         <div className="box4">
        <img src="icons8-team-FcLyt7lW5wg-unsplash (1).jpg" alt=""/>
        <h5>Ayesha Noor</h5>
        <p>English</p>
        </div>
    </div>
    
</section>
<Footer marginTop="2px"/>
    </>
  )
}

export default About
