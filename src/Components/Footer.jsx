import React from 'react'
import "./Footer.css"
const Footer = ({ marginTop }) => {
  return (
  <>
  <footer style={{ marginTop: marginTop }}>
    <div className="footer-container">
        <div>
  <h3>Contact us</h3>
        <p>Faisalabad</p>
        {/* <p>Faisalabad</p>
        <p>Faisalabad</p> */}
        </div>
         <div className="social">
        <h3>Follow us</h3>
        <a href="">Facebook</a>
        <a href="">Instagram</a>
        <a href="">Youtube</a>
    </div>
    </div>
 
</footer>


  </>
  )
}

export default Footer
