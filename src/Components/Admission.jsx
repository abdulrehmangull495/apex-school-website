import React from 'react'
import "./Admission.css"
import Footer from './Footer'
const Admission = () => {
  return (
    <>
    <section className="admission">
    <h2>Admission Form</h2>
    <div className="left-rightsec">

    
  <div className="left-side">
  <form>
    <input type="text" placeholder="Student Name"/>
    <input type="text" placeholder="Father Name"/>
    <input type="email" placeholder="Email"/>
    <input type="tel" placeholder="Phone Number"/>
    <select name="" id="">
    <option value="">Select Class</option>
    <option value="">Matric</option>
    <option value="">Inter</option>
    <option value="">Graduation</option>
    </select>
    <textarea name="" id="">Message</textarea>
    <button className="submit">Submit Application</button>
  </form>

</div>
<div className="right-side">
    <div className="information">
        <h3>Contact Information</h3>
        <div className="details">
        <p><strong>Address:</strong>Faisalabad</p>
        <p><strong>Phone No:</strong>Faisalabad</p>
        <p><strong>Email:</strong>info@brightschool.com</p>
        </div>
    </div>
</div>
    </div>
</section>
<Footer marginTop="2px"/>
    </>
  )
}

export default Admission
